const options = [
  {
    id: "option1",
    text: "JS",
    votes: 0,
  },

  {
    id: "option2",
    text: "PY",
    votes: 0,
  },
];

submitVote = () => {
  const selectedOption = document.querySelector('input[name="poll"]:checked');

  // console.log(selectedOption.value);

  if (!selectedOption) {
    alert("Please select an option");
  }

  const OptionId = selectedOption.value;

  const selectedOptionObj = options.find((option) => option.id === OptionId);

  if (selectedOptionObj) {
    selectedOptionObj.votes++;
    console.log(selectedOptionObj);
  }
};

displayResults = () => {
  const result = document.querySelector("#result");
  result.innerHTML = "";

  options.forEach((option) => {
    const percentage = ((option.votes / getTotalVotes()) * 100).toFixed(2) || 0;
    const barWidth = percentage > 0 ? percentage + "%" : "0%";
  });
};

function getTotalVotes() {
    return options.reduce((total, option) => total + option.votes, 0);
}
