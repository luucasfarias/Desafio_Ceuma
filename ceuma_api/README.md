# Ceuma_api - Desafio Ceuma

This project is an API Rest for the management of courses and students of Ceuma University.

## Specific objective

Provide a Spring Boot backend using new technologies to provide quality service.

## About the application

RestFul API developed with Spring Boot, Java, MySql database and maven dependency manager.

## Security

This API has the security of using Spring MVC and JSON Web Tokens support - JWT.

## About JWT

JSON Web Tokens are an industry standard RFC 7519 open method for representing securely between two parties. [JWT](https://jwt.io/)

### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)

### Guides Technologies used
The following guides illustrate how to use some features concretely:

* [Accessing data with MySQL](https://spring.io/guides/gs/accessing-data-mysql/)
* [Flywaydb Version control for your database](https://flywaydb.org/)
* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)
* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/bookmarks/)

## Generate .JAR

```
mvn package
```
In the project root folder

## Starter Basic Security

```
java -jar ceuma_api-1.0.0-SNAPSHOT.jar --spring.datasource.username=root --spring.datasource.password=passwordb --ceumapi.allowed.origin=http://localhost:4200
```

## Author

* **Lucas Farias** - *Initial work* - [Lucas Farias](https://github.com/luucasfarias)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details