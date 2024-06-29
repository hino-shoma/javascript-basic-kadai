const textBtn = document.getElementById("btn");
const hideH2 = document.getElementById("text");


textBtn.addEventListener("click", ()=>{
  const clickH2 = document.createElement("h2");
  clickH2.textContent="ボタンをクリックしました";
  textBtn.before(clickH2);
  hideH2.style.display="none";
});