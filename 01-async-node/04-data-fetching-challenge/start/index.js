import fetch from "isomorphic-fetch";

// fetch("https://opentdb.com/api.php?amount=1").then(console.log);

const toJSON = (response) => response.json();

const firstResult = (data) => data.results[0];

const parseQA = ({ question, correct_answer }) => ({
  question,
  correct_answer,
});

fetch("https://opentdb.com/api.php?amount=1")
  .then(toJSON)
  .then(firstResult)
  .then(parseQA)
  .then(console.table)
  .catch(console.error);

// Instructions

// 1. Take this data and parse the question and correct answer
// 2. Console.log the question and answer
// Extra Credit: Name the functions
