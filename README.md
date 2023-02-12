# LancasterGoClub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/lancaster-go-club` directory. Use the `--configuration production` flag for a production build.
If you want to generate the file to go in the LUSU page run `sh create_lusu_page.sh` or `source create_lusu_page.sh`. This will build the webpage in `dist/lancaster-go-club` as specified earlier,
then it will run the `inline_to_single_html.py` python script to inline all css and script into the index file to
create a single temporary file and then will merge this temporary file with `preamble.html` to create the
file `dist/lusu_page.html` that can be copy-pasted into the LUSU webpage

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
