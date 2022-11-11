let bill = document.querySelector("#bill-input")
let billAmount
let tip = document.querySelector("#tip-slider")
let tipPercent = document.querySelector("#tip-percent")
let tipAmount = document.querySelector("#tip-amount-calculated")
let tipValue
let totalBill = document.querySelector("#total-bill")
let splitSlider = document.querySelector("#split-slider")
let splitPerson = document.querySelector("#split-person")
let splitSliderValue = 1
let billEach = document.querySelector("#bill-each-value")
let tipEach = document.querySelector("#tip-each-value")


bill.addEventListener('input', () => {
    billAmount = bill.value
    billAmount = parseInt(billAmount)
    updateAmount()
})


tip.addEventListener('input', () => {
    tipValue = tip.value
    tipValue = parseInt(tipValue)
    tipPercent.innerHTML = tipValue + "%"
    updateAmount()

})


splitSlider.addEventListener('input', () => {
    splitSliderValue = splitSlider.value
    splitSliderValue = parseInt(splitSliderValue)
    splitPerson.innerHTML = splitSliderValue + " Person"
    updateAmount()

})

let updateAmount = () => {
    if (billAmount && tipValue) {
        tipAmount.innerHTML = `Rs ${billAmount * tipValue / 100}`
        tipEach.innerHTML = `Rs ${(billAmount * tipValue / 100)/splitSliderValue}`
        totalBill.innerHTML = `Rs ${billAmount + (billAmount * tipValue / 100)}`
        billEach.innerHTML = `Rs ${billAmount / splitSliderValue}`


    } else if (billAmount && !splitSliderValue) {
        tipAmount.innerHTML = "Rs 0.00"
        tipEach.innerHTML = "Rs 0.00"
        totalBill.innerHTML = `Rs ${billAmount}`
        billEach.innerHTML = `Rs ${billAmount}`

    } else if (billAmount && splitSliderValue) {
        tipAmount.innerHTML = "Rs 0.00"
        tipEach.innerHTML = "Rs 0.00"
        totalBill.innerHTML = `Rs ${billAmount}`
        billEach.innerHTML = `Rs ${billAmount / splitSliderValue}`
    }
 
}

