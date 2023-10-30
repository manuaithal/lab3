document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const billTotalInput = document.getElementById('billtot');
    const tipPercentageInput = document.getElementById('tip');
    const tipChargesOutput = document.getElementById('Tipcharges');
    const tipChargesOut = document.getElementById('Tippercentage');
    const totalBillAmountOutput = document.getElementById('TotalBillAmount');
    const tipForm = document.getElementById('tipForm');

    // Add an event listener to respond to user input
    tipForm.addEventListener('input', calculateTip);

    // Define a function to calculate and display tip charges and total bill amount
    function calculateTip() {
        const billValue = parseFloat(billTotalInput.value);
        const tipPercentageValue = parseInt(tipPercentageInput.value);
        const tippercentVAlue=parseInt(tipChargesOut.value)
        if (!isNaN(billValue)) {
            const tip = (billValue * tipPercentageValue) / 100;
            const total = billValue + tip;
            tipChargesOutput.value = tip.toFixed(2);
            totalBillAmountOutput.value = total.toFixed(2);
            tipChargesOut.value=tipPercentageValue;
        } else {
            tipChargesOutput.value = '';
            totalBillAmountOutput.value = '';
        }
    }
});
