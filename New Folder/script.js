const addBtn = document.getElementById("add")
const subBtn = document.getElementById("subtract")
const resetBtn = document.getElementById("reset")
const display = document.getElementById("display")
let value = 0;

const handleAdd = (e) => {
    e.preventDefault()
    value++;
    display.innerText = value;
}
const handleSubtract = (e) => {
    e.preventDefault()
    value--;
    display.innerText = value;
}
const handleReset = (e) => {
    e.preventDefault()
    value = 0;
    display.innerText = value;
}

addBtn.addEventListener('click', handleAdd)

subBtn.addEventListener('click', handleSubtract)

resetBtn.addEventListener('click', handleReset)

