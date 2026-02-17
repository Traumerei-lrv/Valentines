
const displayCat = document.getElementById('displayCat');
const displayAudio = document.getElementById('grrr');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const successMessage = document.getElementById('success');

        function hideElements() {
            noBtn.style.display = 'none';
            yesBtn.style.display = 'none';
            question.style.display = 'none';
        }

        function removeAds() {
            const fakeAds = document.querySelectorAll('#fake_ads');
            fakeAds.forEach(ad => ad.remove());
        }

        function kuringRandom() {
            showFakeAd();
            /*const sadCats = [
                "https://raw.githubusercontent.com/Traumerei-lrv/Valentines/main/assests/gif/cat/sadCat1.webp",
                "https://raw.githubusercontent.com/Traumerei-lrv/Valentines/main/assests/gif/cat/sadCat2.gif",
                "https://raw.githubusercontent.com/Traumerei-lrv/Valentines/main/assests/gif/cat/sadCat3.gif",
                "https://raw.githubusercontent.com/Traumerei-lrv/Valentines/main/assests/gif/cat/sadCat4.webp",
                "https://raw.githubusercontent.com/Traumerei-lrv/Valentines/main/assests/gif/cat/sadCat5.gif",
                "https://raw.githubusercontent.com/Traumerei-lrv/Valentines/main/assests/gif/cat/sadCat6.webp",
                "https://raw.githubusercontent.com/Traumerei-lrv/Valentines/main/assests/gif/cat/sadCat7.gif"
            ];
            
            const randomCat = sadCats[Math.floor(Math.random() * sadCats.length)];
            displayCat.src = randomCat;
            displayCat.style.display = 'block';
            displayAudio.style.display = 'none';*/

        }
        
        noBtn.addEventListener('click', kuringRandom);
        yesBtn.addEventListener('click', function(){
            displayCat.src = "https://raw.githubusercontent.com/Traumerei-lrv/Valentines/main/assests/gif/cat/freaky.gif";
            hideElements();
            removeAds();    
            displayAudio.play();
            displayCat.style.display = 'block';
            displayAudio.style.display = 'block';
            successMessage.style.display = 'block';
            });

        
    function showFakeAd() {
        const ads = [
            "🔥HOT SINGLES IN YOUR AREA!🔥",
            "💊DOCTORS HATE THIS TRICK!💊",
            "🎰YOU WON $1,000,000!!! CLICK HERE🎰",
            "📱YOUR PHONE HAS 99 VIRUSES!!!📱",
            "🏆Congratulations! You're the 1,000,000th visitor!🏆",
            "💎Get rich quick with this one simple trick!💎",
            "🐱Click here for a surprise!🐱",
            "🔥LONELY MILFS IN YOUR AREA!🔥"
        ];
    
        const ad = document.createElement('div');
        ad.innerHTML = `
            <div id="fake_ads"style="position:fixed; top:${Math.random()*60}%; left:${Math.random()*60}%;
                background: linear-gradient(yellow, orange); border: 3px solid red;
                padding: 20px; z-index: 9999; border-radius: 10px; max-width: 250px;
                box-shadow: 5px 5px 15px rgba(0,0,0,0.3); cursor: pointer;">
                <span style="float:right; font-weight:bold;" onclick="this.parentElement.parentElement.remove()">✖</span>
                <p style="font-weight:bold; color:red; margin:0;">${ads[Math.floor(Math.random() * ads.length)]}</p>
            </div>
        `;
        document.body.appendChild(ad);
    }