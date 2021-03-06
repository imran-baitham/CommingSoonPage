/*=============== LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");

const lightTheme = "light-theme";
const iconTheme = "bx-sun";

const selectTheme = localStorage.getItem("selected-theme");
const selectIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectTheme) {
  document.body.classList[selectTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectTheme === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

let showModel = document.querySelector(".btn")
showModel.addEventListener("click", () => {
  document.querySelector(".model").style.visibility = "visible";
})

document.querySelector(".bx-x").addEventListener("click", () => {
  document.querySelector(".model").style.visibility = "hidden";
})
document.querySelector(".pop_up").addEventListener("click", (e) => {
  e.stopPropagation()
})

// document.querySelector(".model").addEventListener("click", () => {
//   document.querySelector(".model").style.visibility = "hidden";
// })