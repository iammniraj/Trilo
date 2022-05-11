const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

document
  .querySelector("#user-nav__user")
  .addEventListener("click", function () {
    document.querySelector(".popup1").classList.remove("hidden");
  });

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelector(".popup1").classList.add("hidden");
  }
});
