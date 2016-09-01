"transform-es2015-modules-simple-amd",
"transform-es2015-modules-amd",
"babel-plugin-add-module-exports",
"add-return-exports",
"transform-es2015-modules-amd",
    [
      "transform-es2015-classes",
      {
        "loose": true
      }
    ]

# Kendo Dojo App

### Overview

This project is meant to be a template for using Dojo 1.10+ along with the Kendo UI web library.

The Kendo UI seems to use absolute pathing when requiring modules. This requires some tweaking
by using the Dojo deps, maps, and packages configuration attributes.

### First Steps

After checking out the code, use npm and bower to initialize the third party libraries.

##### Pre-Conditions:

1. node and npm are installed
2. bower is globally installed
3. http-server is globally installed.

##### Post-Clone:

1. npm install

##### Run example:
1. http-server -p 8080 ./src
2. open browser to http://localhost:8080/index.html

### Footnotes 

#### Changing Bower local installation path (common):
create the file: ```.bowerrc``` with the following contents:
>```
>{
>  "directory" : "src/js/lib"
>}
>```

#### Change NPM local installation path (not common):
Bower takes care of HTML dependencies, so
NPM should only be used for development libraries in which case node_modules is not
a location that needs to be changed.

```npm install awesomelib -g --prefix ./src/lib```

