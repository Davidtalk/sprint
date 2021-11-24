'use strict'
console.log('JS mines')

//var isHiden = true

var MINE = '💣'

function renderCell(location, value) {
    // Select the elCell and set the value
    var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
    console.log('elcell', elCell)
    elCell.innerHTML = value;
}