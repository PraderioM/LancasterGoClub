#!/bin/bash

INDEX_FILE_NAME=docs/index.html
OUTPUT_FILE_NAME=dist/lusu_page.html
TMP_FILE_NAME=dist/tmp.html

rm $OUTPUT_FILE_NAME

echo 'Building angular project.'
ng build --configuration gh-pages

echo 'Building temporary single HTML.'
inline-to-single-html/.venv/bin/python inline-to-single-html/inline_to_single_html.py --output-file $TMP_FILE_NAME $INDEX_FILE_NAME

echo 'Adding preamble.'
cat preamble.html $TMP_FILE_NAME >> $OUTPUT_FILE_NAME
rm $TMP_FILE_NAME

echo 'LUSU html page has been stored in ' $OUTPUT_FILE_NAME
