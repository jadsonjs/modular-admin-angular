# Modular Admin Angular

Modular Admin Angular is an angular front-end application based on [ModularAdmin](https://github.com/modularcode/modular-admin-html) Bootstrap template 


![Screenshot](https://github.com/jadsonjs/modular-admin-angular/blob/master/modular-admin-angular/src/assets/modular-admin/assets/demo.png)


This project has no angular services, because it has not communication with back-end, it is just a generic font-end project to be adapted to a full project.


### Version 0.9 - morris an flow charts error, problems and came back to the dashbord form public page


In this project we have two basic kinds of pages. One kind when the user is log in, that are pages inside the “internal” module, having the header, footer and side bar; and public pages, that are full page with no header or footer, like they are in modular admin basic project that this angular project was based on.
	So the project structure is like this:
	
```
├── app/                           
|   ├── app module/                       # root module of all angular projects
|   └── login module /                    # login public page
|   └── sign up module /                  # sign up public pages
|   └── others public modules /           # 404, 505, etc...
|   └── ...
|   └── internal module /                 # all internal pages are here
│   |   ├── dashboard module/             # dashboard
│   |   ├── form module/                  # form pages
│   |   ├── tables module/                # tables pages
│   |   ├── others module/                # items, ui elements, etc..
│   |   ├── ...

```



## 1.Getting Started

```
git clone https://github.com/jadsonjs/modular-admin-angular.git
```

## 2. Install Node.js and Angular/CLI

As all Angular project, you need to have [NodeJs](https://nodejs.org/en/) with npm. 

After install node.js, you also need to have install Angular CLI and typescript.

```
npm install -g typescript
npm install -g @angular/cli
```

## 3. Build the project

```
cd modular-admin-angular
npm install 
ng server
```

Open the web brower in http://localhost:4200



