// const hamburgerToggle = document.getElementsByClassName("hamburger")[0];
// const logoLabel = document.getElementsByClassName("logo")[0];
// const allLinks = document.getElementsByClassName("navbar-items")[0];
// const navigationBar = document.getElementsByClassName("navbar")[0];

// hamburgerToggle.addEventListener('click', () => {
//     allLinks.classList.toggle('active');
//     logoLabel.classList.toggle('active');
//     navigationBar.classList.toggle('active');
// })

const dressIcon = document.getElementsByClassName("dress")[0];
const bootIcon = document.getElementsByClassName("boot")[0];
const lipstickIcon = document.getElementsByClassName("lipstick")[0];
const lotionIcon = document.getElementsByClassName("lotion")[0];
const glassIcon = document.getElementsByClassName("glass")[0];

const fashionContent = document.getElementsByClassName("fashion")[0];
const clothesContent = document.getElementsByClassName("clothes")[0];
const cosmeticsContent = document.getElementsByClassName("cosmetics")[0];
const shoesContent = document.getElementsByClassName("shoes")[0];
const accessoriesContent = document.getElementsByClassName("accessories")[0];
const skinContent = document.getElementsByClassName("skin")[0];

dressIcon.addEventListener('click', () => {
    fashionContent.style.opacity = 0;
    clothesContent.style.opacity = 1;
    cosmeticsContent.style.opacity = 0;
    shoesContent.style.opacity = 0;
    accessoriesContent.style.opacity = 0;
    skinContent.style.opacity = 0;
})

bootIcon.addEventListener('click', () => {
    fashionContent.style.opacity = 0;
    clothesContent.style.opacity = 0;
    cosmeticsContent.style.opacity = 0;
    shoesContent.style.opacity = 1;
    accessoriesContent.style.opacity = 0;
    skinContent.style.opacity = 0;
})

lipstickIcon.addEventListener('click', () => {
    fashionContent.style.opacity = 0;
    clothesContent.style.opacity = 0;
    cosmeticsContent.style.opacity = 1;
    shoesContent.style.opacity = 0;
    accessoriesContent.style.opacity = 0;
    skinContent.style.opacity = 0;
})

lotionIcon.addEventListener('click', () => {
    fashionContent.style.opacity = 0;
    clothesContent.style.opacity = 0;
    cosmeticsContent.style.opacity = 0;
    shoesContent.style.opacity = 0;
    accessoriesContent.style.opacity = 0;
    skinContent.style.opacity = 1;
})

glassIcon.addEventListener('click', () => {
    fashionContent.style.opacity = 0;
    clothesContent.style.opacity = 0;
    cosmeticsContent.style.opacity = 0;
    shoesContent.style.opacity = 0;
    accessoriesContent.style.opacity = 1;
    skinContent.style.opacity = 0;
})