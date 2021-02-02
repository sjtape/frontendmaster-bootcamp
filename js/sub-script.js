// THIS PAGES FOR SUB - PAGES

// TOGGLE NAVIGATION MENU
const toggleMenu = function () {
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', (e) => {
        menu();
        changeImg(e.target);
        // marginTop();
    });

    const menu = () => {
        const navbar = document.getElementById('navbar');
        const menuList = document.getElementById('menu-list');

        navbar.classList.toggle('menu');
        menuList.classList.toggle('open-menu');
    }

    const changeImg = e => {

        if (e.src.includes('close')) {
            e.src = "../../images/hamburger.svg";
            return
        }
        if (e.src.includes('hamburger')) {
            e.src = "../../images/close.svg";
        }
    }


}

toggleMenu();










