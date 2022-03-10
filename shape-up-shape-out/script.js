// classes

class Shape {
    constructor(shapename) {
        this.shapename = shapename;
    };
    shapeCreate(shape, val1, val2 = null) {
        if (shape == 'rectangle') {
            console.log(shape, val1, val2);
            let recEle = document.createElement('div');
            this.addClicker('rectangle', recEle, val1, val2);
            recEle.className = 'rectangle-shape';
            recEle.style.height = `${val1}px`;
            recEle.style.width = `${val2}px`;
            recEle.style.bottom = `${this.randNum(val1)}px`;
            recEle.style.right = `${this.randNum(val2)}px`;
            canvas.appendChild(recEle);

        }
        else if (shape == 'square') {
            console.log(shape, val1);
            let sqEle = document.createElement('div');
            this.addClicker('square', sqEle);
            sqEle.className = 'square-shape';
            sqEle.style.height = `${val1}px`;
            sqEle.style.width = `${val1}px`;
            sqEle.style.bottom = `${this.randNum(val1)}px`;
            sqEle.style.right = `${this.randNum(val1)}px`;
            canvas.appendChild(sqEle);
        }
        else if (shape == 'circle') {
            console.log(shape, val1);
            let circEle = document.createElement('div');
            this.addClicker('circle', circEle);
            circEle.className = 'circle-shape';
            circEle.style.height = `${val1}px`;
            circEle.style.width = `${val1}px`;
            circEle.style.bottom = `${this.randNum(val1)}px`;
            circEle.style.right = `${this.randNum(val1)}px`;
            canvas.appendChild(circEle);
        }
        else if (shape == 'triangle') {
            console.log(shape, val1);
            let triEle = document.createElement('div');
            this.addClicker('triangle', triEle);
            triEle.className = 'triangle-shape';
            // triEle.style.height = `${val1}px`;
            // triEle.style.width = `${val1}px`;
            triEle.style.borderBottom = `${val1}px solid red`;
            triEle.style.borderRight = `${val1 / 2}px solid transparent`;
            triEle.style.bottom = `${this.randNum(val1)}px`;
            triEle.style.right = `${this.randNum(val1)}px`;
            canvas.appendChild(triEle);
        };
    };
    randNum(value) {
        let x = 600 - value;
        return Math.floor(Math.random() * x) + 1;
    }
    addClicker(name, ele, val1, val2 = val1) {
        ele.addEventListener('click', this.clicked(name, ele, val1, val2));
        ele.addEventListener('dblclick', this.dClicked(ele, val1, val2));
    }
    clicked(name, e, val1, val2 = val1) {
        return () => {
            fieldRemoval();
            let wid = e.style.width;
            let hei = e.style.height;
            let area = val1 * val2;
            fieldInsert(name, wid, hei, area);
        }
    }
    dClicked(e) {
        return () => e.remove();
    }

};
class Rectangle extends Shape {
    constructor(shapename, height, length) {
        super(shapename);
        this.height = height;
        this.length = length;
        this.shapeCreate('rectangle', height, length);
    };
};
class Square extends Shape {
    constructor(shapename, sideLength) {
        super(shapename);
        this.sideLength = sideLength;
        this.shapeCreate('square', sideLength);
    }
};
class Circle extends Shape {
    constructor(shapename, radius) {
        super(shapename);
        this.radius = radius;
        this.shapeCreate('circle', radius);
    };
};
class Triangle extends Shape {
    constructor(shapename, height) {
        super(shapename);
        this.height = height;
        this.shapeCreate('triangle', height);
    };
};
// let x = new Rectangle('rectangle', 50, 80);
// // console.log(x);
// // x.shapeCreate('rectangle', 12, 32)
// let y = new Square('sq', 400);
// // console.log(y);
// let h = new Circle('circ', 32);
// // console.log(h);
// let b = new Triangle('tri', 45);
// // console.log(b);


// Rectangle button
let rectangleButton = document.querySelector('.rect-btn');
rectangleButton.addEventListener("click", () => {
    let heightVal = Number(document.querySelector('.rec-height').value);
    let widthVal = Number(document.querySelector('.rec-width').value);
    console.log(heightVal);
    console.log(widthVal);
    let rectCreateClicked = new Rectangle('rectangle', heightVal, widthVal);
});

// Square button
let squareButton = document.querySelector('.sq-btn');
squareButton.addEventListener('click', () => {
    let sideLength = Number(document.querySelector('.sq-lgnth').value);
    console.log(sideLength);
    let squareCreateClicked = new Square('square', sideLength);
});

// Circle button
let circleButton = document.querySelector('.circle-btn');
circleButton.addEventListener('click', () => {
    let radiusVal = Number(document.querySelector('.rad-val').value);
    console.log(radiusVal);
    let circleCreateClicked = new Circle('circle', radiusVal);
});

// Isoceles button
let isocButton = document.querySelector('.iso-btn');
isocButton.addEventListener('click', () => {
    let heightVal = Number(document.querySelector('.iso-height').value);
    console.log(heightVal);
    let isoCreateClicked = new Triangle('triangle', heightVal);
});

// field remover
let canvas = document.querySelector('.canvas');
// canvas.addEventListener('click', () => fieldRemoval());
let fieldRemoval = () => {
    for (i=0; i<listdatas.length; i++) {
        listdatas[i].textContent = ':';
    };
}

// field insert
let fieldInsert = (name, wid, hei, rad='N/A', area='N/A', perimeter='N/A') => {
    let start = [`Shape: ${name}`, `Width: ${wid}`, `Height: ${hei}`, `Radius: ${rad}`, `Area: ${area}`, `Preimeter: ${perimeter}`];
    console.log(start)
    for (i=0; i<listdatas.length; i++) {
        listdatas[i].textContent = start[i];
    };
}

let listdatas = document.querySelectorAll('.list-group-item');