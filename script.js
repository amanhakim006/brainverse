// ================= DATA STORAGE (Prompts Removed) =================
const collectionData = {
    'stranger-things-1': [
        { img: 'images/ST1.jpg', title: 'The Demogorgon' },
        { img: 'images/ST2.jpg', title: 'Hawkins Bike Squad' },
        { img: 'images/ST3.jpg', title: 'Eleven Powers' },
        { img: 'images/ST4.jpg', title: 'Starcourt Mall' }
    ],
    'it-derry': [
        { img: 'images/it1.jpg', title: 'Pennywise Smile' },
        { img: 'images/it2.jpg', title: 'The Red Balloon' },
        { img: 'images/it3.jpg', title: 'The Losers Club' },
        { img: 'images/it4.jpg', title: 'Georgie\'s Boat' }
    ],
    'rehman-dakait': [
        { img: 'images/Rehman1.jpg', title: 'Rehman The King' },
        { img: 'images/Rehman2.jpg', title: 'Ravine Ambush' },
        { img: 'images/Rehman3.jpg', title: 'Campfire Tales' }
    ],
    'stranger-things-new': [
        { img: 'images/SThings1.jpg', title: 'Vecna\'s Lair' },
        { img: 'images/SThings2.jpg', title: 'Russian Base' },
        { img: 'images/SThings3.jpg', title: 'Eddie\'s Solo' }
    ],
    'game-of-thrones': [
        { img: 'images/GOT1.jpg', title: 'Dragon Fire' },
        { img: 'images/GOT2.jpg', title: 'The Iron Throne' },
        { img: 'images/GOT3.jpg', title: 'Night Watch' }
    ],
    'hamza-dakait': [
        { img: 'images/Hamza1.jpg', title: 'Hamza The Warrior' },
        { img: 'images/Hamza2.jpg', title: 'Desert Chase' },
        { img: 'images/Hamza3.jpg', title: 'The Hideout' },
        { img: 'images/Hamza4.jpg', title: 'Final Stand' }
    ],
    'winter-vibes': [
        { img: 'images/snow1.jpg', title: 'Cozy Cabin' },
        { img: 'images/snow2.jpg', title: 'Frozen Lake' },
        { img: 'images/snow3.jpg', title: 'Winter Portrait' },
        { img: 'images/snow4.jpg', title: 'Northern Lights' }
    ]
};

// ================= LOGIC =================

var mainSwiper = new Swiper(".mainSwiper", {
    effect: "coverflow", grabCursor: true, centeredSlides: true, slidesPerView: "auto",
    coverflowEffect: { rotate: 0, stretch: 0, depth: 150, modifier: 2.5, slideShadows: false },
});

var detailSwiper = new Swiper(".detailSwiper", {
    effect: "cards", grabCursor: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});

const modal = document.getElementById('collectionModal');
const detailWrapper = document.getElementById('detail-wrapper');
const coverSlides = document.querySelectorAll('.cover-slide');

coverSlides.forEach(slide => {
    slide.addEventListener('click', function() {
        const collectionKey = this.getAttribute('data-collection');
        const data = collectionData[collectionKey];
        if (!data) return;

        detailWrapper.innerHTML = '';
        data.forEach(item => {
            // Updated HTML structure: Uses 'detail-img-holder' and fixed 'PROMPT' text
            const slideHTML = `
                <div class="swiper-slide detail-slide">
                    <div class="detail-card">
                        <div class="detail-img-holder">
                            <img src="${item.img}" alt="${item.title}">
                        </div>
                        <div class="detail-info">
                            <h3>${item.title}</h3>
                            <div class="prompt-box">PROMPT</div>
                        </div>
                    </div>
                </div>`;
            detailWrapper.insertAdjacentHTML('beforeend', slideHTML);
        });

        detailSwiper.update();
        detailSwiper.slideTo(0);
        modal.classList.add('active');
    });
});

function closeModal() {
    modal.classList.remove('active');
}
