let count = 0;

document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counter").innerHTML = count;
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  document.getElementById("counter").innerHTML = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  document.getElementById("counter").innerHTML = count;
});

