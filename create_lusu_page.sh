#!/bin/bash

INDEX_FILE_NAME=docs/index.html
OUTPUT_FILE_NAME=dist/lusu_page.html
TMP_FILE_NAME_1=dist/tmp_1.html
TMP_FILE_NAME_2=dist/tmp_2.html
EXPRESSION_TO_REMOVE='<base href='

rm $OUTPUT_FILE_NAME

echo 'Building angular project.'
ng build --configuration gh-pages

echo 'Building temporary single HTML.'
inline-to-single-html/.venv/bin/python inline-to-single-html/inline_to_single_html.py --output-file $TMP_FILE_NAME_1 $INDEX_FILE_NAME

echo 'Removing "'"$EXPRESSION_TO_REMOVE"'..." from temporary single HTML.'
inline-to-single-html/.venv/bin/python inline-to-single-html/remove_lines_containing.py --input-file $TMP_FILE_NAME_1 --output-file $TMP_FILE_NAME_2 --remove-expression $EXPRESSION_TO_REMOVE

echo 'Adding preamble.'
cat preamble.html $TMP_FILE_NAME_2 >> $OUTPUT_FILE_NAME

echo 'Cleaning temporary files.'
rm $TMP_FILE_NAME_1
rm $TMP_FILE_NAME_2

echo 'LUSU html page has been stored in ' $OUTPUT_FILE_NAME
