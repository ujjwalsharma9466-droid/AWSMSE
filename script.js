function printForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var plan = document.getElementById("plan").value;
  var amount = 0;

  if (plan == "Basic") {
    amount = 999;
  } else if (plan == "Standard") {
    amount = 1799;
  } else {
    amount = 3499;
  }

  var receiptNo = Math.floor(Math.random() * 90000) + 10000;
  var today = new Date().toLocaleDateString();

  document.getElementById("output").innerHTML =
    "<div class='receipt'>" +
    "<h3>IronPulse Fitness - Receipt</h3>" +
    "Receipt No: " + receiptNo + "<br>" +
    "Date: " + today + "<br>" +
    "Name: " + name + "<br>" +
    "Email: " + email + "<br>" +
    "Plan: " + plan + "<br>" +
    "Amount: Rs. " + amount + " per month<br>" +
    "<button type='button' class='no-print' onclick='printReceipt()'>Print Receipt</button>" +
    "</div>";

  return false;
}

function printReceipt() {
  window.print();
}