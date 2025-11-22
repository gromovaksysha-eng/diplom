
const attractions = [
    {
        id: 1,
        name: "Тихвинский железнодорожный вокзал",
        image: "img/vokzal.webp",
        description: "Исторический железнодорожный вокзал построенный в 1904 году",
        fullDescription: "Железнодорожный комплекс, состоящий из здания вокзала, станционной администрации, веерного депо, водонапорной башни и деревянных корпусов для служащих станции, является образцом промышленной архитектуры начала XX века (1904-1905 гг.). Он был построен в 1904 году в русско-византийском стиле. В годы Великой Отечественной войны станция оказалась в прифронтовой зоне и подверглась сильным бомбардировкам, в результате которых 14 октября 1941 года погибли люди.",
        history: "Построен в 1904 году. В 1990-1995 годах вокзал был реконструирован с пристройкой новых корпусов. 14 октября 2016 года напротив железнодорожного вокзала был открыт монумент, посвященный погибшим здесь во время бомбежки 14 октября 1941 года детям блокадного Ленинграда.",
        bestTime: "Круглый год",
        address: "г. Тихвин, Привокзальная площадь, д. 1"
    },
    {
        id: 2,
        name: "Храм иконы Божией Матери Знамение",
        image: "img/znamenka.jpg",
        description: "Православный храм с богатой историей и уникальной архитектурой",
        fullDescription: "Знаменская церковь в Тихвине — один из старейших православных храмов города, являющийся объектом культурного наследия и важным духовным центром.",
        history: "Этот каменный храм был возведен в 1719 году тихвинским купцом Варлаамом Саньковым «со товарищи» по обету, данному в шведском плену.",
        bestTime: "Круглый год",
        address: "г. Тихвин, ул. Знаменская, 12"
    },
    {
        id: 3,
        name: "Летний сад",
        image: "img/letsad.jpg",
        description: "Старейший парк Тихвина - зелёная жемчужина города",
        fullDescription: "Новую жизнь Летний сад получил благодаря участию Тихвина в федеральном конкурсе лучших проектов создания комфортной городской среды «Малые города и исторические поселения». Открытие Летнего сада после обновления состоялось 14 октября 2023 г.",
        history: "Городской общественный сад был заложен в 1870-е гг. по инициативе первого городского головы, председателя городской Думы и управы, купца 2-й гильдии Иосифа Владимировича Лохвицкого (1820–1890).",
        bestTime: "Круглый год",
        address: "г. Тихвин, между улицами Советская и Карла Маркса"
    },
    {
        id: 4,
        name: "Дом-музей Н.А. Римского-Корсакова",
        image: "img/musium.webp",
        description: "Родовое гнездо великого русского композитора",
        fullDescription: "Дом-музей Николая Андреевича Римского-Корсакова — единственный в России музей великого композитора, расположенный в его родовом гнезде, где он родился и провёл первые 12 лет жизни.",
        history: "Музей был открыт в 1944 году, в год 100-летия со дня рождения композитора. Дом сохранил свою первоначальную архитектуру и атмосферу дворянской усадьбы начала XIX века.",
        bestTime: "Круглый год",
        address: "г. Тихвин, ул. Римского-Корсакова, 12"
    },
    {
        id: 5,
        name: "Церковь Всех Святых (Полковая)",
        image: "img/polkov.webp",
        description: "Воинский храм с богатой историей и уникальной архитектурой",
        fullDescription: "Первая деревянная церковь была установлена именно здесь, на этом самом месте, где, по преданию, в 1383 году произошло явление чудотворного образа Тихвинской Божией Матери.",
        history: "Каменная церковь построена в 1771-1775 гг. по проекту архитектора Василия Поливанова. Перестроена в 1886 году.",
        bestTime: "Круглый год",
        address: "г. Тихвин, ул. Римского-Корсакова, д.13"
    },
     {
        id: 6,
        name: "Тихвинская водная система",
        image: "img/shlus.webp",
        description: "Великая водная артерия Российской империи",
        fullDescription: "Сохранившиеся на территории Тихвинского района деревянные шлюзы — фрагменты Тихвинской водной системы XIX века, которая входила в альянс водных систем, соединявших Волгу с Балтийским морем.",
        history: "Идея постройки Тихвинской водной системы принадлежит императору Петру I.",
        bestTime: "Круглый год",
        address: "г. Тихвин, ул. Красноармейская"
    },
    {
        id: 7,
        name: "Дом-музей отца Сергия Гарклавса",
        image: "img/garklavs.jpg",
        description: "Место спасения Тихвинской иконы Божией Матери",
        fullDescription: "Дом отца Сергия Гарклавса в Тихвине — уникальное историческое место, связанное с сохранением одной из величайших православных святынь — Тихвинской иконы Божией Матери в годы Великой Отечественной войны.",
        history: "Отец Сергий Гарклавс, рискуя собственной жизнью, вывез икону из Тихвинского монастыря и скрывал её в своём доме, спасая от возможного уничтожения или захвата.",
        bestTime: "Круглый год",
        address: "г. Тихвин, ул. Красноармейская, д.3"
    },
     {
        id: 8,
        name: "Тихвинский Богородичный Успенский мужской монастырь",
        image: "img/monastir.webp",
        description: "Духовный центр и историческая жемчужина Тихвина",
        fullDescription: "Тихвинский Богородичный Успенский мужской монастырь — православный монастырь в городе Тихвине, один из самых почитаемых и известных монастырей Северо-Запада России.",
        history: "Монастырь был основан в 1560 году по указу царя Ивана Грозного на месте явления Тихвинской иконы Божией Матери. Архитектурный ансамбль монастыря складывался на протяжении XVI-XIX веков и представляет собой уникальный памятник русского зодчества.",
        bestTime: "Круглый год",
        address: "г. Тихвин, ул. Тихвинская, 1"
    },
    {
        id: 9,
        name: "Площадь Маршала Мерецкова",
        image: "img/square.webp",
        description: "Стела Город воинской славы - символ мужества и доблести",
        fullDescription: "Площадь Маршала Мерецкова с установленной стелой Город воинской славы — это центральный мемориальный комплекс Тихвина, увековечивающий подвиг советских воинов в Тихвинской наступательной операции 1941 года и отмечающий присвоение городу почётного звания Город воинской славы.",
        history: "4 ноября 2010 года Указом Президента Российской Федерации Дмитрия Медведева городу Тихвину было присвоено почётное звание Город воинской славы за мужество, стойкость и массовый героизм, проявленные защитниками города в борьбе за свободу и независимость Отечества.",
        bestTime: "Круглый год",
        address: "г. Тихвин, площадь Маршала Мерецкова"
    },
    {
        id: 10,
        name: "Парк Поколений",
        image: "img/park.webp",
        description: "Современное общественное пространство для отдыха и активного досуга",
        fullDescription: "Парк Поколений — это современное благоустроенное общественное пространство, созданное для комфортного отдыха и активного времяпрепровождения жителей и гостей Тихвина всех возрастов. Парк гармонично сочетает природные ландшафты с современной инфраструктурой.",
        history: "Начало работ по благоустройству территории в рамках федеральной программы Формирование комфортной городской среды. Проведены масштабные работы по озеленению и созданию инфраструктуры - 2020 год.",
        bestTime: "Круглый год",
        address: "г. Тихвин, набережная реки Тихвинки (район центрального пляжа)"
    },
     {
        id: 11,
        name: "Зона отдыха Зонт",
        image: "img/zont.webp",
        description: "Уютное место для отдыха у воды с уникальными архитектурными формами",
        fullDescription: "Зона отдыха Зонт — это уникальное общественное пространство на берегу реки Тихвинки, ставшее одним из символов современного Тихвина. Архитектурный комплекс в форме гигантского зонта создает комфортную тень и защиту от дождя, делая это место привлекательным для отдыха в любую погоду.",
        history: "Начало работ по благоустройству набережной реки Тихвинки в рамках проекта Современные общественные пространства - 2019 год.",
        bestTime: "Круглый год",
        address: "г. Тихвин, набережная реки Тихвинки (район центрального пляжа)"
    }
];


let currentSlide = 0;

function showSlide(n) {
    const slides = document.getElementsByClassName('carousel-slide');
    const dots = document.getElementsByClassName('dot');
    
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        dots[i].classList.remove('active');
    }
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function currentSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}


function autoSlide() {
    changeSlide(1);
}


function loadAttractionDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const attractionId = parseInt(urlParams.get('id'));
    const attraction = attractions.find(a => a.id === attractionId);
    
    const contentDiv = document.getElementById('attraction-content');
    
    if (!attraction) {
        contentDiv.innerHTML = `
            <h2>Достопримечательность не найдена</h2>
            <p>Запрошенная достопримечательность не существует.</p>
        `;
        return;
    }
    
    contentDiv.innerHTML = `
        <div class="attraction-header">
            <img src="${attraction.image}" alt="${attraction.name}">
            <div class="attraction-info">
                <h1>${attraction.name}</h1>
                <p class="address">${attraction.address}</p>
            </div>
        </div>
        
        <div class="attraction-content">
            <section class="description">
                <h2>Описание</h2>
                <p>${attraction.fullDescription}</p>
            </section>
            
            <section class="history">
                <h2>История</h2>
                <p>${attraction.history}</p>
            </section>
            
            <section class="practical-info">
                <h2>Полезная информация</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <strong>Лучшее время для посещения:</strong>
                        <span>${attraction.bestTime}</span>
                    </div>
                    <div class="info-item">
                        <strong>Адрес:</strong>
                        <span>${attraction.address}</span>
                    </div>
                </div>
            </section>
        </div>
    `;
}


function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            
            if (searchTerm.length < 2) {
                searchResults.innerHTML = '';
                return;
            }
            
            const filteredAttractions = attractions.filter(attraction => 
                attraction.name.toLowerCase().includes(searchTerm) ||
                attraction.description.toLowerCase().includes(searchTerm) ||
                attraction.fullDescription.toLowerCase().includes(searchTerm)
            );
            
            displaySearchResults(filteredAttractions);
        });
    }
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p>Ничего не найдено. Попробуйте изменить запрос.</p>';
        return;
    }
    
    const resultsHTML = results.map(attraction => `
        <div class="search-result-item">
            <h3><a href="attraction-detail.html?id=${attraction.id}">${attraction.name}</a></h3>
            <p>${attraction.description}</p>
        </div>
    `).join('');
    
    searchResults.innerHTML = resultsHTML;
}


document.addEventListener('DOMContentLoaded', function() {
    
    if (document.querySelector('.carousel')) {
        setInterval(autoSlide, 5000);
    }
    
    initSearch();
    
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navigation a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'attraction.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});