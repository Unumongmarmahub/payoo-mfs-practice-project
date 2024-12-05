document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutMoney = getInputFieldValueById("input-cash-out-money");
    const pinNumber = getInputFieldValueById("input-cash-out-pin");

    if (isNaN(cashOutMoney)) {
      alert("You can not cash out your money...!");
      return;
    }

    if (pinNumber === 1234) {
      const balance = getAmountValueById("money");

      if (cashOutMoney > balance) {
        alert("You do not have enough money..");
        return;
      }

      const cashReduce = balance - cashOutMoney;
      document.getElementById("money").innerText = cashReduce;

      const div = document.createElement("div");
      div.classList.add("bg-yellow-200");
      div.innerHTML = `
      
        <h2 class="text-2xl font-bold">Cash Out</h2>
        <p>Your ${cashOutMoney} Withdraw. Now Your New Balance ${cashReduce}</p>

      `;

      document.getElementById("transaction-container").appendChild(div);
    } else {
      alert("You Can Not Cash Out Money");
    }
  });
