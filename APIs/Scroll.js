// Sliding the menu open and close
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('.toggle-btn');
    const sideMenu = document.querySelector('.side-menu');
    const sideMenuOverlay = document.querySelector('.side-menu-overlay');

    toggleBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
    });

    sideMenuOverlay.addEventListener('click', () => {
        sideMenu.classList.remove('open');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggleBtn = document.querySelector(".toggle-btn");
    const menuCloseBtn = document.querySelector(".close-btn");
    const sideMenu = document.querySelector(".side-menu");
    const scrollUpBtn = document.querySelector(".scroll-up-btn");
    const content = document.querySelector(".content");

    menuToggleBtn.addEventListener("click", function () {
        sideMenu.classList.add("open");
        menuToggleBtn.style.display = "none";
       
    });

    menuCloseBtn.addEventListener("click", function () {
        sideMenu.classList.remove("open");
        menuToggleBtn.style.display = "block";
       
    });

    // Scroll to specific section on menu item click
    const menuItems = document.querySelectorAll(".menu-items li a");
    menuItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSectionId = item.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetSectionId);
            const targetOffset = targetSection.getBoundingClientRect().top;
            const currentOffset = window.pageYOffset;
            const scrollOffset = targetOffset + currentOffset;

            sideMenu.classList.remove("open");
            menuToggleBtn.style.display = "block";

            window.scroll({
                top: scrollOffset,
                behavior: "smooth"
            });
        });
    });

    // Show scroll-up button when scrolling down
    window.addEventListener("scroll", function () {
        const scrollY = window.pageYOffset;
        const windowHeight = window.innerHeight;

        if (scrollY > windowHeight) {
            scrollUpBtn.style.display = "block";
        } else {
            scrollUpBtn.style.display = "none";
        }
    });

    // Scroll back to the top on scroll-up button click
    scrollUpBtn.addEventListener("click", function () {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    });
});
