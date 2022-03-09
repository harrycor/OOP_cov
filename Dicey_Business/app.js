class Die {
    constructor() {
        this.value = Math.floor(Math.random() * 6) + 1;

        this.dDiv = document.createElement('div');
        this.dDiv.className = 'dDiv';
        this.dDiv.id = idStart;
        idStart++;

        this.dValue = document.createTextNode(this.value);
        this.dDiv.appendChild(this.dValue);
        arrayOfDice.push(this.dDiv);

        dContainer.appendChild(this.dDiv);

        this.dDiv.addEventListener('click', this.roll(this.dDiv.id));
        this.dDiv.addEventListener('dblclick', this.rem(this.dDiv.id));
    }

    roll(theId) {
        return () => {
            let newNum = Math.floor(Math.random() * 6) + 1;
            let elementById = document.getElementById(theId);
            elementById.textContent = newNum;
        };
    }
    rem(tI) {
        return () => {
            let elementById = document.getElementById(tI);
            console.log(elementById);
            elementById.remove();
            for (let i = 0; i < arrayOfDice.length; i++) {
                if (arrayOfDice[i].id == tI) {
                    arrayOfDice.splice(i, 1);
                }
            }
        }
    }
}

let idStart = 0

let arrayOfDice = [];

// creates initial div container for dice
let dContainer = document.createElement('div');
// console.log(dContainer);
dContainer.className = 'd-container';
document.body.appendChild(dContainer);

// makes create button functional and created dice when clicked
let diceGeneratorButton = document.querySelector('.gen-dice');
diceGeneratorButton.addEventListener('click', () => {
    let newDice = new Die();
    // console.log(newDice);
})

// make roll button functional - probably could have made this more compact
let rollAllButton = document.querySelector('.roll-dice');
rollAllButton.addEventListener('click', () => {
    for (let i = 0; i < arrayOfDice.length; i++) {
        let newNum = Math.floor(Math.random() * 6) + 1;
        arrayOfDice[i].textContent = newNum;
    }
})

// makes sum dice functional
let sumOfDice = document.querySelector('.sum-dice');
sumOfDice.addEventListener('click', () => {
    console.log(arrayOfDice);
    try {
        let emptyA = []
        for (let i = 0; i < arrayOfDice.length; i++) {
            let numTransform = Number(arrayOfDice[i].textContent);
            emptyA.push(numTransform);
        }
        let ans = emptyA.reduce((acc, val) => {
            return acc + val;
        })
        console.log(ans);
    }
    catch {
        console.log('no dice bro');
    }
})
