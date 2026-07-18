export const profileData = {
  name: "Adem Kutlu",
  github: "https://github.com/ademkutlu23-afk",
  linkedin: "https://www.linkedin.com/in/adem-kutlu-1ab3413a0/",
  email: "ademkutlu23@gmail.com",
  instagram: "https://www.instagram.com/adocaine/",
};

export const profileInfo = {
  birthDate: "1992",
  city: "Balıkesir",
  education: "Workintech Full Stack Web Development Program",
  role: "Frontend Developer",
};

export const skills = [
  {
    id: 1,
    name: "JavaScript",
    description:
      "DOM işlemleri, array metotları ve temel mantık kısmında kullanıyorum.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 2,
    name: "React",
    description:
      "Component mantığı, props ve state konularını projelerle pekiştiriyorum.",
    link: "https://react.dev/",
  },
  {
    id: 3,
    name: "HTML",
    description:
      "Sayfanın temel yapısını kurmak ve bölümleri düzenlemek için kullanıyorum.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: 4,
    name: "CSS",
    description:
      "Tasarımı ekrana dökmek, renkleri ayarlamak ve sayfa düzenini yapmak için kullanıyorum.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: 5,
    name: "Git",
    description:
      "Projeyi kaydetmek, commit atmak ve GitHub'a göndermek için kullanıyorum.",
    link: "https://git-scm.com/",
  },
  {
    id: 6,
    name: "Figma",
    description:
      "Tasarımı incelemek, renkleri ve sayfa yerleşimini anlamak için kullanıyorum.",
    link: "https://www.figma.com/",
  },
];

export const projects = [
  {
    id: 1,
    araclar: ["HTML", "CSS"],
    github: "https://github.com/ademkutlu23-afk/Pizzaproje",
    live: "https://pizzaproje.vercel.app/",
  },
  {
    id: 2,
    araclar: ["React", "CSS", "useState"],
    github: "https://github.com/ademkutlu23-afk/patidose",
    live: "https://patidose.vercel.app/",
  },
  {
    id: 3,
    araclar: ["React", "Reactstrap", "Carousel"],
    github: "",
    live: "",
  },
  {
    id: 4,
    araclar: ["React", "Form", "Checkbox"],
    github: "",
    live: "",
  },
  {
    id: 5,
    araclar: ["React", "useReducer"],
    github: "",
    live: "",
  },
  {
    id: 6,
    araclar: ["React", "Context API", "localStorage"],
    github: "",
    live: "",
  },
  {
    id: 7,
    araclar: ["React", "Router", "Auth"],
    github: "",
    live: "",
  },
  {
    id: 8,
    araclar: ["React", "Axios", "API"],
    github: "",
    live: "",
  },
  {
    id: 9,
    araclar: ["React", "TanStack Query"],
    github: "",
    live: "",
  },
  {
    id: 10,
    araclar: ["React", "Redux"],
    github: "",
    live: "",
  },
  {
    id: 11,
    araclar: ["React", "Vite", "CSS"],
    github: "",
    live: "",
  },
  {
    id: 12,
    araclar: ["React", "Gemini API"],
    github: "",
    live: "",
  },
];

export const sayfaVerileri = {
  tr: {
    hero: {
      smallText: "Merhaba 👋",
      title: "Ben Adem Kutlu.",
      job: "Frontend Developer",
      description:
        "React ve JavaScript öğreniyorum. Bu projede component, veri akışı ve responsive tasarım konularını pekiştiriyorum.",
      githubText: "GitHub",
      linkedinText: "LinkedIn",
    },

    skillsTitle: "Yetenekler",

    profile: {
      title: "Profil",
      basicTitle: "Temel Bilgiler",
      aboutTitle: "Hakkımda",
      birthDateLabel: "Doğum Yılı",
      cityLabel: "Şehir",
      educationLabel: "Eğitim",
      roleLabel: "Rol",
      about:
        "Frontend tarafında React ve JavaScript öğreniyorum. Bu projede component yapısı, veri akışı, JavaScript, CSS ve responsive tasarım konularını pekiştirmeye çalışıyorum.",
    },

    projectsTitle: "Projeler",
    trainingProjectsTitle: "Eğitim Projeleri",

    projectTexts: [
      {
        id: 1,
        title: "Pizza Sipariş Sayfası",
        description:
          "HTML ve CSS kullanarak yaptığım statik bir pizza sipariş sayfası. Bu projede daha çok sayfa düzeni, renkler ve görsel tasarım üzerine çalıştım.",
        githubText: "GitHub",
        liveText: "Canlı Site",
      },
      {
        id: 2,
        title: "PatiDose",
        description:
          "Evcil hayvanların aşı ve parazit takiplerini ekleyebildiğim küçük bir React uygulaması. Şu an ilk sürüm olarak çalışıyor, ileride localStorage ile kayıtların kalıcı kalmasını eklemeyi düşünüyorum.",
        githubText: "GitHub",
        liveText: "Canlı Site",
      },
      {
        id: 3,
        title: "Kampanyalar Container",
        description:
          "Alışveriş sitesi için kampanya görsellerini carousel yapısıyla göstermeye çalıştığım bir eğitim projesi. Reactstrap Carousel kullanımını bu projede denedim.",
        githubText: "GitHub",
        liveText: "Canlı Site",
      },
      {
        id: 4,
        title: "GDPR / KVKK Onayı",
        description:
          "Form içinde checkbox kullanımını çalıştığım küçük bir proje. Kullanıcı onay kutusunu işaretlemeden butonun aktif olmaması mantığını yaptım.",
        githubText: "GitHub",
        liveText: "Canlı Site",
      },
      {
        id: 5,
        title: "Basit Hesap Makinası",
        description:
          "useReducer mantığını anlamak için yaptığım basit hesap makinesi çalışması. Action, reducer ve state güncelleme konularını bu projede pekiştirdim.",
        githubText: "GitHub",
        liveText: "Canlı Site",
      },
      {
        id: 6,
        title: "Book Store",
        description:
          "Kitap alışveriş sitesi üzerinde Context API kullanarak ürün ve sepet bilgisini yönetmeye çalıştığım proje. Sepete ekleme, çıkarma ve localStorage kısmı vardı.",
        githubText: "GitHub",
        liveText: "Canlı Site",
      },
      {
        id: 7,
        title: "Friends Database",
        description:
          "Login, route yapısı ve kullanıcı giriş kontrolünü çalıştığım bir arkadaş listesi projesi. AuthContext, localStorage ve private route konularını denedim.",
        githubText: "GitHub",
        liveText: "Canlı Site",
      },
      {
        id: 8,
        title: "Movie Database v3",
        description:
          "Film ekleme, düzenleme, silme ve favorilere alma işlemlerini çalıştığım bir film uygulaması. API istekleri ve route parametreleri bu projede öne çıkıyordu.",
        githubText: "GitHub",
        liveText: "Canlı Site",
      },
      {
        id: 9,
        title: "Contacts App",
        description:
          "Kişi listesini çekme, kişi detayını gösterme ve silme işlemlerini TanStack Query ile yapmaya çalıştığım bir fihrist uygulaması.",
        githubText: "GitHub",
        liveText: "Canlı Site",
      },
      {
        id: 10,
        title: "IMDB Film Veritabanı",
        description:
          "Redux kullanımını öğrenmek için yaptığım film veritabanı projesi. Film listesi, favoriler ve state yönetimini Redux ile düzenlemeye çalıştım.",
        githubText: "GitHub",
        liveText: "Canlı Site",
      },
      {
        id: 11,
        title: "Twitter Clone",
        description:
          "React ve Vite ile Twitter benzeri bir arayüz üzerinde çalıştığım ders projesi. Component yapısı ve sayfa düzeni pratiği yaptım.",
        githubText: "GitHub",
        liveText: "Canlı Site",
      },
      {
        id: 12,
        title: "AI ChatBot",
        description:
          "Gemini API kullanarak basit bir chatbot yapmaya çalıştığım proje. API key, env dosyası, markdown gösterimi ve custom hook konularını denedim.",
        githubText: "GitHub",
        liveText: "Canlı Site",
      },
    ],

    contact: {
      title: "Bana mesaj gönder!",
      description:
        "Benimle iletişime geçmek istersen aşağıdaki bağlantıları kullanabilirsin.",
      emailText: "E-posta",
      githubText: "GitHub",
      linkedinText: "LinkedIn",
    },
  },

  en: {
    hero: {
      smallText: "Hi 👋",
      title: "I am Adem Kutlu.",
      job: "Frontend Developer",
      description:
        "I am learning React and JavaScript. In this project, I practice components, data flow and responsive design.",
      githubText: "GitHub",
      linkedinText: "LinkedIn",
    },

    skillsTitle: "Skills",

    profile: {
      title: "Profile",
      basicTitle: "Basic Information",
      aboutTitle: "About Me",
      birthDateLabel: "Birth Year",
      cityLabel: "City",
      educationLabel: "Education",
      roleLabel: "Role",
      about:
        "I am learning React and JavaScript on the frontend side. In this project, I practice components, data flow, JavaScript, CSS and responsive design.",
    },

    projectsTitle: "Projects",
    trainingProjectsTitle: "Training Projects",

    projectTexts: [
      {
        id: 1,
        title: "Pizza Order Page",
        description:
          "A static pizza order page I built with HTML and CSS. In this project, I mostly practiced layout, colors and visual design.",
        githubText: "GitHub",
        liveText: "Live Site",
      },
      {
        id: 2,
        title: "PatiDose",
        description:
          "A small React app where I can add vaccine and parasite tracking records for pets. It is still a first version, and I plan to add localStorage later.",
        githubText: "GitHub",
        liveText: "Live Site",
      },
      {
        id: 3,
        title: "Campaigns Container",
        description:
          "A training project where I tried to show campaign images in an e-commerce page with a carousel structure. I practiced Reactstrap Carousel in this project.",
        githubText: "GitHub",
        liveText: "Live Site",
      },
      {
        id: 4,
        title: "GDPR / KVKK Approval",
        description:
          "A small form project where I practiced checkbox usage. I made the submit button disabled until the user accepts the terms.",
        githubText: "GitHub",
        liveText: "Live Site",
      },
      {
        id: 5,
        title: "Simple Calculator",
        description:
          "A simple calculator project I used to understand useReducer better. I practiced actions, reducer logic and state updates.",
        githubText: "GitHub",
        liveText: "Live Site",
      },
      {
        id: 6,
        title: "Book Store",
        description:
          "A book shopping project where I tried to manage product and cart data with Context API. I practiced adding/removing items and localStorage.",
        githubText: "GitHub",
        liveText: "Live Site",
      },
      {
        id: 7,
        title: "Friends Database",
        description:
          "A friends list project where I practiced login, routing and user authentication. I used AuthContext, localStorage and private route logic.",
        githubText: "GitHub",
        liveText: "Live Site",
      },
      {
        id: 8,
        title: "Movie Database v3",
        description:
          "A movie app where I practiced adding, editing, deleting and favoriting movies. API requests and route parameters were the main parts of this project.",
        githubText: "GitHub",
        liveText: "Live Site",
      },
      {
        id: 9,
        title: "Contacts App",
        description:
          "A contacts app where I practiced fetching contacts, showing contact details and deleting contacts with TanStack Query.",
        githubText: "GitHub",
        liveText: "Live Site",
      },
      {
        id: 10,
        title: "IMDB Movie Database",
        description:
          "A movie database project I used to learn Redux. I practiced managing movie lists, favorites and state with Redux.",
        githubText: "GitHub",
        liveText: "Live Site",
      },
      {
        id: 11,
        title: "Twitter Clone",
        description:
          "A class project where I worked on a Twitter-like interface with React and Vite. I practiced components and page layout.",
        githubText: "GitHub",
        liveText: "Live Site",
      },
      {
        id: 12,
        title: "AI ChatBot",
        description:
          "A simple chatbot project where I tried to use the Gemini API. I practiced API key usage, env variables, markdown display and a custom hook.",
        githubText: "GitHub",
        liveText: "Live Site",
      },
    ],

    contact: {
      title: "Send me a message!",
      description: "You can use the links below if you want to contact me.",
      emailText: "Email",
      githubText: "GitHub",
      linkedinText: "LinkedIn",
    },
  },
};