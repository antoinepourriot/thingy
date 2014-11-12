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
  
  api/campaigns/{id}/accept
  api/campaigns/{id}/complete
  api/campaigns/count
  api/campaigns 
  api/campaigns?count=25

  api/customers/nearby
  api/customers/me/interests

  api/facebook/authorize
  api/foursquare/checkin
  api/foursquare/authorize

  api/trends/nearby
  api/trends/mostpopular
