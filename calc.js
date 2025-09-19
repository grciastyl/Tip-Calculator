
function calculateTip() {
    const bill = document.getElementById('bill').value;
    const tip = document.getElementById('tip').value;
    const tipAmount = (bill * (tip / 100)).toFixed(2);
    alert("Tip: $" + tipAmount);

}


