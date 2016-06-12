declare var require: any
var montyHall = require("./montyHall");
const numberOfDoors: number = 10;
const numberOfTimesToRun: number = 1000;
var numberOfWins: number = 0;
var winPercentage: number = 0;

for (let i = 0; i < numberOfTimesToRun; i++) {
    if (montyHall.RunAndReturnWinner(numberOfDoors)) {
        numberOfWins++;
    }
}

winPercentage = (numberOfWins/numberOfTimesToRun) * 100;

console.log("\n\tGames Played: \t\t" + numberOfTimesToRun);
console.log("\tGames Won: \t\t" + numberOfWins);
console.log("\tWin Percentage: \t" + winPercentage);