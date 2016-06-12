

run();

class Door {

}

function run() {
    console.log(getRandomBetween0And2());
}

function getRandomBetween0And2() {
    return Math.floor(Math.random() * 3);
}