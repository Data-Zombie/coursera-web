(function (global) {

var byeSpeaker = {};

var speakWord = "Good Bye";

byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
};

global.byeSpeaker = byeSpeaker;

})(window);
