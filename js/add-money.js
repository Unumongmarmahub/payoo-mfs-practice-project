document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addedMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("input-pin-number");

    if (isNaN(addedMoney)) {
      alert("You can not add your money....!");
      return;
    }

    if (pinNumber === 1234) {
      const balance = getAmountValueById("money");
      const newBalance = balance + addedMoney;

      document.getElementById("money").innerText = newBalance;

      const p = document.createElement("p");
      p.innerText = `Added: ${addedMoney} tk. Now Your New Balance: ${newBalance} tk`;
      // console.log(p);

      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("You can not add Money");
    }
  });
