
let funny = [
  [
  "My favorite history teacher",
  "For better or worse",
  "Ran to the store faster than a rabbit",
  "When my mother married my father." ,
  "I forgot to eat breakfast"
  ],
  [
  "if the front door is locked",
  "loves to lie around in the sun all day",
  "ran around the house"
  ],
  [
  "shot through the sky.",
  "a story with deep thoughts and emotions.",
  "toys of all kinds thrown everywhere.",
  "will walk to the room."
  ]
];

let motivational = [
  [
  "Slammed the door and left",
  "Running down the lane and into the forest",
  "Discovered the cure for the disease",
  "Gave many reasons but no logi",
  "Shows no improvement in your efficiency",
  "Once we leave for the movie",
  "Although I thought I knew the answer"
  ],
  [
  "a time of wonder and amazement",
  "clothes and shoes scattered around the room",
  "the elected official for our district",
  "the answer to our prayers",
  "showing her award and gloating",
  "because I wanted a soda",
  "while I was apple-picking"
  ],
  [
  "because it was raining.",
  "after I finish the project.",
  "since she never saw that movie.",
  "such as drama, music, and dance.",
  "so explain why that happened.",
  "worrying that she would be robbed.",
  "in so many ways."
  ]
];

function randomIndex(arrLength){
    return Math.floor(Math.random() * arrLength);
}

function generateQuote() {
  let selectType = document.getElementById("type");
  let typeText = selectType.options[selectType.selectedIndex].value;
  let selectCount = document.getElementById("count");
  let countText = parseInt(selectCount.options[selectCount.selectedIndex].value);
  let outer = document.getElementById('container');
  let quotes='';
  for(let i = 0; i < countText; i++){
    let quote;
    if (typeText === "Motivational"){
      quote = `<div class="quote-container">
      ${motivational[0][randomIndex(motivational[0].length)]},
               ${motivational[1][randomIndex(motivational[1].length)]},
               ${motivational[2][randomIndex(motivational[2].length)]}
               </div>`;   
    }
    else {
      quote = `<div class="quote-container"> 
               ${funny[0][randomIndex(funny[0].length)]},
               ${funny[1][randomIndex(funny[1].length)]},
               ${funny[2][randomIndex(funny[2].length)]}
               </div>`;
    }
  quotes += quote;
  }
 outer.innerHTML = `<h2 style="text-align:center">${typeText} Quotes </h2>
      <div>${quotes}</div>`;
}

document.getElementById("btn").addEventListener("click", generateQuote);
