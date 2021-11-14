const container = document.querySelector(".container");
const beginings = [
  "Champ",
  "Fact:",
  "Everybody says",
  "Dang...",
  "Check it:",
  "Just saying...",
  "Superstar,",
  "Tiger,",
  "Self,",
  "Know this:",
  "News Alert:",
  "Girl,","Ace,","Excuse me but", "Experts Agree",
  "In my opinion,",
  "Hear ye, hear ye:",
  "Okay, listen up:"
];

const middles = [
  "the mere idea of you",
  "your soul",
  "your hair today",
  "everything you do",
  "your personal style",
  "every thought you have",
  "that sparkle in you eye",
  "your presence here",
  "what you got going on",
  "the essential you",
  "your life's journey",
  "that saucey personality",
  "your DNA",
  "that brain of yours",
  "your choice of attaire",
  "the way you roll",
  "all of y'all"
];

const middleends = [
  "has serious game,",
  "rains magic,",
  "deserves the Nobel Prize,",
  "raises the roof,",
  "breeds miracles,",
  "is paying off big time,",
  "shows mad skills,",
  "just shimmers,",
  "is a national treasure,",
  "gets the party hopping,",
  "is the next big thing,",
  "roars like a lion,",
  "is a rainbow factory,",
  "is made of diamonds,",
  "should be tought in school,",
  "is 100% legit,",
];

const ends = [
  "24/7",
  "can I get an amen",
  "and that's a fact",
  "so treat yourself",
  "that's just science",
  "for reals",
  "mic drop",
  "you hidden gem",
  "snuggle bear",
  "period",
  "now let's dance",
  "high five",
  "according to CNN",
  "so get used to it"
];


const randomElement = (array) => {
  let randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex]
}

const generatePhrase = () => {
  return randomElement(beginings) + " " + randomElement(middles) + " " + randomElement(middleends) + " " + randomElement(ends) + "."
};

const makeMultiple = (num) => {
  let output = []

  for (let i = 0; i < num; i++) {
    output.push(generatePhrase())
  } 
  return output
}

const generatePhrases = () => {
  let output = "";

  let coffees = makeMultiple(3);

  coffees.forEach(
    (phrase ) =>
      (output += `
              <div class="card">
                <h2>${phrase}<h2/>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", generatePhrases);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
