// ----- Functions to implement -----

// 1) myFunc(): persistent counter

let count = 0;
function myFunc() {
    count++;
    return count;
}

// 2) getRandomNum(max): 1..max int or 0 if invalid

function getRandomNum(max) {
    let parsedMax = parseInt(max);
    
    if (isNaN(parsedMax) || parsedMax < 1) {
        return 0;
    }
    
    return Math.floor(Math.random() * parsedMax) + 1;
}

// 3) myAdder(x, y): numeric sum

function myAdder(x, y) {
    return parseFloat(x) + parseFloat(y);
}

// 4) distance(x1, y1, x2, y2): Euclidean distance

function distance(x1, y1, x2, y2) {
    let numX1 = parseFloat(x1);
    let numY1 = parseFloat(y1);
    let numX2 = parseFloat(x2);
    let numY2 = parseFloat(y2);
    
    return Math.sqrt(Math.pow(numX2 - numX1, 2) + Math.pow(numY2 - numY1, 2));
}

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0

function quadratic(a, b, c) {
    let numA = parseFloat(a);
    let numB = parseFloat(b);
    let numC = parseFloat(c);
    
    let disc = (numB * numB) - (4 * numA * numC);
    
    if (disc > 0) {
        let root1 = (-numB + Math.sqrt(disc)) / (2 * numA);
        let root2 = (-numB - Math.sqrt(disc)) / (2 * numA);
        return [root1, root2];
        
    } else if (disc === 0) {
        let root = -numB / (2 * numA);
        return [root];
        
    } else {
        let realPart = -numB / (2 * numA);
        let imaginaryPart = Math.sqrt(-disc) / (2 * numA);
        
        return [
            realPart + "+" + imaginaryPart + "i", 
            realPart + "-" + imaginaryPart + "i"
        ];
    }
}
// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}



