const changeLanguageUnit = document.querySelector(
	".nav-item__change-language-unit"
);
const navItemChangeLanguage = document.querySelector(".nav-item-language");

function showChangeLanguageUnit() {
	changeLanguageUnit.classList.toggle("show");
}
navItemChangeLanguage.addEventListener("click", showChangeLanguageUnit);

// Show nav-mobile

const overlay = document.querySelector(".nav-overlay");
const navMobile = document.querySelector(".nav-mobile");
const navMobilebtn = document.querySelector(".nav-mobile-btn");
const navMobileClose = document.querySelector(".nav-mobile__close");
function showNavMobile() {
	overlay.classList.toggle("show-overlay");
	navMobile.classList.toggle("show-nav-mobile");
}

// function hideNavMobile(){
//     overlay.classList.remove('show-overlay');
//     navMobile.classList.remove('show-nav-mobile');
// }

navMobilebtn.addEventListener("click", showNavMobile);
overlay.addEventListener("click", showNavMobile);
navMobileClose.addEventListener("click", showNavMobile);

// Show mobile language
const mobileLanguage = document.querySelector(".nav-mobile__item-language");
const mobileLanguageList = document.querySelector(
	".nav-mobile__item-language__change-language"
);

function showLanguageMobile() {
	mobileLanguageList.classList.toggle("show-language");
}
mobileLanguage.addEventListener("click", showLanguageMobile);
