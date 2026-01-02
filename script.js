// ================= DATA STORAGE =================
// Yahan hum saari images aur prompts ka data rakhenge.
// 'scifi-gadgets' key ka use humne HTML mein data-collection="scifi-gadgets" mein kiya hai.

const collectionData = {
    'scifi-gadgets': [
        {
            img: 'images/ST1.jpg', // Corridor Image
            title: 'Neon Corridor',
            prompt: 'Sci-fi interior corridor, sleek futuristic design, white and dark grey panels, blue neon light strips on floor and ceiling leading to a bright light at the end, reflective surfaces, spaceship architecture, highly detailed, Unreal Engine 5 render.'
        },
        {
            img: 'images/ST2.jpg', // Engine/Reactor Image
            title: 'Reactor Core',
            prompt: 'Complex sci-fi reactor core mechanism, intricate mechanical details, copper coils, metallic plating, glowing blue energy conduits and wires, industrial futuristic machinery, close-up shot, high detail, octane render, volumetric lighting.'
        },
        // Aap aur bhi images yahan add kar sakte hain comma lagakar
    ],
    'fantasy-world': [
        // Dummy data for the second cover slide
        { img: 'https://via.placeholder.com/600x800?text=Fantasy+1', title: 'Dragon Keep', prompt: 'A dragon sitting on a castle...' },
        { img: 'https://via.placeholder.com/600x800?text=Fantasy+2', title: 'Mystic Forest', prompt: 'A glowing forest at night...' },
    ]
};


// ================= SWIPER INITIALIZATION =================

// 1. Main Swiper (Covers ke liye)
var mainSwiper = new Swiper(".mainSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: { rotate: 0, stretch: 0, depth: 150, modifier: 2.5, slideShadows: false },
});

// 2. Detail Swiper (Modal ke andar wala)
var detailSwiper = new Swiper(".detailSwiper", {
    effect: "cards", // Iske liye 'cards' effect acha lagega
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// ================= MODAL LOGIC =================

const modal = document.getElementById('collectionModal');
const detailWrapper = document.getElementById('detail-wrapper');
const coverSlides = document.querySelectorAll('.cover-slide');

// Jab Cover Slide par click ho
coverSlides.forEach(slide => {
    slide.addEventListener('click', function() {
        // 1. Pata karo kaunsa collection kholna hai
        const collectionKey = this.getAttribute('data-collection');
        const data = collectionData[collectionKey];

        // Agar data nahi mila to ruk jao
        if (!data) return;

        // 2. Purana data saaf karo
        detailWrapper.innerHTML = '';

        // 3. Naya data bharo (Loop through images)
        data.forEach(item => {
            // HTML structure for detail slide
            const slideHTML = `
                <div class="swiper-slide detail-slide">
                    <div class="glass-card detail-card">
                        <div class="img-holder">
                            <img src="${item.img}" alt="${item.title}">
                        </div>
                        <div class="detail-info">
                            <h3>${item.title}</h3>
                            <div class="prompt-box">
                                ${item.prompt}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            detailWrapper.insertAdjacentHTML('beforeend', slideHTML);
        });

        // 4. Swiper ko update karo taaki nayi slides dikhein
        detailSwiper.update();
        detailSwiper.slideTo(0); // Pehli slide par jao

        // 5. Modal ko dikhao
        modal.classList.add('active');
    });
});

// Modal band karne ka function
function closeModal() {
    modal.classList.remove('active');
}
