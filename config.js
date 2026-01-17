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
        avatar: "https://media.discordapp.net/attachments/1369976044374855753/1461506633615016061/038994609347b871e2ef5ff10346903f.jpg?ex=696cc7de&is=696b765e&hm=2895c6f21458a91148a35c8ab84ee5b9e7d922501630b32fe2f1e7240cf3b05a&=&format=webp&width=570&height=570",
        banner: "https://media.discordapp.net/attachments/1369976044374855753/1461506633900232704/9bfc635a9bbfd6858c9b1d20cf3073a2.gif?ex=696cc7df&is=696b765f&hm=06ea149d26b0818347d1ecfb0945bb0bb8343957c2c08d3b7012196e5eb7c904&=&width=605&height=405",
        bio: `C/:Users/Lazy
╠ Insta : ezz44210
   ╠ Bots : Na7la / Valhalla soon..
      ╠ Na7la Shop Developer
         ╠ https://lazyidc.qzz.io
             ╚ Advance Developer`,
        memberSince: "Jul 24, 2022",
        status: "dnd",
        primaryColor: "#231646",
        accentColor: "#09030e",
        badges: [
    { src: "https://discordresources.com/img/subscriptions/bronze.svg", title: "nitro" },
    { src: "https://cdn3.emoji.gg/emojis/33499-hypesquadbalance.png", title: "HypeSquad" },
    { src: "https://discordresources.com/img/boosts/discordboost1.svg", title: "boost" },
    { src: "https://discordresources.com/img/username.png", title: "Originally Known as" },
    { src: "https://cdn3.emoji.gg/emojis/4709-quest-badge.png", title: "quest" },
    { src: "https://cdn.discordapp.com/emojis/1404466478601998366.webp?size=128", title: "orbs" },
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // 📧 إعدادات الإيميل
    // ═══════════════════════════════════════════════════════════════
    email: {
        useMailto: true,
        recipientEmail: "alikalbouneh268@gmail.com",
        formSubmitEmail: "84280d3c6773682edc7339e16490b02d",
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
        list: "Web Development • Discord Bot Development • Graphic Design • Branding & Identity • UI/UX Design • Creative Solutions"
    },

    // ═══════════════════════════════════════════════════════════════
    // 👤 قسم About Me
    // ═══════════════════════════════════════════════════════════════
    about: {
        title: "Let me introduce myself",
        paragraph1: "I have a strong passion for design and development. I specialize in Discord bots and modern web development with focus on elegant, professional user interfaces.",
        paragraph2: "I also provide branding services, logo design, business card design, photo editing and various graphic design solutions.",
        stats: {
            projects: "250+",
            clients: "290+",
            satisfaction: "95%"
        }
    },

    // ═══════════════════════════════════════════════════════════════
    // 🎨 الألوان
    // ═══════════════════════════════════════════════════════════════
    colors: {
        purpleMain: "#8a2be2",
        purpleLight: "#da70d6",
        purpleDark: "#6a1bb2"
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
            
            // Close mobile menu on mobile
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('active');
            }
        });
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileMenuToggle && sidebar) {
        mobileMenuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
        
        // Close sidebar when clicking outside
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            }
        });
    }
    
    // Hire Me button - navigate to contact
    const hireBtn = document.querySelector('.hire-me-btn');
    if (hireBtn) {
        hireBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Find contact card index
            const contactCard = document.getElementById('contact');
            const contactIndex = Array.from(contentCards).indexOf(contactCard);
            
            // Remove active from all
            sidebarLinks.forEach(l => l.classList.remove('active'));
            contentCards.forEach(c => c.classList.remove('active'));
            
            // Show contact card
            if (contactIndex >= 0 && sidebarLinks[contactIndex + 1]) {
                sidebarLinks[contactIndex + 1].classList.add('active');
            }
            if (contactCard) {
                contactCard.classList.add('active');
            }
            
            // Close mobile menu
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('active');
            }
        });
    }
    
    // Handle all #contact links
    document.querySelectorAll('a[href="#contact"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contactCard = document.getElementById('contact');
            const contactIndex = Array.from(contentCards).indexOf(contactCard);
            
            sidebarLinks.forEach(l => l.classList.remove('active'));
            contentCards.forEach(c => c.classList.remove('active'));
            
            if (contactIndex >= 0 && sidebarLinks[contactIndex + 1]) {
                sidebarLinks[contactIndex + 1].classList.add('active');
            }
            if (contactCard) {
                contactCard.classList.add('active');
            }
            
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('active');
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
    
    // تحديث التاق
    const tag = document.getElementById('discord-tag');
    if (tag && config.tag) {
        tag.textContent = config.tag;
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
    
    // ═══════════════════════════════════════════════════════════════
    // 🎯 Custom Tooltip System للـ Service و Project Cards
    // ═══════════════════════════════════════════════════════════════
    initCustomTooltips();
});

// دالة تهيئة الـ Custom Tooltips
function initCustomTooltips() {
    const cards = document.querySelectorAll('[data-title]');
    let tooltip = null;
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const title = card.getAttribute('data-title');
            if (!title) return;
            
            // حذف أي tooltip قديم
            if (tooltip) tooltip.remove();
            
            // إنشاء tooltip جديد
            tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            tooltip.textContent = title;
            tooltip.style.cssText = `
                position: fixed;
                background: rgba(35, 22, 70, 0.95);
                color: #da70d6;
                padding: 8px 16px;
                border-radius: 8px;
                border: 1px solid rgba(218,112,214,0.5);
                font-size: 12px;
                font-weight: 600;
                white-space: nowrap;
                pointer-events: none;
                z-index: 10000;
                box-shadow: 0 0 15px rgba(138,43,226,0.3);
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            document.body.appendChild(tooltip);
            
            // تأخير صغير لتفعيل الـ transition
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 10);
            
            // تحديث موقع الـ tooltip مع حركة الماوس
            const updateTooltipPosition = (event) => {
                if (tooltip) {
                    tooltip.style.left = (event.clientX + 10) + 'px';
                    tooltip.style.top = (event.clientY + 10) + 'px';
                }
            };
            
            card.addEventListener('mousemove', updateTooltipPosition);
            
            card.addEventListener('mouseleave', () => {
                if (tooltip) {
                    tooltip.style.opacity = '0';
                    setTimeout(() => {
                        if (tooltip) {
                            tooltip.remove();
                            tooltip = null;
                        }
                    }, 300);
                }
                card.removeEventListener('mousemove', updateTooltipPosition);
            });
        });
    });
}



const easterEgg = document.getElementById('easter-egg');
const commandInput = document.getElementById('command-input');
const terminalOutput = document.getElementById('terminal-output');

document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'l') {
    easterEgg.style.display = 'block';
    commandInput.focus();
  }
});

commandInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const cmd = e.target.value.trim().toLowerCase();
    terminalOutput.innerHTML += `\n> ${cmd}\n`;  // يضيف الأمر في الـ output

    if (cmd === '!help') {
      terminalOutput.innerHTML += 'Available commands: !info, !bots, !secret\n';
    } else if (cmd === '!info') {
      terminalOutput.innerHTML += 'Developer: ϟ〢𝑳á𝒛𝒚 | Specializing in Discord Bots & Web\n';
    } else if (cmd === '!secret') {
      terminalOutput.innerHTML += 'You found the easter egg! 🎉 Secret link: https://your-discord-server\n';
    } else {
      terminalOutput.innerHTML += 'Unknown command. Try !help\n';
    }

    e.target.value = '';  // يمسح الـ input
    terminalOutput.scrollTop = terminalOutput.scrollHeight;  // يسكرول لتحت
  }
});

// لإغلاق الـ terminal: اضغط Esc
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && easterEgg.style.display === 'block') {
    easterEgg.style.display = 'none';
  }
});


document.querySelectorAll('.service-card, .project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;  // حساب الإمالة
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    card.style.transform = `rotateY(${x}deg) rotateX(${y * -1}deg) translateZ(20px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0px)';
  });
});