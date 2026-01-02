// ================= DATA STORAGE =================
const collectionData = {
    
    // 1. Stranger Things (Set 1)
    'stranger-things-1': [
        { img: 'images/ST1.jpg', title: 'The Demogorgon', prompt: 'Terrifying Demogorgon creature standing in the Upside Down, slime and spores floating in the air, dark blue and red lighting, 80s horror aesthetic, cinematic.' },
        { img: 'images/ST2.jpg', title: 'Hawkins Bike Squad', prompt: 'Group of kids riding bicycles on a foggy road at night, flashlights beaming, retro 80s vibe, mysterious shadow looming, synthwave atmosphere.' },
        { img: 'images/ST3.jpg', title: 'Eleven Powers', prompt: 'Eleven using telekinetic powers, nose bleeding, intense expression, shattered glass in mid-air, dramatic lighting, Netflix series style art.' },
        { img: 'images/ST4.jpg', title: 'Starcourt Mall', prompt: 'Neon lit Starcourt Mall interior, 80s fashion, vibrant colors, retro aesthetic, crowded scene with teenagers, cinematic shot.' }
    ],

    // 2. IT: Welcome to Derry
    'it-derry': [
        { img: 'images/it1.jpg', title: 'Pennywise Smile', prompt: 'Close up of Pennywise the Clown smiling menacingly, cracked face paint, glowing yellow eyes, dark rainy background, horror cinematic 8k.' },
        { img: 'images/it2.jpg', title: 'The Red Balloon', prompt: 'A single red balloon floating in a dark sewer tunnel, water dripping, eerie atmosphere, flashlight beam cutting through the darkness.' },
        { img: 'images/it3.jpg', title: 'The Losers Club', prompt: 'Group of scared children standing in front of the Neibolt house, sunny day but creepy atmosphere, detailed environment.' },
        { img: 'images/it4.jpg', title: 'Georgie\'s Boat', prompt: 'Paper boat floating down a rain-filled gutter, heavy rain, yellow raincoat reflection, ominous feeling, photorealistic.' }
    ],

    // 3. Dhurandhar Rehman Dakait
    'rehman-dakait': [
        { img: 'images/Rehman1.jpg', title: 'Rehman The King', prompt: 'Portrait of a fierce Indian dacoit leader, rugged face, large turban, handlebar mustache, holding a vintage rifle, chambal ravines background.' },
        { img: 'images/Rehman2.jpg', title: 'Ravine Ambush', prompt: 'Group of bandits on horses galloping through dusty ravines, sunset lighting, dynamic action shot, dust clouds, gritty cinematic style.' },
        { img: 'images/Rehman3.jpg', title: 'Campfire Tales', prompt: 'Bandits sitting around a campfire in a cave, illuminating their rugged faces, cleaning weapons, intense atmosphere, night shot.' }
    ],

    // 4. Stranger Things (Set 2 - New)
    'stranger-things-new': [
        { img: 'images/SThings1.jpg', title: 'Vecna\'s Lair', prompt: 'Vecna connected to vines in the attic, red stormy background, ominous red lightning, horror fantasy art, highly detailed.' },
        { img: 'images/SThings2.jpg', title: 'Russian Base', prompt: 'Underground secret Russian laboratory, green sci-fi lighting, soldiers guarding a portal, cold atmosphere, cinematic concept art.' },
        { img: 'images/SThings3.jpg', title: 'Eddie\'s Solo', prompt: 'Eddie Munson playing guitar on top of a trailer in the Upside Down, red lightning striking, bats flying around, epic rockstar moment.' }
    ],

    // 5. Game of Thrones
    'game-of-thrones': [
        { img: 'images/GOT1.jpg', title: 'Dragon Fire', prompt: 'Huge dragon breathing fire on a medieval army, chaotic battlefield, smoke and embers, epic fantasy cinematic shot, 8k resolution.' },
        { img: 'images/GOT2.jpg', title: 'The Iron Throne', prompt: 'The Iron Throne sitting in a dark hall, shafts of light hitting the swords, cold and regal atmosphere, high fantasy art.' },
        { img: 'images/GOT3.jpg', title: 'Night Watch', prompt: 'Jon Snow standing on the ice wall looking at the north, snow falling, northern lights in the sky, fur cloak texture details.' }
    ],

    // 6. Dhurandhar Hamza
    'hamza-dakait': [
        { img: 'images/Hamza1.jpg', title: 'Hamza The Warrior', prompt: 'Close up of Hamza, a desert warrior with a scar, wearing black robes and a silver amulet, intense eyes, sandstorm background.' },
        { img: 'images/Hamza2.jpg', title: 'Desert Chase', prompt: 'Action shot of a warrior running on sand dunes, holding a curved sword, sunny day, heat haze effect, motion blur.' },
        { img: 'images/Hamza3.jpg', title: 'The Hideout', prompt: 'Secret fortress hidden inside a canyon, guards patrolling, ancient stone architecture, golden hour lighting.' },
        { img: 'images/Hamza4.jpg', title: 'Final Stand', prompt: 'Warrior standing alone against an army, sunset silhouette, dramatic and emotional composition, epic scale.' }
    ],

    // 7. Winter Vibes
    'winter-vibes': [
        { img: 'images/snow1.jpg', title: 'Cozy Cabin', prompt: 'A wooden cabin in the middle of a snowy forest, warm yellow light coming from windows, smoke from chimney, night time, peaceful.' },
        { img: 'images/snow2.jpg', title: 'Frozen Lake', prompt: 'A frozen lake reflecting the snowy mountains, ice cracks texture, clear blue sky, wide angle landscape shot.' },
        { img: 'images/snow3.jpg', title: 'Winter Portrait', prompt: 'Portrait of a girl wearing a thick wool hat and scarf, snowflakes on eyelashes, soft natural lighting, bokeh snowy background.' },
        { img: 'images/snow4.jpg', title: 'Northern Lights', prompt: 'Aurora Borealis painting the sky green and purple over a snowy landscape, stars visible, long exposure photography style.' }
    ]
};

// ================= LOGIC (DO NOT TOUCH) =================

var mainSwiper = new Swiper(".mainSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: { rotate: 0, stretch: 0, depth: 150, modifier: 2.5, slideShadows: false },
});

var detailSwiper = new Swiper(".detailSwiper", {
    effect: "cards",
    grabCursor: true,
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
            const slideHTML = `
                <div class="swiper-slide detail-slide">
                    <div class="detail-card">
                        <div class="img-holder"><img src="${item.img}" alt="${item.title}"></div>
                        <div class="detail-info">
                            <h3>${item.title}</h3>
                            <div class="prompt-box">${item.prompt}</div>
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
