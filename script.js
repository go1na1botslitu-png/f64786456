// Предустановленные пользователи с уникальным оформлением
const predefinedUsers = [
    {
        firstName: "Иван",
        lastName: "Стрельников",
        email: "strelnikov@mountain.ru",
        joinDate: "15.03.2022",
        role: "Гид-инструктор",
        hikes: 28,
        altitude: 4200,
        days: 89,
        personalSite: "strelnikovivan.html", // ДОБАВИЛ
        theme: "strelnikov",
        activities: [
            "Экскурсия на Эльбрус - 20.12.2023",
            "Лекция по альпинизму - 22.12.2023",
            "Подготовка группы к восхождению - 25.12.2023",
            "Восхождение на пик Стрельникова - 28.12.2023"
        ],
        achievements: [
            "Мастер высотных восхождений",
            "Инструктор года 2022",
            "Покоритель Эльбруса",
            "Эксперт по снаряжению"
        ]
    },
    {
        firstName: "Ирина",
        lastName: "Загдай",
        email: "zagdai@mountain.ru",
        joinDate: "10.07.2021",
        role: "Биолог-исследователь",
        hikes: 19,
        altitude: 3800,
        days: 67,
        personalSite: "https://www.google.com/search?q=Ирина+Загдай+биолог+горные+растения", // ДОБАВИЛ
        theme: "zagdai",
        activities: [
            "Исследование флоры высокогорья - 18.12.2023",
            "Сбор образцов мхов - 21.12.2023",
            "Лекция о горных растениях - 24.12.2023",
            "Экспедиция в заповедник - 27.12.2023"
        ],
        achievements: [
            "Открытие нового вида растения",
            "Автор научных публикаций",
            "Эксперт по горной экологии",
            "Защитник природы"
        ]
    },
    {
        firstName: "Иван",
        lastName: "Моисеев",
        email: "moiseev@mountain.ru",
        joinDate: "03.11.2020",
        role: "Спасатель МЧС",
        hikes: 42,
        altitude: 5100,
        days: 124,
        personalSite: "https://www.google.com/search?q=Иван+Моисеев+спасатель+МЧС+горы", // ДОБАВИЛ
        theme: "moiseev",
        activities: [
            "Тренировка по спасработым - 16.12.2023",
            "Дежурство на северном склоне - 19.12.2023",
            "Обучение первой помощи - 23.12.2023",
            "Проверка снаряжения - 26.12.2023"
        ],
        achievements: [
            "Спас более 15 жизней",
            "Лучший спасатель года",
            "Эксперт по выживанию",
            "Инструктор первой помощи"
        ]
    },
    {
        firstName: "Александр",
        lastName: "Медведев",
        email: "medvedev@mountain.ru",
        joinDate: "22.05.2019",
        role: "Шеф-повар",
        hikes: 15,
        altitude: 3200,
        days: 45,
        personalSite: "https://www.google.com/search?q=Александр+Медведев+шеф+повар+горная+кухня", // ДОБАВИЛ
        theme: "medvedev",
        activities: [
            "Приготовление ужина для группы - 17.12.2023",
            "Мастер-класс по походной кухне - 20.12.2023",
            "Закупка провизии - 24.12.2023",
            "Новогодний банкет - 31.12.2023"
        ],
        achievements: [
            "Лучшие походные рецепты",
            "Шеф-повар года 2021",
            "Эксперт по полевой кухне",
            "Мастер приготовления на костре"
        ]
    },
    {
        firstName: "Александр",
        lastName: "Погребняк",
        email: "pogrebnyak@mountain.ru",
        joinDate: "08.09.2022",
        role: "Фотограф",
        hikes: 23,
        altitude: 4600,
        days: 78,
        personalSite: "https://www.google.com/search?q=Александр+Погребняк+фотограф+горные+пейзажи", // ДОБАВИЛ
        theme: "pogrebnyak",
        activities: [
            "Фотосъемка зимнего восхода - 19.12.2023",
            "Воркшоп по пейзажной фотографии - 22.12.2023",
            "Съемка для календаря - 25.12.2023",
            "Ночная фотосессия - 28.12.2023"
        ],
        achievements: [
            "Победитель фотоконкурса",
            "Автор выставки 'Горные вершины'",
            "Эксперт по пейзажной съемке",
            "Фотограф National Geographic"
        ]
    },
    {
        firstName: "Владимир",
        lastName: "Савченко",
        email: "savchenko@mountain.ru",
        joinDate: "14.01.2018",
        role: "Метеоролог",
        hikes: 31,
        altitude: 3900,
        days: 112,
        personalSite: "https://www.google.com/search?q=Владимир+Савченко+метеоролог+горный+климат", // ДОБАВИЛ
        theme: "savchenko",
        activities: [
            "Анализ погодных условий - 18.12.2023",
            "Установка метеостанции - 21.12.2023",
            "Лекция о горном климате - 24.12.2023",
            "Прогноз погоды на неделю - 27.12.2023"
        ],
        achievements: [
            "Точный прогноз на 95%",
            "Разработчик метеомодели",
            "Эксперт по горному климату",
            "Автор научных статей"
        ]
    },
    {
        firstName: "Богдан",
        lastName: "Сесь",
        email: "ses@mountain.ru",
        joinDate: "30.12.2021",
        role: "Историк-краевед",
        hikes: 17,
        altitude: 3400,
        days: 52,
        personalSite: "https://www.google.com/search?q=Богдан+Сесь+историк+горные+народы", // ДОБАВИЛ
        theme: "ses",
        activities: [
            "Экскурсия по историческим местам - 17.12.2023",
            "Лекция о древних поселениях - 20.12.2023",
            "Поиск артефактов - 23.12.2023",
            "Подготовка экспозиции - 26.12.2023"
        ],
        achievements: [
            "Открытие древнего поселения",
            "Автор книги 'История гор'",
            "Эксперт по горным народам",
            "Краевед года 2022"
        ]
    }
];

// Текущий пользователь
let currentUser = JSON.parse(localStorage.getItem('currentMountainUser')) || null;

// Элементы DOM
let contentContainer;

// Создание снежинок
function createSnowflakes() {
    const snowContainer = document.getElementById('snow-container');
    const snowflakeCount = 80;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        const size = Math.random() * 6 + 4;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        
        snowflake.style.left = `${Math.random() * 100}vw`;
        
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 10;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${delay}s`;
        
        snowflake.style.opacity = Math.random() * 0.7 + 0.3;
        
        snowContainer.appendChild(snowflake);
    }
}

// Инициализация приложения
function initApp() {
    contentContainer = document.getElementById('content-container');
    
    // Установка обработчиков навигации
    document.getElementById('nav-login').addEventListener('click', () => showLoginForm());
    document.getElementById('nav-profile').addEventListener('click', () => {
        if (currentUser) {
            showUserProfile();
        } else {
            showLoginForm();
        }
    });
    
    // Проверка текущего пользователя и отображение соответствующей страницы
    if (currentUser) {
        showUserProfile();
        setActiveNavButton('nav-profile');
    } else {
        showLoginForm();
        setActiveNavButton('nav-login');
    }
}

// Установка активной кнопки навигации
function setActiveNavButton(buttonId) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(buttonId).classList.add('active');
}

// Показать форму входа
function showLoginForm() {
    const template = document.getElementById('login-template');
    contentContainer.innerHTML = template.innerHTML;
    setActiveNavButton('nav-login');
    
    // Заполняем список предустановленных пользователей
    const userList = document.getElementById('predefined-users-list');
    predefinedUsers.forEach(user => {
        const userItem = document.createElement('div');
        userItem.className = 'user-item';
        userItem.textContent = `${user.firstName} ${user.lastName}`;
        userItem.addEventListener('click', () => {
            document.getElementById('login-first-name').value = user.firstName;
            document.getElementById('login-last-name').value = user.lastName;
        });
        userList.appendChild(userItem);
    });
    
    // Обработчик формы входа
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('login-first-name').value.trim();
        const lastName = document.getElementById('login-last-name').value.trim();
        
        if (firstName && lastName) {
            // Поиск пользователя в предустановленных
            const user = predefinedUsers.find(user => 
                user.firstName.toLowerCase() === firstName.toLowerCase() && 
                user.lastName.toLowerCase() === lastName.toLowerCase()
            );
            
            if (user) {
                currentUser = user;
                localStorage.setItem('currentMountainUser', JSON.stringify(currentUser));
                showUserProfile();
                setActiveNavButton('nav-profile');
            } else {
                // Показать сообщение об ошибке
                document.getElementById('login-error').style.display = 'block';
                // Предложить перейти на страницу "нет аккаунта"
                setTimeout(() => showNoAccountPage(), 2000);
            }
        } else {
            alert('Пожалуйста, заполните все поля формы.');
        }
    });
}

// Показать профиль пользователя
function showUserProfile() {
    const template = document.getElementById('profile-template');
    contentContainer.innerHTML = template.innerHTML;
    setActiveNavButton('nav-profile');
    
    // Устанавливаем уникальный класс для оформления
    const userProfileElement = document.getElementById('user-profile');
    userProfileElement.classList.add(currentUser.theme);
    
    // Заполнение данных пользователя
    document.getElementById('user-fullname').textContent = `${currentUser.firstName} ${currentUser.lastName}`;
    document.getElementById('user-email').textContent = currentUser.email;
    document.getElementById('role-text').textContent = currentUser.role;
    document.getElementById('member-since').textContent = currentUser.joinDate;
    
    // Инициалы для аватара
    const initials = `${currentUser.firstName[0]}${currentUser.lastName[0]}`;
    document.getElementById('user-avatar').textContent = initials;
    
    // Статистика
    document.getElementById('hikes-count').textContent = currentUser.hikes;
    document.getElementById('altitude-record').textContent = currentUser.altitude.toLocaleString();
    document.getElementById('days-on-mountain').textContent = currentUser.days;
    
    // Активности
    const activitiesList = document.getElementById('user-activities');
    currentUser.activities.forEach(activity => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-calendar-check"></i> ${activity}`;
        activitiesList.appendChild(li);
    });
    
    // Достижения
    const achievementsList = document.getElementById('user-achievements');
    currentUser.achievements.forEach(achievement => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-award" style="color: gold;"></i> ${achievement}`;
        achievementsList.appendChild(li);
    });
    
    // ВОТ ЭТОТ ОБРАБОТЧИК Я ДОБАВИЛ - для кнопки персонального сайта
    document.getElementById('personal-site-btn').addEventListener('click', function() {
        // Проверяем, есть ли ссылка на сайт у пользователя
        if (currentUser.personalSite) {
            // Переход на персональный сайт пользователя (открывает в новой вкладке)
            window.open(currentUser.personalSite, '_blank');
        } else {
            alert('Персональный сайт пользователя не указан.');
        }
    });
    
    // Обработчик кнопки выхода
    document.getElementById('logout-btn').addEventListener('click', function() {
        currentUser = null;
        localStorage.removeItem('currentMountainUser');
        showLoginForm();
        setActiveNavButton('nav-login');
    });
}

// Показать страницу "нет аккаунта"
function showNoAccountPage() {
    const template = document.getElementById('no-account-template');
    contentContainer.innerHTML = template.innerHTML;
    
    // Обработчик кнопки "Вернуться ко входу"
    document.getElementById('go-to-login').addEventListener('click', function() {
        showLoginForm();
        setActiveNavButton('nav-login');
    });
}

// Инициализация приложения после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    createSnowflakes();
    initApp();
    
    // Обновление снежинок при изменении размера окна
    window.addEventListener('resize', function() {
        const snowContainer = document.getElementById('snow-container');
        snowContainer.innerHTML = '';
        createSnowflakes();
    });
});