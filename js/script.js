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
        // For Homepage
        if (this.document.title === 'Home') {
            if (e.src.includes('close')) {
                e.src = "./images/hamburger.svg";
                return
            }
            if (e.src.includes('hamburger')) {
                e.src = "./images/close.svg";
            }
        }
        // For other Pages
        else {
            if (e.src.includes('close')) {
                e.src = "../images/hamburger.svg";
                return
            }
            if (e.src.includes('hamburger')) {
                e.src = "../images/close.svg";
            }
        }
    }
    // this.document.URL.includes('index.html')





    // let marginTop = function () {
    // const profile = document.querySelector('.profile-pic');
    //     if (profile.style.marginTop === '7.25em') {
    //         profile.style.marginTop = '0';
    //     } else {
    //         profile.style.marginTop = '7.25em'
    //     }
    // }


}

toggleMenu();










