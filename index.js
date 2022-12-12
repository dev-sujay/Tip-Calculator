const main = document.querySelector("main")
const billInput = document.querySelector("#bill-input")
const tipInput = document.querySelector("#tip-slider")
const tipPercent = document.querySelector("#tip-percent")
const totalTip = document.querySelector("#tip-amount-calculated")
const totalBill = document.querySelector("#total-bill")
const splitSlider = document.querySelector("#split-slider")
const splitPerson = document.querySelector("#split-person")
const billEach = document.querySelector("#bill-each-value")
const tipEach = document.querySelector("#tip-each-value")
let billAmount = 0
let tipAmount = 0
let totalTipCalculated = 0
let totalBillCalculated = 0
let splitSliderValue = 1



main.addEventListener("input", (e) => {
    let input = e.target
    if (input === billInput) {
        billAmount = parseInt(billInput.value)
    } else if (input === tipInput) {
        tipAmount = parseInt(tipInput.value)
    }
    else if (input === splitSlider) {
        splitSliderValue = parseInt(splitSlider.value)   
    }

    updateAmount()
})


function updateAmount() {
    tipPercent.innerHTML = tipAmount + "%"
    totalTipCalculated = (billAmount * tipAmount / 100)
    totalBillCalculated = Math.floor(totalTipCalculated + billAmount)
    totalTip.innerHTML = `Rs ${totalTipCalculated}`
    totalBill.innerHTML = `Rs ${totalBillCalculated}`
    splitPerson.innerHTML = `${splitSliderValue} Person`
    billEach.innerHTML = `RS ${Math.floor(totalBillCalculated/splitSliderValue)}`
    tipEach.innerHTML = `RS ${Math.floor(totalTipCalculated/splitSliderValue)}`
}

