"""
this script removes lines containing a specific sentence from one file and stores the result in a different file
"""

__author__ = 'PraderioM'
__date__ = '2024-10-31'
__version__ = '0.1'

from optparse import OptionParser

if __name__ == "__main__":

    cmd_parser = OptionParser(usage="usage: %prog <file.html> [options]",
                              version='%prog : ' + __version__,
                              description=__doc__,
                              prog='RemoveLinesContaining')

    cmd_parser.add_option("-i", "--input-file",
                          dest="input_file",
                          help="Original file to be read and purged.")

    cmd_parser.add_option("-o", "--output-file",
                          dest="output_file",
                          help="File where output will be saved.")

    cmd_parser.add_option("-r", "--remove-expression",
                          dest="remove_expression",
                          help="Expression to be removed from original file.")

    (named_args, _) = cmd_parser.parse_args()

    out_text = ''
    with open(named_args.input_file, "r") as input_file:
        with open(named_args.output_file, "w") as output_file:
            for line in input_file:
                if named_args.remove_expression not in line:
                    output_file.write(line)
