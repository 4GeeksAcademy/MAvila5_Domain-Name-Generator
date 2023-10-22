/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Domain Name Genorator //

// Variable Combinations Listed //
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".org", ".net", ".us"];

// Function Named "possibleCombos" //
function possibleCombos(pronoun, adj, noun, ext) {
  // Created the empty string //
  let combinations = [];
  // Created and Nested for loops statements - 4 for each var //
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          // Console.log the combinations by creating a string concatenation //
          console.log(pronoun[i] + adj[j] + noun[k] + ext[l]);
        }
      }
    }
  }
}

// Call the function //
possibleCombos(pronoun, adj, noun, ext);
console.log("Any string");
