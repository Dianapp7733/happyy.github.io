
    // === 1. ШУТКА ПО КНОПКЕ ===
    const jokesList = [
        "С днём рождения! Помни: ты не стареешь, ты переходишь на версию «Расширенная комплектация»",
        "Желаю, чтобы спина не болела от работы, а только от аплодисментов за твои шутки.",
        "📺 Желаю, чтобы пульт сам приползал в руку, а реклама показывала только про скидки на пиво.",
        "Желаю, чтобы здоровье было как у космонавта, а проблемы — как у муравья.",
        "Желаю, чтобы возраст был только в паспорте, а в душе — вечные 17."
    ];
    const jokeBtn = document.getElementById('jokeBtn');
    const jokeOutput = document.getElementById('jokeOutput');
    jokeBtn.addEventListener('click', () => {
        const randomJoke = jokesList[Math.floor(Math.random() * jokesList.length)];
        jokeOutput.innerHTML = `🎉 ${randomJoke} 🎉`;
    });

    // === 2. СЛАЙДЕР ===
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    function showSlide(index) {
        if (index >= totalSlides) slideIndex = 0;
        if (index < 0) slideIndex = totalSlides - 1;
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
    prevBtn.addEventListener('click', () => { slideIndex--; showSlide(slideIndex); });
    nextBtn.addEventListener('click', () => { slideIndex++; showSlide(slideIndex); });
    setInterval(() => { slideIndex++; showSlide(slideIndex); }, 5000);

    // === 3. ГАЛЕРЕЯ (карточки с шутками) ===
    const cardsData = [
        { img: "https://sun9-53.userapi.com/s/v1/ig2/XRYpk4LpdyI7UXgq_eehA5jITT_2784RQlehQm9ISCCrHhtuhdyrGlABBdhbA7h6UsT5k8dQC0BQYvsK6SKiuvDD.jpg?quality=95&as=32x32,48x47,72x71,108x107,160x158,240x237,360x355,480x474,540x533,640x632,720x711,1080x1066&from=bu&u=G8wn3iIdMuDGnMX-Hqw_ddr18_9b5NglbRlJ84uW0fw&cs=1080x0", text: "❤️" },
        { img: "https://sun9-20.userapi.com/s/v1/ig2/95gvirekUWLcU4fzxVaI5KxUGsV-ZMYQYrM5CCEyfIvBxuK2Trq6zREVAbhnoOYmV1nBCgbJdPB1QMlhs4y1Dx1M.jpg?quality=95&as=32x18,48x26,72x40,108x59,160x88,240x132,360x198,480x264,540x297,640x353,720x397,1080x595&from=bu&cs=1080x0", text: "❤️" },
        { img: "https://sun9-27.userapi.com/s/v1/ig2/Kpm450JnKp7OCYvGA0mZtDuW_9a_1QT2xt0Ss0aojxBrvAquSG5C6B6yYS05rs1UXSQM55m-nxqPGY28DMeWFhd6.jpg?quality=95&as=32x24,48x35,72x53,108x80,160x118,240x177,360x265,480x354,540x398,640x472,720x531,1080x796&from=bu&cs=1080x0", text: "❤️" },
        { img: "https://sun9-74.userapi.com/s/v1/ig2/k0OvDt4ahjLc-3eJYkZfldk6qJxu8jwkBdsn-Aolzh6Apokm7HMuI8aLojsaapZazjtvNw3WxxTo_SQMRq4WuDS1.jpg?quality=95&as=32x42,48x63,72x94,108x141,160x209,240x313,360x469,480x626,540x704,640x834,720x938,982x1280&from=bu&u=QNYrW-awtdwZKijbAeew80wIcnl1o7nPcMrpQWeNzy8&cs=982x0", text: "😱" }
    ];
    const galleryDiv = document.getElementById('galleryContainer');
    cardsData.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.innerHTML = `<img src="${card.img}" alt="смешная картинка"><p>${card.text}</p>`;
        galleryDiv.appendChild(cardDiv);
    });

    // === 4. ФОРМА ОБРАТНОЙ СВЯЗИ ===
    const sendBtn = document.getElementById('sendMessageBtn');
    const feedback = document.getElementById('formFeedback');
    sendBtn.addEventListener('click', () => {
        const name = document.getElementById('userName').value.trim();
        const msg = document.getElementById('userMessage').value.trim();
        if (!name || !msg) {
            feedback.innerHTML = "❓ Напиши имя и пожелание, папа обрадуется!";
            feedback.style.color = "#c0392b";
            return;
        }
        feedback.innerHTML = `❤️ Спасибо, ${name}! Папа улыбнётся, прочитав: «${msg}» ❤️`;
        feedback.style.color = "#2c6e2c";
        document.getElementById('userName').value = '';
        document.getElementById('userEmail').value = '';
        document.getElementById('userMessage').value = '';
        setTimeout(() => feedback.innerHTML = '', 4000);
    });

    // === 5. МОДАЛЬНОЕ ОКНО ===
    const modal = document.getElementById('myModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    openModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    });
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    // === 6. ПЛАВНАЯ ПРОКРУТКА (без ошибок file://) ===
    document.querySelectorAll('.nav a, .btn-cta[href="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetEl = document.getElementById(targetId);
                if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });