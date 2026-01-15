// ═══════════════════════════════════════════════════════════════
// 🎨 إعدادات الموقع - عدل هنا فقط
// ═══════════════════════════════════════════════════════════════

const PORTFOLIO_CONFIG = {
    
    // ═══════════════════════════════════════════════════════════════
    // 📝 المعلومات الشخصية
    // ═══════════════════════════════════════════════════════════════
    personalInfo: {
        name: "Lazy",                           // اسمك
        title: "Web Developer",                 // المسمى الوظيفي
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus labore dolores esse. Odit similique doloribus tenetur doloremque, sunt commodi in ipsa repudiandae debitis deleniti blanditiis quibusdam quaerat neque asperiores ea.",
        profileImage: "main.jpg"                // اسم ملف الصورة
    },

    // ═══════════════════════════════════════════════════════════════
    // 🎮 إعدادات Discord Card
    // ═══════════════════════════════════════════════════════════════
    discord: {
        // البيانات اليدوية فقط
        username: "._idc",
        discriminator: "",
        
        // صورة الملف الشخصي
        profileImage: "main.jpg",
        
        // البنر
        banner: "linear-gradient(135deg, #8a2be2, #da70d6)",
        
        // البايو والوصف
        bio: "Bot Developer • Designer • Gamer",
        aboutMe: "Passionate developer specializing in Discord bots and web development. Love creating interactive experiences and building cool stuff!",
        
        // الشارات
        badges: [
            { icon: "👑", tooltip: "Server Owner" },
            { icon: "⚡", tooltip: "Early Supporter" },
            { icon: "💎", tooltip: "Nitro" },
            { icon: "🛠️", tooltip: "Developer" }
        ],
        
        // الأدوار
        roles: [
            { name: "Owner", color: "#ff0000" },
            { name: "Developer", color: "#8a2be2" },
            { name: "Designer", color: "#00d4ff" }
        ],
        
        // تاريخ الانضمام
        memberSince: "Jan 15, 2020"
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

// دالة لتحديث Discord Card
async function updateDiscordCard() {
    const config = PORTFOLIO_CONFIG.discord;
    
    // البانر
    const banner = document.getElementById('discordBanner');
    if(banner) {
        if(config.banner) {
            if(config.banner.includes('url')) {
                banner.style.backgroundImage = config.banner;
                banner.style.backgroundSize = 'cover';
                banner.style.backgroundPosition = 'center';
            } else {
                banner.style.background = config.banner;
            }
        }
    }
    
    // الأفاتار
    const avatar = document.getElementById('discordAvatar');
    const profileImg = document.querySelector('.profile-image');
    if(avatar) avatar.src = config.profileImage || 'main.jpg';
    if(profileImg) profileImg.src = config.profileImage || 'main.jpg';
    
    // الحالة (Status) - ثابتة
    const status = document.querySelector('.discord-status');
    if(status) {
        status.style.background = '#23a559'; // حالة Online ثابتة
    }
    
    // اسم المستخدم
    const username = document.getElementById('discordUsername');
    if(username) username.textContent = config.username || 'Username';
    
    const discriminator = document.getElementById('discordDiscriminator');
    if(discriminator) {
        discriminator.style.display = 'none';
    }
    
    // البايو
    const bio = document.getElementById('discordBio');
    if(bio) bio.textContent = config.bio || 'Your bio here';
    
    // About Me
    const about = document.getElementById('discordAbout');
    if(about) about.textContent = config.aboutMe || 'About me section';
    
    // الشارات
    const badgesContainer = document.getElementById('discordBadges');
    if(badgesContainer) {
        badgesContainer.innerHTML = '';
        config.badges.forEach(badge => {
            const badgeEl = document.createElement('div');
            badgeEl.className = 'discord-badge';
            badgeEl.textContent = badge.icon;
            badgeEl.title = badge.tooltip;
            
            // تأثير عند التمرير
            badgeEl.addEventListener('mouseenter', () => {
                badgeEl.style.transform = 'scale(1.2) rotate(5deg)';
                badgeEl.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.5)';
            });
            badgeEl.addEventListener('mouseleave', () => {
                badgeEl.style.transform = 'scale(1)';
                badgeEl.style.boxShadow = 'none';
            });
            
            badgesContainer.appendChild(badgeEl);
        });
    }
    
    // الأدوار
    const rolesContainer = document.getElementById('discordRoles');
    const rolesSection = document.getElementById('rolesSection');
    if(rolesContainer) {
        if(config.roles.length > 0) {
            rolesContainer.innerHTML = '';
            config.roles.forEach(role => {
                const roleEl = document.createElement('div');
                roleEl.className = 'discord-role';
                roleEl.style.background = role.color + '20';
                roleEl.style.border = '1px solid ' + role.color;
                roleEl.innerHTML = `
                    <div class="discord-role-dot" style="background: ${role.color}"></div>
                    <span style="color: ${role.color}">${role.name}</span>
                `;
                
                // تأثير عند التمرير
                roleEl.addEventListener('mouseenter', () => {
                    roleEl.style.transform = 'translateY(-3px)';
                    roleEl.style.boxShadow = '0 5px 15px rgba(138, 43, 226, 0.3)';
                });
                roleEl.addEventListener('mouseleave', () => {
                    roleEl.style.transform = 'translateY(0)';
                    roleEl.style.boxShadow = 'none';
                });
                
                rolesContainer.appendChild(roleEl);
            });
        } else {
            rolesSection.style.display = 'none';
        }
    }
    
    // تاريخ الانضمام
    const memberSince = document.getElementById('discordMemberSince');
    if(memberSince) {
        memberSince.textContent = config.memberSince || 'Unknown';
    }
    
    // إخفاء رسالة الحالة API
    const statusEl = document.getElementById('discordApiStatus');
    if(statusEl) {
        statusEl.style.display = 'none';
    }
}

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
    
    // تحديث Discord Card
    if(PORTFOLIO_CONFIG.discord) {
        updateDiscordCard();
    }
    
    // تحديث روابط السوشيال ميديا
    const socialLinks = document.querySelectorAll('.social-links a');
    const socialOrder = ['instagram', 'discord', 'github', 'youtube'];
    socialLinks.forEach((link, index) => {
        const platform = socialOrder[index];
        if(platform && PORTFOLIO_CONFIG.socialLinks[platform]) {
            link.href = PORTFOLIO_CONFIG.socialLinks[platform];
            link.target = "_blank"; // فتح الرابط في تبويب جديد
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
                    alert('شكراً! تم إرسال رسالتك بنجاح! 🎉');
                    contactForm.reset();
                })
                .catch(error => {
                    alert('عذراً، حدث خطأ في الإرسال. حاول مرة أخرى.');
                });
            }
        });
    }
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // إضافة تأثيرات تفاعلية
    addInteractionEffects();
});

// دالة لإضافة تأثيرات تفاعلية
function addInteractionEffects() {
    // تأثيرات للأزرار
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.classList.add('btn-pulse');
        
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // تأثيرات للبطاقات
    const cards = document.querySelectorAll('.discord-card, .services-list, .stat-item');
    cards.forEach(card => {
        card.classList.add('card-hover');
    });
    
    // تأثيرات للشكل العائم الجديد
    const floatingShapes = document.querySelector('.floating-shapes');
    if(floatingShapes) {
        const shape4 = document.createElement('div');
        shape4.className = 'shape shape-4';
        floatingShapes.appendChild(shape4);
    }
    
    // تأثيرات عند التمرير
    const revealElements = document.querySelectorAll('.section-title, .section-subtitle, .services-list, .discord-card, .about-text, .stat-item');
    
    const revealOnScroll = function() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // تنفيذ مرة أولى عند التحميل
}
