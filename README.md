Saint-Gobain Front-end
======================================

Front-end integration for Saint-Gobain and BETC

## Requirements
* npm (node package manager)
* Node.js
* Sass
* Compass


## Specification
4 html templates will be delivered.  
Assets need to be separated (sprites, js and css files).  
Breakpoints :
- tablet portrait -> 768px
- mobile -> 600px
- smaller devices -> 480px - 320px

## Installation

1. Install npm dependencies  
  ```
  npm install
  ```
4. Use grunt to generate assets and watch for changes
  
  ```
  grunt default
  ```
  
## Warnings

We use a custom template for sprite SCSS generation, that you can find under 
```
sprity-scss/template.hbs
````

### Contact
camy.adrien@digipolitan.com