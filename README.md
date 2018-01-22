# Modular Admin Angular

Modular Admin Angular is an **Angular 4** front-end application based on [ModularAdmin](https://github.com/modularcode/modular-admin-html) Bootstrap template 


![Screenshot](https://github.com/jadsonjs/modular-admin-angular/blob/master/modular-admin-angular/src/assets/modular-admin/assets/demo.png)


<p align="center">
  <strong>
      <a href="http://modularcode.github.io/modular-admin-html/" target="_blank">View HTML Demo Version of Original Modular Admin</a>
  </strong>
</p>


This project has no angular services, because it has not communication with back-end, it is just a generic font-end project to be adapted to a full project.


**Version 1.0.0**


In this project we have two basic kinds of pages. One kind when the user is log in, that are pages inside the “internal” module, having the header, footer and side bar; and public pages, that are full page with no header or footer, like they are in modular admin basic project that this angular project was based on.
	So the project structure is like this:
	
```
├── src/
|   ├── assets/                               # third-party static js and css files
|   |   └── modular-admin /                   # original boostrap project                          
|   ├── app/                                  # root module of all angular projects
|   |   └── login /                           # login public page
|   |   └── signup /                          # sign up public pages
|   |   └── others public modules /           # 404, 505, etc...
|   |   └── ...
|   |   └── internal module /                 # all internal pages are here
│   |   |   └── dashboard/                    # main internal page
│   |   |   └── form/                         # form pages
│   |   |   └── tables/                       # tables pages
│   |   |   └── others internal modules/      # items, ui elements, etc..
│   |   |   └── ...

```


**Observation:** The original modular admin bootstrap project that this angular project was based is inside the _"src/assets"_ directory.


## 1.Introduction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

```
@angular/cli: 1.5.5
@angular-devkit/build-optimizer: 0.0.38
@angular-devkit/core: 0.0.25
@angular-devkit/schematics: 0.0.48
@ngtools/json-schema: 1.1.0
@ngtools/webpack: 1.8.5
@schematics/angular: 0.1.13
@schematics/schematics: 0.0.13
typescript: 2.4.2
webpack: 3.8.1
```

and bootstrap 4.0.0-beta.2.


## 2.Getting Started

```
git clone https://github.com/jadsonjs/modular-admin-angular.git
```

## 3. Install Node.js and Angular/CLI

As all Angular project, you first need to install [NodeJs](https://nodejs.org/en/) thats include npm. 

After install node.js, you need to install Angular CLI and typescript using the npm tool with the commands:

```
npm install -g typescript
npm install -g @angular/cli
```

## 4. Build the project

```
cd modular-admin-angular
npm install 
ng server
```

Open the web brower in http://localhost:4200


## 5. Build for production

Change the ``<base href="/">`` in the index.html file to the name of your application, example:  ``<base href="/myapp">``

build the project:

```
ng build --prod
```

This command will generate a *_"dist"_* folder.

Rename the generated _"dist"_ folder under _"modular-admin-angular"_ to *_"myapp"_* (the same name defined in index.html). Copy *_"myapp"_*  to a web server of your preference, apache, tomcat, jetty, etc.


