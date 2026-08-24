function calculateButton() {
  const billAmountInput = document.getElementById("billAmount");
  const percentageTipInput = document.getElementById("percentageTip");

  const tipAmount = document.getElementById("tipAmount");
  const totalAmount = document.getElementById("totalAmount");
  const errorMessage = document.getElementById("errorMessage");

  const billAmount = Number(billAmountInput.value);
  const percentageTip = Number(percentageTipInput.value);

  if (billAmountInput.value === "" || percentageTipInput.value === "") {
    errorMessage.textContent = "Please Enter a valid Input";
    tipAmount.value = "";
    totalAmount.value = "";
    return;
  }

  if (billAmount <= 0 || percentageTip < 0) {
    errorMessage.textContent = "Please Enter a valid Input";
    tipAmount.value = "";
    totalAmount.value = "";
    return;
  }

  errorMessage.textContent = "";

  const calculatedTip = (percentageTip / 100) * billAmount;
  const calculatedTotal = billAmount + calculatedTip;

  tipAmount.value = calculatedTip.toFixed(2);
  totalAmount.value = calculatedTotal.toFixed(2);
}
