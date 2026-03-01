const displayCat = document.getElementById('displayCat');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const successMessage = document.getElementById('success');
const questionArea = document.getElementById('questionArea');
const sadCatImg = document.getElementById('sadCatImg');
const guiltText = document.getElementById('guiltText');

document.getElementById('dismissNotice').addEventListener('click', function () {
    document.getElementById('volumeNotice').style.display = 'none';
});

const sadCats = [
    'assests/gif/cat/sadCat1.webp',
    'assests/gif/cat/sadCat2.gif',
    'assests/gif/cat/sadCat3.gif',
    'assests/gif/cat/sadCat4.webp',
    'assests/gif/cat/sadCat5.gif',
    'assests/gif/cat/sadCat6.webp',
    'assests/gif/cat/sadCat7.gif'
];

const guiltMessages = [
    'Are you sure? 🥺',
    'Please reconsider... 😿',
    "You're breaking my heart! 💔",
    "I promise I'll be good! 🙏",
    "Don't do this to me... 😭",
    "I'll wait forever for you! ⏳",
    'PLEASE SAY YES!!! 😱'
];

let noClickCount = 0;

const sadSounds = [
    'assests/sounds/sad-meow-song.mp3',
    'assests/sounds/sad-music.mp3',
    'assests/sounds/tf_nemesis.mp3'
];
const sadAudio = document.getElementById('sadAudio');
const romanticAudio = document.getElementById('romanticAudio');

function playRandomSadSound() {
    const randomSound = sadSounds[Math.floor(Math.random() * sadSounds.length)];
    sadAudio.pause();
    sadAudio.src = randomSound;
    sadAudio.currentTime = 0;
    sadAudio.play().catch(() => { });
}

function playRomanticSound() {
    sadAudio.pause();
    romanticAudio.pause();
    romanticAudio.currentTime = 0;
    romanticAudio.play().catch(() => { });
}

function hideElements() {
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
    question.style.display = 'none';
    questionArea.style.display = 'none';
}

function removeAds() {
    const fakeAds = document.querySelectorAll('.fake-ad');
    fakeAds.forEach(ad => ad.remove());
}

function kuringRandom() {
    showFakeAd();
    playRandomSadSound();
    spawnSadParticles(15);

    noClickCount++;

    const catIndex = Math.floor(Math.random() * sadCats.length);
    sadCatImg.src = sadCats[catIndex];
    sadCatImg.style.display = 'block';
    sadCatImg.classList.remove('sad-bounce');
    void sadCatImg.offsetWidth;
    sadCatImg.classList.add('sad-bounce');

    const msgIndex = Math.min(noClickCount - 1, guiltMessages.length - 1);
    guiltText.textContent = guiltMessages[msgIndex];
    guiltText.style.display = 'block';

    const scale = 1 + (noClickCount * 0.3);
    yesBtn.style.transform = 'scale(' + scale + ')';
    yesBtn.style.transition = 'transform 0.3s ease';
    yesBtn.style.zIndex = '100';

    const noScale = Math.max(0.3, 1 - (noClickCount * 0.12));
    noBtn.style.transform = 'scale(' + noScale + ')';
    noBtn.style.transition = 'transform 0.3s ease, top 0.3s ease, left 0.3s ease';

    noBtn.style.position = 'fixed';
    noBtn.style.top = Math.random() * 70 + 10 + '%';
    noBtn.style.left = Math.random() * 70 + 10 + '%';
    noBtn.style.zIndex = '999';
}

function spawnSadParticles(count) {
    const sadEmojis = ['💧', '💔', '😢', '😿', '🫣', '☔', '💨'];
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'sad-particle';
        particle.textContent = sadEmojis[Math.floor(Math.random() * sadEmojis.length)];
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.fontSize = (18 + Math.random() * 24) + 'px';
        particle.style.animationDuration = (2 + Math.random() * 2.5) + 's';
        particle.style.animationDelay = Math.random() * 0.6 + 's';
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 5000);
    }
}

noBtn.addEventListener('click', kuringRandom);
yesBtn.addEventListener('click', function () {
    spawnHearts(30);

    setTimeout(() => {
        displayCat.src = 'https://raw.githubusercontent.com/Traumerei-lrv/Valentines/main/assests/gif/cat/freaky.gif';
        hideElements();
        removeAds();
        playRomanticSound();
        displayCat.style.display = 'block';
        successMessage.style.display = 'block';
        document.getElementById('thankYou').classList.add('success-title');

        let rounds = 0;
        const heartInterval = setInterval(() => {
            spawnHearts(8);
            rounds++;
            if (rounds > 5) {
                clearInterval(heartInterval);
            }
        }, 800);
    }, 400);
});

function spawnHearts(count) {
    const hearts = ['❤️', '💕', '💖', '💗', '💘', '😻', '🫶', '💋', '🔥'];
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = (80 + Math.random() * 20) + 'vh';
        heart.style.fontSize = (16 + Math.random() * 28) + 'px';
        heart.style.animationDuration = (2 + Math.random() * 3) + 's';
        heart.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
}

function showFakeAd() {
    const ads = [
        '🔥HOT SINGLES IN YOUR AREA!🔥',
        '💊DOCTORS HATE THIS TRICK!💊',
        '🎰YOU WON $1,000,000!!! CLICK HERE🎰',
        '📱YOUR PHONE HAS 99 VIRUSES!!!📱',
        "🏆Congratulations! You're the 1,000,000th visitor!🏆",
        '💎Get rich quick with this one simple trick!💎',
        '🐱Click here for a surprise!🐱',
        '🔥LONELY MILFS IN YOUR AREA!🔥'
    ];

    const ad = document.createElement('div');
    ad.innerHTML = `
        <div class="fake-ad" style="position:fixed; top:${Math.random() * 60}%; left:${Math.random() * 60}%;
            background: linear-gradient(yellow, orange); border: 3px solid red;
            padding: 20px; z-index: 9999; border-radius: 10px; max-width: 250px;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.3); cursor: pointer;">
            <span style="float:right; font-weight:bold;" onclick="this.parentElement.remove()">✖</span>
            <p style="font-weight:bold; color:red; margin:0;">${ads[Math.floor(Math.random() * ads.length)]}</p>
        </div>
    `;
    document.body.appendChild(ad);
}