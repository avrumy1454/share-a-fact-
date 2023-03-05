const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factslist = document.querySelector(".facts-list");

// create DOM elements: render facts in list
factslist.innerHTML = "";

//loed data from supabase
loedFacts();

async function loedFacts() {
  const res = await fetch(
    "https://xhlfqheambbipejkftzr.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhobGZxaGVhbWJiaXBlamtmdHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0NDA1MDgsImV4cCI6MTk4OTAxNjUwOH0.N655R_46jJnJVMmx3_JYX-6uweN1yknD8eOa-eOOxSk",
        authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhobGZxaGVhbWJiaXBlamtmdHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0NDA1MDgsImV4cCI6MTk4OTAxNjUwOH0.N655R_46jJnJVMmx3_JYX-6uweN1yknD8eOa-eOOxSk",
      },
    }
  );
  const data = await res.json();
  console.log(data);
  //const filteredData = data.filter((fact) => fact.category === "technology");
  createFactList(data);
  //console.log("filteredData", filteredData);
}

function createFactList(dataArray) {
  // factslist.insertAdjacentHTML("afterbegin", "<li>avrumy <li>");
  // factslist.insertAdjacentHTML("afterbegin", "<li>and  <li>");
  // factslist.insertAdjacentHTML("afterbegin", "<li>sushi<li>");
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">

    
<p>
${fact.text}
    <a
     class="source"
     href="${fact.source}"
     target="_blank"
    >(source)</a>
  </p>
  <span class="tag" style="background-color: ${
    CATEGORIES.find((cat) => cat.name === fact.category).color
  }">
  ${fact.category}</span>
  <li>`
  );
  // console.log(htmlArr);
  const html = htmlArr.join("");
  factslist.insertAdjacentHTML("afterbegin", html);
}

//toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share a fact";
  }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));
/*
let votesInteresting = 23;
let votesMindblowing = 5;
const text = "bla bla bla bla bla";

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totelUpvotes = votesInteresting + votesMindblowing;
console.log("upvotes", totelUpvotes);

let votesFalse = 4;
const iscorrect = votesFalse < totelUpvotes;
console.log(iscorrect);

console.log(parseInt("24.533ccc"));*/

/*
function calcFactAge(year) {
  const correntYear = new Date().getFullYear();
  const age = correntYear - year;
  if (age >= 0) return age;
  else return `impossible year. tear needs to be less or equal ${correntYear}`;
}

const age1 = calcFactAge(2015);
console.log(age1);

console.log(calcFactAge(2020));
console.log(calcFactAge(2037));
//const calcFactAge2 = (year) => 2023 - year//
const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `impossible year. tear needs to be less or equal ${new Date().getFullYear()}`;
console.log(calcFactAge2(2024));
console.log(calcFactAge2(2037));
*/

/*
let votesInteresting = 20;
let votesMindblowing = 2;

if (votesInteresting === votesMindblowing) {
  // alert("this fact is equally intresting and mindblowing ");
} else if (votesInteresting > votesMindblowing) {
  console.log("intresting is more");
} else if (votesInteresting < votesMindblowing) {
  console.log("intresting is less ");
}
if (votesMindblowing) {
  console.log("mindblowing fact !");
} else console.log("not so speciel....");
//Ternary operator//
let votesFalse = 88;
const totelUpvotes = votesInteresting + votesMindblowing;

const message = totelUpvotes > votesFalse ? "true" : "false";
console.log(message);

const text = "lisbon is the capital of portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `the fact is "${text}". it is ${calcFactAge(
  2015
)} years old. it is probably ${
  totelUpvotes > votesFalse ? "corect" : "not correct"
}`;
console.log(str);
*/
// const fact = ["lisbon is the capital of portugal", 2015, true];
// console.log(fact);
// console.log(fact[0]);
// console.log(fact.length);
// console.log(fact[fact.length - 1]);

// const [text, createdin, iscorrect] = fact;
// console.log(text);

// const newfact = [...fact, "society"];
// console.log(newfact);

// const carfact = {
//   make: "Toyota",
//   model: "Camry",
//   category: "cars",
//   year: 2020,
//   isCorrect: true,
// };
// console.log(carfact.make);
// console.log(carfact["model"]);

// const { model, make, isCorrect } = carfact;
// console.log(carfact.isCorrect);

// const factobj = {
//   text: "lisbon is the capital of portugal",
//   category: "society",
//   year: 2015,
//   isCorrect: true,
// };
// console.log(factobj.text);
// console.log(factobj["text"]);

// const { category, isCorrect } = factobj;
// console.log(category);

// const carfact = {
//   make: "Toyota",
//   model: "camry",
//   category: "small cars",
//   year: 2020,
//   isCorrect: true,
//   createSummery: function () {
//     return `the fact "${
//       this.model
//     }" is from the category of "${this.category.toUpperCase()}"`;
//   },
// };
// console.log(carfact.make);
// console.log(carfact["model"]);

// const { make, model, year, category, isCorrect } = carfact;
// console.log(make);
// console.log(model);
// console.log(category);
// console.log(year);
// console.log(isCorrect);
// console.log(carfact.createSummery());

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

// const times10 = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });
// const times10 = [2, 4, 6, 8].map((el) => el * 10);
// console.log(times10);

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];

// const allCategories = CATEGORIES.map((el) => el.name);
// console.log(allCategories);

// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];

// function calcFactAge(year) {
//   const correntYear = new Date().getFullYear();
//   const age = correntYear - year;
//   if (age >= 0) return age;
//   else return `impossible year. tear needs to be less or equal ${correntYear}`;
// }

// const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
// console.log(factAges);
// console.log(factAges.join("-"));
