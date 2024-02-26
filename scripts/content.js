class Info {
  constructor(amount, percentage, maturity) {
    this.amount = amount;
    this.percentage = percentage;
    this.maturity = maturity;
  }
}

percentages = document.querySelectorAll("div.row.styles_depositCardMain___3a-Kb > div.styles_mainInfo___3_4uI > span:nth-child(1) > span");
amounts = document.querySelectorAll(".styles_currentDepositAmount___1bGpu");
maturities = document.querySelectorAll("div.row.styles_depositCardMain___3a-Kb > div.styles_progressBar___2blqr > div > div > div > span");

infos = []
percentages.forEach(function(val, index) {
  infos.push(new Info(amounts[index].innerText.substring(4), val.innerText.substring(0, 4), maturities[index].match(/[0-9]*/g)[0]));
})

document.querySelectorAll("div.row.styles_depositCardMain___3a-Kb > div.styles_progressBar___2blqr > div").forEach(function (div, index) {
  span = document.createElement("span");
  span.innerText = "€" + infos[index].percentage / 100 * infos[index].amount * infos[index].maturity;
  span.style.display = "block";
  div.appendChild(span);
})
