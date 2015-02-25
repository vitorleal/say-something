# Say something
Say something is a node.js lib to make your apps and things talk using the Google Trasnlate Voice.

## Instalation
Use NPM to instal the module

```
$ npm install say-something
```

## Example
Quick example:

```js
var SaySomehting = require('say-something');                                                                                           
	saySomething = new SaySomehting();
 
 //Say something
 saySomething.now('I am talking to you!');
   
 //When start talking
 saySomething.on('talking', function (text) {
   console.log('Im saying: ' + text);
 });
    
 //After stop talking
 saySomething.on('done', function () {
   console.log('I done talking');
 });
```

Change the default language (en) to 'pt-br' for example:

```js
var SaySomehting = require('say-something');                                                                                           
	saySomething = new SaySomehting({ language: 'pt-br' });
 
 //Say something
 saySomething.now('Estou falando com você!');
   
 //When start talking
 saySomething.on('talking', function (text) {
   console.log('Comecei a falar: ' + text);
 });
    
 //After stop talking
 saySomething.on('done', function () {
   console.log('Terminei de falar');
 });
```

## Documentation
[Link]()
