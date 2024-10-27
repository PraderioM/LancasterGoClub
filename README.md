# LancasterGoClub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Time and location changes

The time and location appearing in the webpage are defined in the JSON file **`src/assets/meeting_times.json`.**
To update meeting times you need to modify that file. DO NOT FORGET to upload your changes to github otherwise they will not be visible in the webpage.

In order to **REMOVE AN EXISTING MEETING TIME** you just need to delete the dictionary (a.k.a. the region surrounded by curly "{", "}" brackets ) which contains the information regarding that meeting time.

In order to **ADD A NEW MEETING TIME** copy the following template, and place it in the above list (a.k.a. the region surrounded by square "[", "]" brackets).
**DO NOT FORGET** to place a comma between different meeting times.

`
  {
    "meetingDay": "Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday",
    "meetingTime": "HH:MM-HH:MM",
    "place": "ROOM NAME",
    "extraInformation": "",
    "linkToPlace": "LINK TO MAP"
  }
`

The above parameters are described as follows:
  **meetingDay**: Is the day of the week you are meeting. Leave one and remove the rest.
  **meetingTime**: Is the start and finish of meeting time. Boh in format HH:MM (a.k.a. two digits for hour, a semicolon and two digits for minute).
  **place**: Is the actual room within Lancaster University in which you will be meeting.
  **extraInformation**: Any additional information should be added here. For example if this is a temporary location write it here or if the meeting is online write it here.
  **linkToPlace**: A link to Maze Map or other pointing to the meeting location. If it is online make it point to the online meeting place.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `docs` directory. Use the `--configuration production` flag for a production build.
This will update the GitHub pages after you make the  push.

**If you want to generate the file to go in the LUSU page run `sh create_lusu_page.sh` or `source create_lusu_page.sh`. This will build the webpage in `docs` as specified earlier,
then it will run the `inline_to_single_html.py` python script to inline all css and script into the index file to
create a single temporary file and then will merge this temporary file with `preamble.html` to create the
file `dist/lusu_page.html` that can be copy-pasted into the LUSU webpage**

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
