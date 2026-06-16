
const quotes = [
    "The best things in life are worth waiting for.",
    "Every day brings us one step closer to a beautiful new chapter.",
    "Time is not measured by clocks, but by moments that matter.",
    "Some journeys begin long before the destination arrives.",
    "The anticipation of something wonderful is part of the joy itself."
];

const slidesContainer = document.querySelector("#slidesContainer");

quotes.forEach((quote) => {

    const section = document.createElement("section");

    section.classList.add("slide", "quote-slide");

    section.innerHTML = `
        <div class="quote-box">
            <p>"${quote}"</p>
        </div>    `;

    slidesContainer.appendChild(section);
});

const eventDate = new Date(
    "January 1, 2027 00:00:00"
).getTime();

const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

const countdownStatus =
document.querySelector("#countdownStatus");

const toggleCountdownButton =
document.querySelector("#toggleCountdown");

let countdownInterval;
let isCountdownRunning = true;

const formatTime = (value) =>
String(value).padStart(2, "0");

const updateCountdown = () => {

    const now = Date.now();

    const difference = eventDate - now;

    if (difference <= 0) {
        clearInterval(countdownInterval);

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        countdownStatus.textContent =
        "Time's up! The event has started 🎉";
        toggleCountdownButton.textContent=
        "Finished";
        toggleCountdownButton.disabled = true;
        return;
    }

    const days =
    Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours =
    Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes =
    Math.floor((difference / (1000 * 60)) % 60);
    const seconds =
    Math.floor((difference / 1000) % 60);
    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
};

const startCountdown = () => {
    clearInterval(countdownInterval);
    updateCountdown();
    countdownInterval =
    setInterval(updateCountdown, 1000);
    isCountdownRunning = true;
    toggleCountdownButton.textContent =
    "Pause Countdown";
    countdownStatus.textContent =
    "Timer is running.";
};

const pauseCountdown = () => {
    clearInterval(countdownInterval);
    isCountdownRunning = false;
    toggleCountdownButton.textContent =
    "Start Countdown";
    countdownStatus.textContent =
    "Timer is paused.";
};

toggleCountdownButton.addEventListener(
    "click",
    () => {
        if (isCountdownRunning) {
            pauseCountdown();
        } else {
            startCountdown();
        }
    }
);

const prevSlideButton =
document.querySelector("#prevSlide");

const nextSlideButton =
document.querySelector("#nextSlide");

const slideCounter =
document.querySelector("#slideCounter");

let currentSlide = 0;

const totalSlides =
document.querySelectorAll(".slide").length;

const slideDelay = 5000;

let slideInterval;
slidesContainer.style.width =
`${totalSlides * 100}vw`;

const showSlide = (slideNumber) => {
    currentSlide =
    (slideNumber + totalSlides) %
    totalSlides;
    slidesContainer.style.transform =
    `translateX(-${currentSlide * 100}vw)`;
    slideCounter.textContent =
    `Slide ${currentSlide + 1} of ${totalSlides}`;
};

const nextSlide = () =>
showSlide(currentSlide + 1);

const previousSlide = () =>
showSlide(currentSlide - 1);

const resetAutoSlide = () => {
    clearInterval(slideInterval);
    slideInterval =
    setInterval(nextSlide, slideDelay);
};

nextSlideButton.addEventListener(
    "click",
    () => {
        nextSlide();
        resetAutoSlide();
    }
);

prevSlideButton.addEventListener(
    "click",
    () => {
        previousSlide();
        resetAutoSlide();
    }
);

const welcomeModal =
document.querySelector("#welcomeModal");

const closeModalButton =
document.querySelector("#closeModal");

setTimeout(() => {
    welcomeModal.classList.add("show");
}, 5000);

closeModalButton.addEventListener(
    "click",
    () => {
        welcomeModal.classList.remove("show");
    }
);

startCountdown();
showSlide(0);
slideInterval =
setInterval(nextSlide, slideDelay);