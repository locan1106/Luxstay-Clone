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

const nextLocationBtn = document.getElementById("next-location-btn");
const prevLocationBtn = document.getElementById("prev-location-btn");

let currentIndexLocation = 0;
let lengthLocationList = 7;

nextLocationBtn.addEventListener("click", () => {
	const locationItemWidth = document.querySelector(
		".location__list .col"
	).offsetWidth;
	const widthScreen = window.innerWidth;

	currentIndexLocation++;

	if (widthScreen >= 1024) {
		if (currentIndexLocation > lengthLocationList - 5) {
			currentIndexLocation = 0;
		}
	} else if (widthScreen >= 741) {
		if (currentIndexLocation > lengthLocationList - 3) {
			currentIndexLocation = 0;
		}
	} else {
		if (currentIndexLocation > lengthLocationList - 2) {
			currentIndexLocation = 0;
		}
	}

	const slidesLocation = document.querySelector(".location__list .row");
	slidesLocation.style.transform = `translateX(${
		-currentIndexLocation * locationItemWidth
	}px)`;
});

prevLocationBtn.addEventListener("click", () => {
	const locationItemWidth = document.querySelector(
		".location__list .col"
	).offsetWidth;
	const widthScreen = window.innerWidth;

	currentIndexLocation--;

	if (widthScreen >= 1024) {
		if (currentIndexLocation < 0) {
			currentIndexLocation = lengthLocationList - 5;
		}
	} else if (widthScreen >= 738) {
		if (currentIndexLocation < 0) {
			currentIndexLocation = lengthLocationList - 3;
		}
	} else {
		if (currentIndexLocation < 0) {
			currentIndexLocation = lengthLocationList - 2;
		}
	}

	const slidesLocation = document.querySelector(".location__list .row");
	slidesLocation.style.transform = `translateX(${
		-currentIndexLocation * locationItemWidth
	}px)`;
});

// Promotion butotn
const nextPromotionItem = document.getElementById("next-promotion-btn");
const prevPromotionItem = document.getElementById("prev-promotion-btn");

let currentIndexPromotion = 0;
let lengthPromotionList = 3;

nextPromotionItem.addEventListener("click", () => {
	const promotionItemWidth = document.querySelector(
		".promotion-list .col"
	).offsetWidth;
	currentIndexPromotion++;
	console.log(currentIndexPromotion);
	if (currentIndexPromotion === lengthPromotionList) {
		currentIndexPromotion = 0;
		console.log("set lại = 0");
	}

	const slidesPromotion = document.querySelector(".promotion-list .row");

	slidesPromotion.style.transform = `translateX(${
		-currentIndexPromotion * promotionItemWidth
	}px)`;
});

prevPromotionItem.addEventListener("click", () => {
	const promotionItemWidth = document.querySelector(
		".promotion-list .col"
	).offsetWidth;
	currentIndexPromotion--;
	if (currentIndexPromotion === -1) {
		currentIndexPromotion = lengthPromotionList - 1;
	}

	const slidesPromotion = document.querySelector(".promotion-list .row");

	slidesPromotion.style.transform = `translateX(${
		-currentIndexPromotion * promotionItemWidth
	}px)`;
});

// suggestion
const nextSuggestionItem = document.getElementById("next-suggestion-btn");
const prevSuggestionItem = document.getElementById("prev-suggestion-btn");

let currentIndexSuggestion = 0;
let lengthSuggestionList = 6;

nextSuggestionItem.addEventListener("click", () => {
	const suggestionItemWidth = document.querySelector(
		".suggestion-list .col"
	).offsetWidth;
	currentIndexSuggestion++;
	const widthScreen = window.innerWidth;
	if (widthScreen >= 1024) {
		if (currentIndexSuggestion > lengthSuggestionList - 4) {
			currentIndexSuggestion = 0;
		}
	} else if (widthScreen >= 741) {
		if (currentIndexSuggestion > lengthSuggestionList - 3) {
			currentIndexSuggestion = 0;
		}
	} else {
		if (currentIndexSuggestion > lengthSuggestionList - 1) {
			currentIndexSuggestion = 0;
		}
	}

	const slidesSuggestion = document.querySelector(".suggestion-list .row");

	slidesSuggestion.style.transform = `translateX(${
		-currentIndexSuggestion * suggestionItemWidth
	}px)`;
});

prevSuggestionItem.addEventListener("click", () => {
	const suggestionItemWidth = document.querySelector(
		".suggestion-list .col"
	).offsetWidth;
	currentIndexSuggestion--;
	const widthScreen = window.innerWidth;
	if (widthScreen >= 1024) {
		if (currentIndexSuggestion === -1) {
			currentIndexSuggestion = lengthSuggestionList - 4;
		}
	} else if (widthScreen >= 741) {
		if (currentIndexSuggestion === -1) {
			currentIndexSuggestion = lengthSuggestionList - 3;
		}
	} else {
		if (currentIndexSuggestion === -1) {
			currentIndexSuggestion = lengthSuggestionList - 1;
		}
	}

	const slidesSuggestion = document.querySelector(".suggestion-list .row");

	slidesSuggestion.style.transform = `translateX(${
		-currentIndexSuggestion * suggestionItemWidth
	}px)`;
});

// Tutorial
const nextTutorialItem = document.getElementById("next-tutorial-btn");
const prevTutorialItem = document.getElementById("prev-tutorial-btn");

let currentIndexTutorial = 0;
let lengthTutorialList = 3;

nextTutorialItem.addEventListener("click", () => {
	const tutorialItemWidth = document.querySelector(
		".tutorial-list .col"
	).offsetWidth;
	currentIndexTutorial++;
	const widthScreen = window.innerWidth;
	if (widthScreen >= 741) {
		if (currentIndexTutorial > lengthTutorialList - 2) {
			currentIndexTutorial = 0;
		}
	} else {
		if (currentIndexTutorial > lengthTutorialList - 1) {
			currentIndexTutorial = 0;
		}
	}

	const slidesTutorial = document.querySelector(".tutorial-list .row");

	slidesTutorial.style.transform = `translateX(${
		-currentIndexTutorial * tutorialItemWidth
	}px)`;
});

prevTutorialItem.addEventListener("click", () => {
	const tutorialItemWidth = document.querySelector(
		".tutorial-list .col"
	).offsetWidth;
	currentIndexTutorial--;
	const widthScreen = window.innerWidth;
	if (widthScreen >= 741) {
		if (currentIndexTutorial === -1) {
			currentIndexTutorial = lengthTutorialList - 2;
		}
	} else {
		if (currentIndexTutorial === -1) {
			currentIndexTutorial = lengthTutorialList - 1;
		}
	}

	const slidesTutorial = document.querySelector(".tutorial-list .row");

	slidesTutorial.style.transform = `translateX(${
		-currentIndexTutorial * tutorialItemWidth
	}px)`;
});

window.addEventListener("resize", () => {
	// Location
	const locationItemWidth = document.querySelector(
		".location__list .col"
	).offsetWidth;
	const slidesLocation = document.querySelector(".location__list .row");
	slidesLocation.style.transform = `translateX(${
		-currentIndexLocation * locationItemWidth
	}px)`;

	// Promotion
	const promotionItemWidth = document.querySelector(
		".promotion-list .col"
	).offsetWidth;
	const slidesPromotion = document.querySelector(".promotion-list .row");
	slidesLocation.style.transform = `translateX(${
		-currentIndexPromotion * promotionItemWidth
	}px)`;

	// Suggestion
	const suggestionItemWidth = document.querySelector(
		".suggestion-list .col"
	).offsetWidth;
	const slidesSuggestion = document.querySelector(".suggestion-list .row");
	slidesSuggestion.style.transform = `translateX(${
		-currentIndexSuggestion * suggestionItemWidth
	}px)`;

	// Tutorial
	const tutorialItemWidth = document.querySelector(
		".tutorial-list .col"
	).offsetWidth;
	const slidesTutorial = document.querySelector(".tutorial-list .row");

	slidesTutorial.style.transform = `translateX(${
		-currentIndexTutorial * tutorialItemWidth
	}px)`;
});
