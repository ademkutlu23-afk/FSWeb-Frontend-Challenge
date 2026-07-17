export const profileData = {
  name: "Adem Kutlu",
  github: "https://github.com/ademkutlu23-afk",
  linkedin: "https://www.linkedin.com/in/adem-kutlu-1ab3413a0/",
  email :"ademkutlu23@gmail.com"
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
  },
  {
    id: 2,
    name: "React",
    description:
      "Component mantığı, props ve state konularını projelerle pekiştiriyorum.",
  },
  {
    id: 3,
    name: "HTML",
    description:
      "Sayfanın temel yapısını kurmak ve bölümleri düzenlemek için kullanıyorum.",
  },
  {
    id: 4,
    name: "CSS",
    description:
      "Tasarımı ekrana dökmek, renkleri ayarlamak ve sayfa düzenini yapmak için kullanıyorum.",
  },
  {
    id: 5,
    name: "Git",
    description:
      "Projeyi kaydetmek, commit atmak ve GitHub'a göndermek için kullanıyorum.",
  },
  {
    id: 6,
    name: "Figma",
    description:
      "Tasarımı incelemek, renkleri ve sayfa yerleşimini anlamak için kullanıyorum.",
  },
];

export const projects = [
  {
    id: 1,
    araclar: ["React", "CSS", "Form"],
    github: "https://github.com/ademkutlu23-afk/Pizzaproje",
    live: "https://pizzaproje.vercel.app/",
  },
  {
  id: 2,
  araclar: ["React", "CSS", "useState"],
  github: "https://github.com/ademkutlu23-afk/patidose",
  live: "https://patidose.vercel.app/",
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

    projectTexts: [
      {
        id: 1,
        title: "Pizza Sipariş Projesi",
        description:
          "Pizza sipariş sayfası üzerinden form, seçimler ve toplam fiyat mantığını çalıştığım küçük bir React projesi.",
        githubText: "GitHub",
        liveText: "Canlı Site",
      },
      {
  id: 2,
  title: "PatiDose",
  description:
    "Evcil hayvanların aşı, iç parazit, dış parazit ve kontrol tarihlerini takip etmeye yarayan küçük bir React uygulaması.",
  githubText: "GitHub",
  liveText: "Canlı Site",
},
    ],

    contact: {
      title: "İletişim",
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

    projectTexts: [
      {
        id: 1,
        title: "Pizza Order Project",
        description:
          "A small React project where I practiced form inputs, selections and total price logic.",
        githubText: "GitHub",
        liveText: "Live Site",
      },
      {
  id: 2,
  title: "PatiDose",
  description:
    "A small React app for tracking pet vaccine, internal parasite, external parasite and check-up dates.",
  githubText: "GitHub",
  liveText: "Live Site",
},
    ],

    contact: {
      title: "Contact",
      description: "You can use the links below if you want to contact me.",
      emailText: "Email",
      githubText: "GitHub",
      linkedinText: "LinkedIn",
    },
  },
};