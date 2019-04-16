# ManagerapiUi - Desafio Ceuma

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## Specific objective

Consume the backend of an API Rest developed in Java.

## About the application

Application frontend developed with Angular and Primeng for the management of Students and Courses of the practical test of the University Ceuma.

## Client Security

The client of this application supports basic security or oath security with JWT using web token for user authentication.

## System Users

The system currently has two users, but can have many depending on the need.

## Users Permission

1. Admin - General permission - Username: admin@ceuma.com

2. Maria - Basic permission - Username: maria@ceuma.com

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Starter Basic Security

```
java -jar ceuma_api-1.0.0-SNAPSHOT.jar --spring.datasource.username=root --spring.datasource.password=passwordb --ceumapi.allowed.origin=http://localhost:4200
```

## Author

* **Lucas Farias** - *Initial work* - [Lucas Farias](https://github.com/luucasfarias)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

