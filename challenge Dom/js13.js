const menu = document.querySelectorAll(".menu li");
menu.forEach((item) => {
  item.addEventListener("click", () => {
    menu.forEach((li) => li.classList="");
    item.classList="active";
  });
});