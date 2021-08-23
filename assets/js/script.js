
console.log("Welcome to CFI Stephanie's Page");



let btn = document.getElementById("button");
btn.innerHTML = "Save";
btn.onclick = function () {
  window.open(url, "_blank");
};
document.body.appendChild(btn);

