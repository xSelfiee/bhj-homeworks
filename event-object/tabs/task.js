const tabArr = Array.from(document.getElementsByClassName("tab"));
const tabContentArr = Array.from(document.getElementsByClassName("tab__content"));

tabArr.forEach(item => item.addEventListener("click", () => {
    document.querySelector(".tab_active").classList.remove("tab_active");
    document.querySelector(".tab__content_active").classList.remove("tab__content_active");
    tabContentArr[tabArr.indexOf(item)].classList.add("tab__content_active");
    item.classList.add("tab_active");
}))