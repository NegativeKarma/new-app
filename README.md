# Questions

* Where in the file structure is the component file located?
* The new Comment component is in `src/app/comment`

* What is the decorator, and what information does the decorator have?
* The decorator tell us that CommentComponent is a  component by stating it with `@Component`. The decorator store information about the `selector` , `templateUrl`, `styleUrls`.

* Where is the template file located? Now add a paragraph with your name in the template
* It is in src/app/comment/ in the file `comment.component.html`
Name written

* How do we add our component to a view?
* Checking the selector in `src/app/comment/comment.component.ts` and then copying said selector in the `src/app/app.component.html`

* Can we add our component to the index file?
* Most of the time you’ll render a component in the root component or a component that’s a child of the root component. You can render the component in the index.html too, but it requires to create a Module and change the configuration of the bootstrap object in the `@NgModule` decorator

* Is it possible to add the component to the app.component.html file?
* It is possible and it is where it should be added

Button inspiration video https://youtu.be/fDqGfrnutug?t=2m38s


# NewApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
