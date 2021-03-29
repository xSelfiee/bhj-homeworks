const value = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");

value.addEventListener("click", () => {
    list.classList.add("dropdown__list_active")
});

Array.from(document.getElementsByClassName("dropdown__link")).forEach(item => item.addEventListener("click", (e) => {
    value.textContent = item.textContent;
    list.classList.remove("dropdown__list_active");
    e.preventDefault();
}));