
const beginings = [
  "b1",
  "b2"
];

const middles = [
  "m1",
  "m2"
];

const ends = [
  "e1",
  "e2"
];


const randomElement = (array) => {
  let randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex]
}

const generatePhrase = () => {
  return randomElement(beginings) + " " + randomElement(middles) + " " + randomElement(ends) + "."
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
    ({ phrase }) =>
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
