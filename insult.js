function pickRandomWord(word) {
  return word[Math.floor(Math.random() * word.length)];
}

function generateInsult() {

  var bodyParts = ["face", "nose", "arms", "leg", "feet", "fingers",
                "eyes", "hair", "toes", "butt", "ears", "eyebrows"];

  var adjectives = ["boring", "huge", "crazy", "creepy", "disgusting", "gross",
                  "evil", "filthy", "lumpy", "grotesque", "nasty", "ugly" ];

  var randomWords = ["deafening", "walk", "spicy", "last", "test", "glorious",
                   "basin", "bored", "dinosaurs", "hunt", "observation", "lock"];

  var string = "Your " + pickRandomWord(bodyParts) + " are like a " + pickRandomWord(adjectives) +
                " " + pickRandomWord(randomWords) + " !!!!!";

  return console.log(string);
}

generateInsult();