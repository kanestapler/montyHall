declare var module: any
module.exports = {
    RunAndReturnWinner: RunAndReturnWinner
};
class Door {
    isOpen: boolean;
    isCar: boolean;
    doorNumber: number;
    constructor(open, car, num) {
        this.isOpen = open;
        this.isCar = car;
        this.doorNumber = num;
    }
 }
var numberOfDoors: number;
var doors: Door[];
doors = [];
var playerSelection: number;

function RunAndReturnWinner(doorInput: number):boolean {
    numberOfDoors = doorInput;
    InitializeDoors();
    PlayerSelectsRandomDoor();
    while(!CheckIfGameOver()) {
        UnselectedGoatDoorOpens();
        PlayerSwapsDoor();
    }
    return DidPlayerWin();
}

function InitializeDoors() {
    let prizeDoor: number = GetRandomIntBetween0AndX(numberOfDoors);
    for (let i = 0; i < numberOfDoors; i++) {
        doors[i] = new Door(false, false, i);
    }
    doors[prizeDoor].isCar = true;
}

function PlayerSelectsRandomDoor() {
    playerSelection = GetRandomIntBetween0AndX(numberOfDoors);
}

function UnselectedGoatDoorOpens() {
    let unopenedDoorsWithGoatsAndNotPlayer: number[];
    unopenedDoorsWithGoatsAndNotPlayer = [];
    for (let i = 0; i < numberOfDoors; i++) {
        if (!doors[i].isCar && i != playerSelection && !doors[i].isOpen) {
            unopenedDoorsWithGoatsAndNotPlayer.push(i);
        }
    }
    if (unopenedDoorsWithGoatsAndNotPlayer.length > 0) {
        let randomX = GetRandomIntBetween0AndX(unopenedDoorsWithGoatsAndNotPlayer.length);
        let doorToOpen = unopenedDoorsWithGoatsAndNotPlayer[randomX];
        doors[doorToOpen].isOpen = true;
    }
}

function PlayerSwapsDoor() {
    let swapOccurred: boolean = false;
    while (!swapOccurred) {
        let randomX = GetRandomIntBetween0AndX(numberOfDoors);
        if (!doors[randomX].isOpen && randomX != playerSelection) {
            playerSelection = randomX;
            swapOccurred = true;
        }
    }
    
}

function CheckIfGameOver(): boolean {
    let numberOfDoorsClosed: number = 0;
    for (let i = 0; i < numberOfDoors; i++) {
        if (!doors[i].isOpen) {
            numberOfDoorsClosed++;
        }
    }
    return !(numberOfDoorsClosed > 2);
}

function DidPlayerWin(): boolean {
    return doors[playerSelection].isCar;
}

function GetRandomIntBetween0AndX(x: number): number {
    return Math.floor(Math.random() * x);
}