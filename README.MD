# Kendo Dojo App

### Overview

This project is meant to be a template for using Dojo 1.10+ along with the Kendo UI web library.

### First Steps

After checking out the code, use npm and bower to initialize the third party libraries.

Pre-Conditions:

1. node and npm are installed
2. bower is globally installed
3. http-server is globally installed.

### Using NPM and Bower 

#### Change Bower local installation path (common):
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

