function BudgetValidation() {
  let Budget = document.getElementById("Budget").value;
  if (Budget > 20000) {
    alert("Budget can not exceed 20000");
  } else if (Budget < 0) {
    alert("Budget must be more than 0");
  } else {
    return Budget
  }
}
window.onload = "BudgetValidation()";


function SaveBudget (){
let Transport = Number (document.getElementById("TransportAllocation").value);
let Internet = Number (document.getElementById("InternetAllocation").value); 
let Water = Number (document.getElementById("WaterAllocation").value);
let Power = Number (document.getElementById("PowerAllocation").value);
let Other = Number (document.getElementById("OtherAllocation").value);
let Total = Transport + Internet + Water + Power + Other ;
let Remaining = 20000 - Total ;
document.getElementById("Spent").innerHTML = "Spent: $" + Total;
document.getElementById("Remaining").innerHTML = "Remaining: $" + Remaining;
 }
 window.onload = "SaveBudget()";
