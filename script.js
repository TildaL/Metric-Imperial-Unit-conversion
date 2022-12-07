let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")


const meterToFeet =  3.2808399
const literToGallon =  0.264172052
const kiloToPound =  2.20462262

const feetToMeter = 0.3048
const gallonToLiter = 3.78541178
const poundToKilo = 0.45359237

convertBtn.addEventListener('click',function(){

    let baseValue = inputEl.value

    const meterNum = baseValue * meterToFeet
    const feetNum = baseValue * feetToMeter
    lengthEl.textContent = `${baseValue} meter = ${meterNum.toFixed(3)} feet 
    | ${baseValue} feet = ${feetNum.toFixed(3)} meters`

    const literNum = baseValue * literToGallon
    const gallonNum = baseValue * gallonToLiter
    volumeEl.textContent = `${baseValue} liter = ${literNum.toFixed(3)} gallon
    | ${baseValue} gallon = ${gallonNum.toFixed(3)} liter`

    const kiloNum = baseValue * kiloToPound
    const poundNum = baseValue * poundToKilo
    massEl.textContent = `${baseValue} kilo = ${kiloNum.toFixed(3)} pound
    | ${baseValue} pound = ${poundNum.toFixed(3)} kilo`

})





