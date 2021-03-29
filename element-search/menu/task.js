const menuLinkArr = Array.from(document.getElementsByClassName('menu__link'));

menuLinkArr.forEach((elem) => {
    elem.onclick = () => {
        const menuSub = elem.nextElementSibling;
        if (menuSub.classList.contains('menu_active')) {
            menuSub.classList.remove('menu_active');
        } else if (menuSub) {
            menuSub.classList.add('menu_active');  
        }
        return false;               
}})


