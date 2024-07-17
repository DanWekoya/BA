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
