(function (global) {

var helloSpeaker = {};

var speakWord = "Hello";

helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
};

global.helloSpeaker = helloSpeaker;

})(window);
