# Forum-App

## Introduction
This forum is set aside for users to post topics and add comment using SPA(Single Page Application).

## Getting started
### Dependencies
#### Front end
* ReactJS
* BootStrap
* Redux
* Redux-Sage

### Back end
* Spring Boot
* FlyWay
* MySQL (default port is 3306 and create database "forum" before running)

### Installing
* Put backend folder in Intellij or other IDE
* Place frontend folder in VScode or anything else
* Configure username and password in backend/src/main/resources/applicaiton.properties to your MySQL database user
* Empty database would be okay, flyway will do the migration for you, see backend/src/main/resources/db/migration/V1__setup.sql for detail

### Executing Program
* Run backend/src/main/kotlin/forum/backend/BackendApplication.kt first
* Run frontend
* Open browser with the following link
```
http://localhost:3000
```

## Author  
Casper Tsang  
Email: kayungtsang@gmail.com  
Please feel free to email if you have got any questions or recommendations to my project!
