function getInputFieldValueById(id) {
  const getInputValue = document.getElementById(id).value;
  const parseFloatValue = parseFloat(getInputValue);
  return parseFloatValue;
}

function getAmountValueById(id) {
  const getAmount = document.getElementById(id).innerText;
  const parseFloatAmountValue = parseFloat(getAmount);
  return parseFloatAmountValue;
}

function showSectionById(id) {
  // hide all the section 
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transaction-form").classList.add("hidden");

  // show the section with the provide id as parameter
  document.getElementById(id).classList.remove("hidden");
}
