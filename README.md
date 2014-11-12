thingy
======

ING’s 24H-CodeIT hackathon project

http://thingy-ing.azurewebsites.net

- scaffolded project with http://yeoman.io/codelab/setup.html

- bower installed : https://github.com/cmaurer/angularjs-nvd3-directives


```
npm install -g jshint yo grunt bower
yo angular
bower install d3 --save
bower install nvd3 --save
bower install angularjs-nvd3-directives --save
```

added sublimelinter + sublimelinter-jshint + esformatter

search pattern in sublime: 
```
<open folders>, -bower_components/*, -node_modules/*,
```