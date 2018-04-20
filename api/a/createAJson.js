const createAJson = (answer, solution) => {
  return {
    correct: answer === solution,
    solution: solution
  };
}

module.exports = createAJson;
