// ═══════════════════════════════════════════════════════════════
// 🎨 إعدادات الموقع - عدل هنا فقط
// ═══════════════════════════════════════════════════════════════

const PORTFOLIO_CONFIG = {
    
    // ═══════════════════════════════════════════════════════════════
    // 📝 المعلومات الشخصية
    // ═══════════════════════════════════════════════════════════════
    personalInfo: {
        name: "ϟ〢𝑳á𝒛𝒚",                           // اسمك
        title: "Bots & Web Developer",                 // المسمى الوظيفي
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus labore dolores esse. Odit similique doloribus tenetur doloremque, sunt commodi in ipsa repudiandae debitis deleniti blanditiis quibusdam quaerat neque asperiores ea.",
        profileImage: "main.jpg"                // اسم ملف الصورة
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
    // 💬 إعدادات Discord Card - عدل هنا
    // ═══════════════════════════════════════════════════════════════
    discordCard: {
        displayName: "ϟ〢𝑳á𝒛𝒚",                    // اسم العرض
        avatar: "https://cdn.discordapp.com/attachments/1369976044374855753/1461506633615016061/038994609347b871e2ef5ff10346903f.jpg?ex=696acd9e&is=69697c1e&hm=52682461dc8087a01571adbe246f6768d7c451880a8535a121560d323f4e8521&",
        banner: "https://cdn.discordapp.com/attachments/1369976044374855753/1461506633900232704/9bfc635a9bbfd6858c9b1d20cf3073a2.gif?ex=696acd9f&is=69697c1f&hm=72d4d5cecfbf81672efdcc2289a94d6ef66e81df3d185336cfd00692128f9115&",
        bio: `**C/:Users/Lazy
╠ Insta : ezz44210
   ╠ Bots : Na7la / Valhalla soon..
      ╠ Na7la Shop Developer
         ╠ https://lazyidc.qzz.io
             ╚ Advance Developer
**`,                                // البايو - اكتب النص هنا
        memberSince: "Jul 24,2022",                        // تاريخ الانضمام - مثل: "Jan 1, 2020"
        status: "dnd",                       // الحالة: online, idle, dnd, offline
        // ألوان الخلفية
        primaryColor: "#231646",             // اللون الأساسي (الخلفية)
        accentColor: "#09030e",              // اللون الثانوي (التدرج)
        // الشارات - ضع روابط صور الشارات هنا
        badges: [
    { src: "https://discordresources.com/img/subscriptions/bronze.svg", title: "nitro" },
    { src: "https://discordresources.com/img/hypesquadbalance.svg", title: "HypeSquad" },
    { src: "https://discordresources.com/img/boosts/discordboost1.svg", title: "boost" },
    { src: "https://discordresources.com/img/username.png", title: "Originally Known as" },
    { src: "https://cdn3.emoji.gg/emojis/4709-quest-badge.png", title: "quest" },
    { src: "https://cdn3.emoji.gg/emojis/51616-orbs-animated.gif", title: "orbs" },
    // أضف المزيد...
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // 📧 إعدادات الإيميل للـ Contact Form
    // ═══════════════════════════════════════════════════════════════
    email: {
        // الطريقة 1: إرسال مباشر عبر mailto (سهلة لكن محدودة)
        useMailto: true,
        recipientEmail: "alikalbouneh268@gmail.com",
        
        // الطريقة 2: استخدام خدمة خارجية مثل FormSubmit أو EmailJS
        // إذا تبي تستخدم FormSubmit، حط الإيميل هنا وغير useMailto إلى false
        formSubmitEmail: "alikalbouneh268@gmail.com",  // FormSubmit.co
        
        // الطريقة 3: EmailJS (أكثر احترافية)
        // سجل في emailjs.com وحط المعلومات هنا
        emailJS: {
            serviceID: "service_h4pze6l",
            templateID: "template_4m1ow82",
            publicKey: "9yHG4h5JQ3gs7i1QA"
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 💼 الخدمات
    // ═══════════════════════════════════════════════════════════════
    services: {
        title: "My Expertise",
        list: "Web Development • Graphic Design • Branding & Identity • User Research • Creative Solutions • Digital Marketing"
    },

    // ═══════════════════════════════════════════════════════════════
    // 👤 قسم About Me
    // ═══════════════════════════════════════════════════════════════
    about: {
        title: "Let me introduce myself",
        paragraph1: "I have a strong passion for design and development. I specialize in Design and my passion is all about building elegant and professional user interfaces and websites.",
        paragraph2: "I also do branding and identity design such as logo design, letterhead and business card, along with photo editing, image cropping and other graphic design services.",
        
        // الإحصائيات
        stats: {
            projects: "250+",
            clients: "290+",
            satisfaction: "95%"
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 🎨 الألوان (اختياري - إذا تبي تغير الألوان)
    // ═══════════════════════════════════════════════════════════════
    colors: {
        purpleMain: "#8a2be2",      // اللون البنفسجي الرئيسي
        purpleLight: "#da70d6",     // البنفسجي الفاتح
        purpleDark: "#6a1bb2"       // البنفسجي الغامق
    }
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
    
    // معالجة نموذج الاتصال
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if(PORTFOLIO_CONFIG.email.useMailto) {
                // الطريقة 1: mailto (يفتح برنامج الإيميل)
                const subject = `رسالة من ${name}`;
                const body = `الاسم: ${name}%0D%0Aالإيميل: ${email}%0D%0A%0D%0Aالرسالة:%0D%0A${message}`;
                window.location.href = `mailto:${PORTFOLIO_CONFIG.email.recipientEmail}?subject=${subject}&body=${body}`;
                alert('سيتم فتح برنامج البريد الإلكتروني... ✉️');
            } else {
                // الطريقة 2: FormSubmit
                const formData = new FormData();
                formData.append('name', name);
                formData.append('email', email);
                formData.append('message', message);
                
                fetch(`https://formsubmit.co/${PORTFOLIO_CONFIG.email.formSubmitEmail}`, {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    alert('شكراً! تم إرسال رسالتك بنجاح!');
                    contactForm.reset();
                })
                .catch(error => {
                    alert('عذراً، حدث خطأ في الإرسال. حاول مرة أخرى.');
                });
            }
        });
    }
    
    // Smooth scrolling & Navigation
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const contentCards = document.querySelectorAll('.content-card');
    
    // Show first card by default
    if (contentCards[0]) {
        contentCards[0].classList.add('active');
    }
    
    sidebarLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and cards
            sidebarLinks.forEach(l => l.classList.remove('active'));
            contentCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked link and corresponding card
            this.classList.add('active');
            if (contentCards[index]) {
                contentCards[index].classList.add('active');
            }
        });
    });
    
    // ═══════════════════════════════════════════════════════════════
    // ✨ إنشاء الجزيئات المتحركة (Particles)
    // ═══════════════════════════════════════════════════════════════
    createParticles();
    
    // ═══════════════════════════════════════════════════════════════
    // 💬 تحديث Discord Card
    // ═══════════════════════════════════════════════════════════════
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
        
        // موقع عشوائي
        particle.style.left = Math.random() * 100 + '%';
        
        // حجم عشوائي
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // تأخير عشوائي
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        // لون عشوائي بين البنفسجي والوردي
        const hue = Math.random() > 0.5 ? '270' : '300';
        particle.style.background = `hsl(${hue}, 70%, 60%)`;
        
        particlesContainer.appendChild(particle);
    }
}

// دالة تحديث Discord Card
function updateDiscordCard() {
    const config = PORTFOLIO_CONFIG.discordCard;
    if (!config) return;
    
    // تحديث الاسم
    const displayName = document.getElementById('discord-displayname');
    if (displayName && config.displayName) {
        displayName.textContent = config.displayName;
    }
    
    // تحديث الأفاتار
    const avatar = document.getElementById('discord-avatar-img');
    if (avatar && config.avatar) {
        avatar.src = config.avatar;
    }
    
    // تحديث البانر
    const banner = document.getElementById('discord-banner-img');
    if (banner && config.banner) {
        banner.src = config.banner;
    }
    
    // تحديث البايو - مع دعم السطور الجديدة
    const bio = document.getElementById('discord-bio');
    if (bio && config.bio) {
        // تحويل السطور الجديدة إلى <br> وإزالة ** 
        let formattedBio = config.bio
            .replace(/\*\*/g, '')
            .replace(/\n/g, '<br>');
        bio.innerHTML = formattedBio;
    }
    
    // تحديث تاريخ الانضمام
    const date = document.getElementById('discord-date');
    if (date && config.memberSince) {
        date.textContent = config.memberSince;
    }
    
    // تحديث الحالة
    const statusDot = document.querySelector('.discord-status');
    if (statusDot && config.status) {
        statusDot.className = 'discord-status ' + config.status;
    }
    
    // تحديث ألوان الخلفية
    const cardBody = document.querySelector('.discord-card-body');
    if (cardBody && config.primaryColor && config.accentColor) {
        cardBody.style.background = `linear-gradient(180deg, ${config.accentColor}, ${config.primaryColor})`;
    }
    
    // تحديث لون حدود الأفاتار
    const avatarEl = document.querySelector('.discord-avatar');
    if (avatarEl && config.accentColor) {
        avatarEl.style.borderColor = config.accentColor;
    }
    
    // تحديث الشارات
    const badgesContainer = document.getElementById('discord-badges');
    if (badgesContainer && config.badges && config.badges.length > 0) {
        badgesContainer.innerHTML = '';
        config.badges.forEach(badge => {
            const badgeImg = document.createElement('img');
            badgeImg.className = 'discord-badge-img bounce-hover';
            badgeImg.src = badge.src;
            badgeImg.alt = badge.title || 'Badge';
            badgeImg.title = badge.title || 'Badge';
            badgesContainer.appendChild(badgeImg);
        });
    }
    
    // تحديث placeholder الرسالة
    const messageInput = document.querySelector('.discord-message-box input');
    if (messageInput && config.displayName) {
        messageInput.placeholder = `Message @${config.displayName}`;
    }
}
