const hamburgerToggle = document.getElementsByClassName("resp-nav")[0];
const allLinks = document.getElementsByClassName("links")[0];

hamburgerToggle.addEventListener('click', () => {
    allLinks.classList.toggle('active');
})

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
    fashionContent.style.position = 'absolute'
    clothesContent.style.opacity = 1;
    clothesContent.style.position = 'relative';
    cosmeticsContent.style.opacity = 0;
    cosmeticsContent.style.position = 'absolute';
    shoesContent.style.opacity = 0;
    shoesContent.style.position = 'absolute';
    accessoriesContent.style.opacity = 0;
    accessoriesContent.style.position = 'absolute';
    skinContent.style.opacity = 0;
    skinContent.style.position = 'absolute'
})

bootIcon.addEventListener('click', () => {
    fashionContent.style.opacity = 0;
    fashionContent.style.position = 'absolute';
    clothesContent.style.opacity = 0;
    clothesContent.style.position = 'absolute'
    cosmeticsContent.style.opacity = 0;
    cosmeticsContent.style.position = 'absolute';
    shoesContent.style.opacity = 1;
    shoesContent.style.position = 'relative';
    accessoriesContent.style.opacity = 0;
    accessoriesContent.style.position = 'absolute';
    skinContent.style.opacity = 0;
    skinContent.style.position = 'absolute'
})

lipstickIcon.addEventListener('click', () => {
    fashionContent.style.opacity = 0;
    fashionContent.style.position = 'absolute';
    clothesContent.style.opacity = 0;
    clothesContent.style.position = 'absolute';
    cosmeticsContent.style.opacity = 1;
    cosmeticsContent.style.position = 'relative';
    shoesContent.style.opacity = 0;
    shoesContent.style.position = 'absolute';
    accessoriesContent.style.opacity = 0;
    accessoriesContent.style.position = 'absolute';
    skinContent.style.opacity = 0;
    skinContent.style.position = 'absolute'
})

lotionIcon.addEventListener('click', () => {
    fashionContent.style.opacity = 0;
    fashionContent.style.position = 'absolute';
    clothesContent.style.opacity = 0;
    clothesContent.style.position = 'absolute';
    cosmeticsContent.style.opacity = 0;
    cosmeticsContent.style.position = 'absolute';
    shoesContent.style.opacity = 0;
    shoesContent.style.position = 'absolute';
    accessoriesContent.style.opacity = 0;
    accessoriesContent.style.position = 'absolute';
    skinContent.style.opacity = 1;
    skinContent.style.position = 'relative';
})

glassIcon.addEventListener('click', () => {
    fashionContent.style.opacity = 0;
    fashionContent.style.position = 'absolute';
    clothesContent.style.opacity = 0;
    clothesContent.style.position = 'absolute';
    cosmeticsContent.style.opacity = 0;
    cosmeticsContent.style.position = 'absolute';
    shoesContent.style.opacity = 0;
    shoesContent.style.position = 'absolute';
    accessoriesContent.style.opacity = 1;
    accessoriesContent.style.position = 'relative';
    skinContent.style.opacity = 0;
    skinContent.style.position = 'absolute';
})