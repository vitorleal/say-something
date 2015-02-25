var request = require('request'),
    Lame    = require('lame'),
    Speaker = require('speaker');

var url = 'http://translate.google.com/translate_tts?tl=pt-br&q=' + encodeURIComponent(text);
request(url).pipe(new Lame.Decoder).pipe(new Speaker);

var SaySomethiag = function (config) {

};

module.exports = SaySomething;
