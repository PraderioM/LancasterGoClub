#!/usr/bin/env python
# -*- coding= UTF-8 -*-

"""
This script intends to inline Javascript and CSS in the HTML code in order
to pack all the resources in one file in order to make it easier to open it in a browser.

It can be used from the command line (type inline_to_single_html.py --help for usage)
or imported as a module.

For now, it handles only local files.
"""

__author__ = 'e-satis & PraderioM'
__date__ = '2023-02-12'
__version__ = '0.2'

import os
import sys
from urllib.parse import unquote
import re

from optparse import OptionParser
from bs4 import BeautifulSoup as btfs


class InlineToSingleHTML(object):

    def __init__(self, in_path: str):

        self.file_path = in_path

        try:
            with open(file_path, 'r') as in_file:
                self._soup = btfs(in_file, features="html.parser")
        except IOError:
            sys.stderr.write(f"Couldn't read '{file_path}'\n")
            sys.exit(1)

    def inline(self, strip_js: bool = False, in_place: bool = False, out_path: str = 'single_index.html'):
        """
        Inline CSS and Javascript code linked in the file which name is stored in self.file_path.
        """

        # inline css files

        for css_tag in self._soup.findAll('link', rel=u"stylesheet"):
            css_file_path = unquote(os.path.join(self.dir_path, css_tag[u"href"]))
            style_string = ''
            try:
                with open(css_file_path, 'r') as css_file:
                    style_string = '\n'.join(css_file.readlines()).strip()
            except IOError:
                sys.stderr.write(f"Enable to open the CSS file '{css_file_path}'.")
                sys.stderr.write(u"Be sure it is a readable file")

            style_tag = self._soup.new_tag("style")
            style_tag.insert(0, f"\n<!--\n{style_string}\n-->\n")
            css_tag.replaceWith(style_tag)

        if strip_js:
            # remove javascript tags
            for js_tags in self._soup.findAll('script', type="module"):
                js_tags.extract()
        else:
            # inline javascript files
            js_tags = self._soup.findAll('script', type="module", src=re.compile(r".*"))
            for js_tag in js_tags:
                js_file_path = unquote(os.path.join(self.dir_path, js_tag[u"src"]))

                script_string = ''
                try:
                    with open(js_file_path, 'r') as js_file:
                        script_string = '\n'.join(js_file.readlines()).strip()
                except IOError:
                    sys.stderr.write(f"Enable to open the js file '{js_file_path}'")
                    sys.stderr.write(u"Be sure it is a readable file")

                script_tag = self._soup.new_tag("script", type="module")
                script_tag.insert(0, f"\n//<![CDATA[\n{script_string}\n//]]>\n")
                js_tag.replaceWith(script_tag)

        if in_place:
            with open(self.file_path, "w") as html_file:
                html_file.write(self._soup.prettify())
            print(f"File '{self.file_path}'  has been inlined.")
        else:
            with open(out_path, "w") as out_file:
                out_file.write(self._soup.prettify())
            print(f"Inlined HTML file was stored in '{out_path}'.")

    @property
    def dir_path(self) -> str:
        return os.path.dirname(os.path.abspath(self.file_path))


if __name__ == "__main__":

    cmd_parser = OptionParser(usage="usage: %prog <file.html> [options]",
                              version='%prog : ' + __version__,
                              description=__doc__,
                              prog='InlineToSingleHTML')

    default_strip_js = False
    cmd_parser.add_option("-J", "--strip-javascript",
                          action="store_true",  #
                          dest="strip_js",
                          default=default_strip_js,
                          help=f"Remove all javascript tags from the file. Default is '{default_strip_js}'.")

    default_in_place = False
    cmd_parser.add_option("-i", "--in-place",
                          action="store_true",  #
                          dest="in_place",
                          default=default_in_place,
                          help=f"Save the output in the original source file. Default is '{default_in_place}'.")

    default_out_file = "single_index.html"
    cmd_parser.add_option("-o", "--output-file",
                          dest="output_file",
                          default=default_out_file,
                          help="File where output will be saved if not replacing original file. "
                               f"Default is '{default_out_file}'.")

    (named_args, positional_args) = cmd_parser.parse_args()

    if not positional_args:
        sys.stderr.write(u"Not HTML file provided\n")
        cmd_parser.print_help()
        sys.exit(1)

    file_path = positional_args.pop()

    inliner = InlineToSingleHTML(in_path=file_path)
    inliner.inline(strip_js=named_args.strip_js, in_place=named_args.in_place, out_path=named_args.output_file)
