thingy
======

ING’s 24H-CodeIT hackathon project

http://thingy-ing.azurewebsites.net

- scaffolded project with http://yeoman.io/codelab/setup.html

- bower installed : https://github.com/cmaurer/angularjs-nvd3-directives

install first nodejs

```
npm install -g jshint grunt grunt-cli bower
npm install && bower install
```
then :

```
grunt serve // to run de website locally
grunt build // to package the website an ftp it to http://thingie.azurewebsites.net
```
install sublimetext.. or not
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
api/campaigns/{id}/validate

api/customers/nearby
api/customers/me/interests

api/facebook/authorize
api/foursquare/checkin
api/foursquare/authorize

api/trends/nearby
api/trends/mostpopular
