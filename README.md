# CogniacAPI

I proioritized the functionality according to the usecase and then focused on usability.
I divided the project into 3 main components:
1. Grid
2. Pagination
3. Filters
and developed them in that order.
Apart from those, I wired together the routing module and authentication service.

The image grid is responsive and displays the required parameters.
Pagination works by displaying the detections for the current dataset and once that is exhausted the next url is called to aggregate the result with the existing dataset
Dataset can be filtered based on the probability and start and end dates.

## Improvements:
I have to work on the validations for the filters where I need to make sure that the min probability is less than max probability and start date < end date when both are applied together.
Yet to add the provisions for the user to mark if the detection is right.
The usability can be improved by using icons(for filter and clear filter)
Pagination could be improved to make it a bit more usable.
This app works for the image sizes in the current image set. If larger images are provided, I would have to handle the resizing.

## Instructions to run:
After checking out the code, you can run it using ng serve command if you have Angular CLI installed.
Once it is up and running, you can navigate to http://localhost:4200/home to view the app.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
