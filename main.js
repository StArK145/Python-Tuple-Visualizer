let predefinedTuples = [
    [3, 7, 1, 9, 2, 3, 7, 1, 9, 2, 4],
    [10, 20, 10, 30, 40, 10, 20, 30, 40],
    [5, 15, 25, 35, 45, 5, 15, 25],
    [8, 16, 24, 32, 40, 8, 16, 24, 32, 40, 50, 60],
    [2, 4, 6, 8, 10, 2, 4, 6, 8],
    [11, 22, 33, 44, 55, 11, 22, 33],
    [9, 18, 27, 36, 45, 9, 18, 27, 36, 45, 54, 63, 72],
    [6, 12, 18, 24, 30, 6, 12, 18, 24],
    [14, 28, 42, 56, 70, 14, 28, 42, 56],
    [19, 38, 57, 76, 95, 19, 38, 57, 76, 95, 114],
    [13, 26, 39, 52, 65, 13, 26, 39],
    [7, 14, 21, 28, 35, 7, 14, 21, 28, 35, 42],
    [12, 24, 36, 48, 60, 12, 24, 36, 48, 60, 72],
    [17, 34, 51, 68, 85, 17, 34, 51],
    [23, 46, 69, 92, 115, 23, 46, 69, 92],
    [1, 3, 3, 7, 7, 9, 9, 2, 2, 5, 5, 1],
    [100, 200, 300, 400, 500, 100, 200, 300],
    [2, 4, 8, 16, 32, 64, 2, 4, 8],
    [50, 40, 30, 20, 10, 50, 40, 30, 20, 10, 5],
    [5, 10, 15, 20, 25, 5, 10, 15, 20]
];
let tuple = predefinedTuples[Math.floor(Math.random() * predefinedTuples.length)];
let tupleDisplay = document.getElementById("tupleDisplay");
tupleDisplay.innerHTML = tuple.map((value, index) => `<div class="tuple-item"><div class="index">${index}</div>${value}</div>`).join('');

function findMin() {
    document.getElementById("output").textContent = "Minimum value in tuple is " + Math.min(...tuple);
}

function findMax() {
    document.getElementById("output").textContent = "Maximum value in tuple is " + Math.max(...tuple);
}

function findLen() {
    document.getElementById("output").textContent = "Length of tuple is " + tuple.length;
}

function findIndex() {
    let index = document.getElementById("indexInput").value;
    if (index >= 0 && index < tuple.length) {
        document.getElementById("output").textContent = "Value at index " + index + " is " + tuple[index];
    } else {
        document.getElementById("output").textContent = "Invalid index";
    }
}

function findCount() {
    let num = document.getElementById("countInput").value;
    let count = tuple.filter(x => x == num).length;
    document.getElementById("output").textContent = "Count of " + num + " in tuple is " + count;
}