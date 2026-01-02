// ================= DATA STORAGE =================
const collectionData = {
    'stranger-things-1': [
        { img: 'images/ST1.jpg', title: 'The Demogorgon' },
        { img: 'images/ST2.jpg', title: 'Will Get Power' },
        { img: 'images/ST3.jpg', title: 'MR.Whatsit' },
        { img: 'images/ST4.jpg', title: 'Henry as Mr.Whatsit' }
    ],
    'it-derry': [
        { img: 'images/it1.jpg', title: 'Smoky Run' },
        { img: 'images/it2.jpg', title: 'Missing Poster' },
        { img: 'images/it3.jpg', title: 'Pennywise Trapped' },
        { img: 'images/it4.jpg', title: 'Pennywise Smile' }
    ],
    'rehman-dakait': [
        { img: 'images/Rehman1.jpg', title: 'Rehman Dakait' },
        { img: 'images/Rehman2.jpg', title: 'King of Layari' },
    ],
    'stranger-things-new': [
        { img: 'images/SThings1.jpg', title: 'Upsidedown Mumbai'},
        { img: 'images/SThings2.jpg', title: 'Upsidedown Tajmahal' },
        { img: 'images/SThings3.jpg', title: 'Upsidedown CST Mumbai' }
    ],
    'game-of-thrones': [
        { img: 'images/GOT1.jpg', title: 'Dragon Fire Gatway of India' },
        { img: 'images/GOT2.jpg', title: 'Dragon Fire Taj Mahal' },
    ],
    'hamza-dakait': [
        { img: 'images/Hamza1.jpg', title: 'Hamza Splashes' },
        { img: 'images/Hamza2.jpg', title: 'Hamza Smokes' },
        { img: 'images/Hamza3.jpg', title: 'The Hideout' },
        { img: 'images/Hamza4.jpg', title: 'Hamza Rides' }
    ],
    'winter-vibes': [
        { img: 'images/snow1.jpg', title: 'Ice Skating' },
        { img: 'images/snow2.jpg', title: 'Ice Ball ' },
        { img: 'images/snow3.jpg', title: 'Winter Portrait' },
        { img: 'images/snow4.jpg', title: 'Walk into Snow' }
    ]
};

// ================= LOGIC =================

// Main Swiper (Covers)
var mainSwiper = new Swiper(".mainSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 30, // Thoda rotation taaki 3D lage
        stretch: 0,
        depth: 200, // Depth badhai
        modifier: 1, // SCALE FIX: Isko 1 kar diya (pehle 2.5 tha)
        slideShadows: true,
    },
});

// Detail Swiper (Andar wala) - Simple Slide effect for best view
var detailSwiper = new Swiper(".detailSwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Modal Logic
const modal = document.getElementById('collectionModal');
const detailWrapper = document.getElementById('detail-wrapper');
const coverSlides = document.querySelectorAll('.cover-slide');

coverSlides.forEach(slide => {
    slide.addEventListener('click', function() {
        const collectionKey = this.getAttribute('data-collection');
        const data = collectionData[collectionKey];

        if (!data) return;

        detailWrapper.innerHTML = ''; // Purana data clear

        data.forEach(item => {
            // Yahan humne structure simple rakha hai taaki CSS handle kare
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
                </div>
            `;
            detailWrapper.insertAdjacentHTML('beforeend', slideHTML);
        });

        // Swiper update karke pehli slide par le aao
        detailSwiper.update();
        detailSwiper.slideTo(0);
        
        // Modal dikhao
        modal.classList.add('active');
    });
});

function closeModal() {
    modal.classList.remove('active');
}
