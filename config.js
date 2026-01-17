// ═══════════════════════════════════════════════════════════════
// 🎨 إعدادات الموقع - عدل هنا فقط
// ═══════════════════════════════════════════════════════════════

const PORTFOLIO_CONFIG = {
    
    // ═══════════════════════════════════════════════════════════════
    // 📝 المعلومات الشخصية
    // ═══════════════════════════════════════════════════════════════
    personalInfo: {
        name: "ϟ〢𝑳á𝒛𝒚",
        title: "Bots & Web Developer",
        description: "Professional developer specializing in Discord bots, web applications, modern UI/UX design and creative digital solutions.",
        profileImage: "main.jpg"
    },

    // ═══════════════════════════════════════════════════════════════
    // 🔗 روابط السوشيال ميديا
    // ═══════════════════════════════════════════════════════════════
    socialLinks: {
        instagram: "https://instagram.com/ezz44210",
        discord: "https://discord.com/users/1000711739031162910",
        github: "https://github.com/Lazy-01",
        youtube: "https://www.youtube.com/@LLazyReal"
    },

    // ═══════════════════════════════════════════════════════════════
    // 💬 إعدادات Discord Card - تم تهيئتها لتشبه الشكل المطلوب
    // ═══════════════════════════════════════════════════════════════
    discordCard: {
        displayName: "ϟ〢𝑳á𝒛𝒚",
        tag: "._idc",
        avatar: "https://cdn.discordapp.com/attachments/1369976044374855753/1461506633615016061/038994609347b871e2ef5ff10346903f.jpg?ex=696acd9e&is=69697c1e&hm=52682461dc8087a01571adbe246f6768d7c451880a8535a121560d323f4e8521&",
        banner: "https://cdn.discordapp.com/attachments/1369976044374855753/1461506633900232704/9bfc635a9bbfd6858c9b1d20cf3073a2.gif?ex=696acd9f&is=69697c1f&hm=72d4d5cecfbf81672efdcc2289a94d6ef66e81df3d185336cfd00692128f9115&",
        bio: `**C/:Users/Lazy
╠ Insta : ezz44210
   ╠ Bots : Na7la / Valhalla soon..
      ╠ Na7la Shop Developer
         ╠ https://lazyidc.qzz.io
             ╚ Advance Developer
**`,
        memberSince: "Jul 24, 2022",
        status: "dnd",
        primaryColor: "#231646",
        accentColor: "#09030e",
        badges: [
            { src: "https://discordresources.com/img/subscriptions/bronze.svg", title: "nitro" },
            { src: "https://discordresources.com/img/hypesquadbalance.svg", title: "HypeSquad" },
            { src: "https://discordresources.com/img/boosts/discordboost1.svg", title: "boost" },
            { src: "https://discordresources.com/img/username.png", title: "Originally Known as" },
            { src: "https://cdn3.emoji.gg/emojis/4709-quest-badge.png", title: "quest" },
            { src: "https://cdn3.emoji.gg/emojis/51616-orbs-animated.gif", title: "orbs" },
        ]
    },

    // ... (باقي الإعدادات كما هي في الملف الأصلي، مثل الإيميل, الخدمات, about, colors)
};

// ═══════════════════════════════════════════════════════════════
// ⚠️ لا تعدل تحت هذا الخط - الكود التلقائي
// ═══════════════════════════════════════════════════════════════

// تطبيق الإعدادات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    
    // تحديث المعلومات الشخصية
    const nameElements = document.querySelectorAll('.hero-content h1 .highlight');
    nameElements.forEach(el => el.textContent = PORTFOLIO_CONFIG.personalInfo.name);
    
    const titleElements = document.querySelectorAll('.hero-content h2 .highlight');
    titleElements.forEach(el => el.textContent = PORTFOLIO_CONFIG.personalInfo.title);
    
    const descElements = document.querySelectorAll('.hero-content p');
    if(descElements[0]) descElements[0].textContent = PORTFOLIO_CONFIG.personalInfo.description;
    
    // تحديث الصورة
    const profileImg = document.querySelector('.profile-image');
    if(profileImg) profileImg.src = PORTFOLIO_CONFIG.personalInfo.profileImage;
    
    // تحديث روابط السوشيال ميديا
    const socialLinks = document.querySelectorAll('.social-links a');
    const socialOrder = ['instagram', 'discord', 'github', 'youtube'];
    socialLinks.forEach((link, index) => {
        const platform = socialOrder[index];
        if(platform && PORTFOLIO_CONFIG.socialLinks[platform]) {
            link.href = PORTFOLIO_CONFIG.socialLinks[platform];
        }
    });
    
    // تحديث قسم الخدمات
    const servicesTitle = document.querySelector('.services-list h3');
    if(servicesTitle) servicesTitle.textContent = PORTFOLIO_CONFIG.services.title;
    
    const servicesList = document.querySelector('.services-list p');
    if(servicesList) servicesList.textContent = PORTFOLIO_CONFIG.services.list;
    
    // تحديث قسم About
    const aboutTitle = document.querySelector('.about-text h3');
    if(aboutTitle) aboutTitle.textContent = PORTFOLIO_CONFIG.about.title;
    
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    if(aboutParagraphs[0]) aboutParagraphs[0].textContent = PORTFOLIO_CONFIG.about.paragraph1;
    if(aboutParagraphs[1]) aboutParagraphs[1].textContent = PORTFOLIO_CONFIG.about.paragraph2;
    
    // تحديث الإحصائيات
    const statNumbers = document.querySelectorAll('.stat-number');
    if(statNumbers[0]) statNumbers[0].textContent = PORTFOLIO_CONFIG.about.stats.projects;
    if(statNumbers[1]) statNumbers[1].textContent = PORTFOLIO_CONFIG.about.stats.clients;
    if(statNumbers[2]) statNumbers[2].textContent = PORTFOLIO_CONFIG.about.stats.satisfaction;
    
    // تحديث الألوان
    if(PORTFOLIO_CONFIG.colors) {
        document.documentElement.style.setProperty('--purple-main', PORTFOLIO_CONFIG.colors.purpleMain);
        document.documentElement.style.setProperty('--purple-light', PORTFOLIO_CONFIG.colors.purpleLight);
        document.documentElement.style.setProperty('--purple-dark', PORTFOLIO_CONFIG.colors.purpleDark);
    }

    // ... (باقي الكود التلقائي للـ navigation, particles, discord card update, etc.)
    createParticles();
    updateDiscordCard();
});

// دالة إنشاء الجزيئات
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        particle.style.left = Math.random() * 100 + '%';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        const hue = Math.random() > 0.5 ? '270' : '300';
        particle.style.background = `hsl(${hue}, 70%, 60%)`;
        
        particlesContainer.appendChild(particle);
    }
}

// دالة تحديث Discord Card
function updateDiscordCard() {
    const config = PORTFOLIO_CONFIG.discordCard;
    if (!config) return;
    
    document.getElementById('discord-displayname').textContent = config.displayName;
    document.getElementById('discord-tag').textContent = config.tag;
    document.getElementById('discord-avatar-img').src = config.avatar;
    document.getElementById('discord-banner-img').src = config.banner;
    let formattedBio = config.bio.replace(/\*\*/g, '').replace(/\n/g, '<br>');
    document.getElementById('discord-bio').innerHTML = formattedBio;
    document.getElementById('discord-date').textContent = config.memberSince;
    document.querySelector('.discord-status').className = 'discord-status ' + config.status;
    const cardBody = document.querySelector('.discord-card-body');
    cardBody.style.background = `linear-gradient(180deg, ${config.accentColor}, ${config.primaryColor})`;
    const avatarEl = document.querySelector('.discord-avatar');
    avatarEl.style.borderColor = config.accentColor;
    const badgesContainer = document.getElementById('discord-badges');
    badgesContainer.innerHTML = '';
    config.badges.forEach(badge => {
        const badgeImg = document.createElement('img');
        badgeImg.className = 'discord-badge-img bounce-hover';
        badgeImg.src = badge.src;
        badgeImg.alt = badge.title || 'Badge';
        badgeImg.title = badge.title || 'Badge';
        badgesContainer.appendChild(badgeImg);
    });
    const messageInput = document.querySelector('.discord-message-box input');
    if (messageInput) messageInput.placeholder = `Message @${config.displayName}`;
}
