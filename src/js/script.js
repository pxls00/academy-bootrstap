const courseBtns = document.querySelectorAll(".courses-btn");
const courseblock = document.querySelector(".course");
const langsBlock = document.querySelector('.langs-block')

const courses = [
  {
    img: "https://images.summitmedia-digital.com/esquiremagph/images/2020/04/02/Online-Class-MAIN-IMAGE-01.jpg",
    title: "Курс по Front-End  Development",
    origin: false,
    type: "frontend",
    roadmap: [
      {
        step: "1-й месяц Front-End Core:",
        body: "Верстка сайтов с помощью HTML5, CSS3 и Bootstrap, эффективное пользование MDB и Tailwind CSS, инструменты Webpack/Npm/Yarn instrumentlari и др.;",
      },
      {
        step: "2-ой месяц Front-End Kernel:",
        body: "JavaScript (OOP/ES6-9) язык программирования, библиотеки jQuery/Vanilla, Ajax, SSE, эффективное пользование Websockets, технологии PWA;",
      },
      {
        step: "3-й месяц Front-End Standart:",
        body: "Создание целевых страниц с помощью Vue, Vue CLI, Vue DevTools, Vuex, Axios, Storybook, Vue-Router, SSR, Quasar Framework и других эффективных библиотек; ",
      },
      {
        step: "4-й месяц Front-End Advanced:",
        body: "Разработка мобильных приложений для Android и iOS систем с помощью Ionic2/Ionic Native/IonicCLI и Capacitor.js",
      },
    ],
  },
  {
    img: "./assets/images/courseBackend.png",
    title: "Курс по Back-End  Development",
    origin: true,
    type: "backend",
    roadmap: [
      {
        step: "1-й месяц Back-End Core:",
        body: "Основы PHPStorm IDE, Nginx, PHP7 и OOP. Эффективное пользование Composer/PECL, база данных Navicat, PostgreSQL и MongoDB, пользование XDebug. Работа с помощью CLI/CGI/FastCGI(FPM);",
      },
      {
        step: "2-ой месяц Back-End Kernel:",
        body: "Усложненный курс по PHP7 и OOP, основы платформ ZET Framework (Laravel/Symfony/Yii2), работа с помоRoutes, Database, Active Record ORM, Models, Widgets, Session/Cookies/LocalStorage",
      },
      {
        step: "3-й месяц Back-End Standart:",
        body: "Усложненный курс по ZET Framework, использование сервисов Services, Actions, Events, Console & Web Apps и IoC/DI,      эффективная работа с помощью Widgets",
      },
      {
        step: "4-й месяц Back-End Advanced:",
        body: "Performance tuning (Opcache, Redis, ElasticSearch, BlackFire), Secure Coding, XSS, SQL/PHP/Shell Injections Prevention, CGI/Filesystem/Database security, Nginx, MongoDB, PHPCI, CircleCI, REST API, Selenium, разработка Telegram.Bot (Botman);",
      },
    ],
  },
  {
    img: "./assets/images/courseDesign.png",
    title: "Курс по Web Design",
    origin: false,
    type: "webdesign",
    roadmap: [
      {
        step: "1-й месяц Design Basics:",
        body: "Основы веб дизайна, знакомство с Figma, работа с Material/Ant Design, эффективное пользование компонентов, работа по сетке BootStrap, знакомство с плагинами, прототипирование;",
      },
      {
        step: "2-ой месяц Design Advanced:",
        body: "Усложненный курс по Figma, адаптивный дизайн, дизайн мобильных приложений, работа с Adobe Photoshop, создание логотипов, рекламных баннеров, флаеров;",
      },
    ],
  },
  {
    img: "https://amsterdam.groenlinks.nl/sites/groenlinks/files/styles/instagram/public/2021-06/headway-jfR5wu2hMI0-unsplash.jpg?h=a141e9ea&amp;itok=KO7ole40",
    title: "Курс по DevOps  Development",
    origin: true,
    type: "devops",
    roadmap: [
      {
        step: "1-й месяц DevOps Core:",
        body: "Верстка сайтов с помощью HTML5, CSS3 и Bootstrap, эффективное пользование MDB и Tailwind CSS, инструменты Webpack/Npm/Yarn instrumentlari и др.;",
      },
      {
        step: "2-ой месяц DevOps Advanced:",
        body: "Разработка мобильных приложений для Android и iOS систем с помощью Ionic2/Ionic Native/IonicCLI и Capacitor.js",
      },
    ],
  },
  {
    img: "https://teknodestek.com.tr/wp-content/uploads/2021/06/Dijital-Reklamcilik-Nedir_1.jpg",
    title: "Курс по SMM Specialist",
    origin: true,
    type: "smm",
    roadmap: [
      {
        step: "1-й месяц Social Media Marketing",
        body: "SMM-менеджер — профессия 21 века. Из-за ее очевидной молодости, до сих пор далеко не все представляют, на что способен специалист с таким названием и какие требования можно к нему предъявлять. Предлагаем во всем разобраться.",
      },
    ],
  },
  {
    img: "https://images.interactives.dk/shutterstock_1137339098-X9h-89NwPeRz12f7_DeTHA.jpg?w=1500",
    title: "Курс по Android Development",
    origin: false,
    type: "android",
    roadmap: [
      {
        step: "1-й месяц Quasar Fremowork",
        body: "Если вы только начинаете свою карьеру в качестве Android-разработчика или только планируете это сделать, следуйте этим шагам. Наш план “Android-разработка для начинающих” поможет вам в любом случае!",
      },
    ],
  },
];


const findCourse = (id) => {
  const course = courses.filter((item) => item.type === id);
  return course;
};

const roadStep = (items) => {
  let htmlEl = "";
  items.forEach((item) => {
    htmlEl += `
        <h3 class="fs-5 mulish fw-bold">${item.step}</h3>
        <p class="about__body text-muted fs-6">${item.body}</p> 
        `;
  });
  return htmlEl;
};
addHTMLEL()

courseBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    courseBtns.forEach((removeBtn) => removeBtn.classList.remove("active"));
    btn.classList.add("active");
    addHTMLEL()
  });
});

function addHTMLEL() {
  courseBtns.forEach((btn) => {
    if (btn.classList.value.includes('active')) {
      const data = findCourse(btn.attributes[1].value)[0];
      courseblock.innerHTML = `
        <div class="d-flex justify-content-between flex-wrap">
            <aside class="col-md-6 col-sm-12 left-aside">
                <img class="about-img vannilla-animate" src="${
                    data.img
                }"/>
                <div class="about-img-block bg-light">
                </div>
            </aside>
            <article class="d-flex flex-column  col-xl-6 col-md-12">
                <h3 class="fw-bold fs-4 mb-4 text-primary mont">
                    ${data.title}
                </h3>
                ${roadStep(data.roadmap)}
            </article>
        </div>
        `;
        vanilaAnimation()
    }
  });
}

function vanilaAnimation() {
    VanillaTilt.init(document.querySelectorAll(".vannilla-animate"), {
        max: 25,
        speed: 400
    });
}

