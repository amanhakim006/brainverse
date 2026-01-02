var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1, // Start from 2nd slide
    coverflowEffect: {
        rotate: 0, // No rotation for cleaner look
        stretch: 0,
        depth: 150, // Depth effect
        modifier: 2.5,
        slideShadows: false, // No harsh shadows
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    keyboard: {
        enabled: true,
    },
    mousewheel: {
        thresholdDelta: 70,
    },
});

function copyPrompt(btn) {
    const text = btn.previousElementSibling.innerText;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerText;
        btn.innerText = "COPIED!";
        btn.style.background = "#fff";
        btn.style.color = "#000";
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "transparent";
            btn.style.color = "#fff";
        }, 2000);
    });
}
