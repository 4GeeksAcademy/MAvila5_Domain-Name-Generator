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
          // Push the combinations by creating a string concatenation //
          combinations.push(pronoun[i] + adj[j] + noun[k] + ext[l]);
        }
      }
    }
  }
  // Return the combination array //
  return combinations;
}

// Console.log/Print the combinations //
let results = possibleCombos(pronoun, adj, noun, ext);
console.log(results);
