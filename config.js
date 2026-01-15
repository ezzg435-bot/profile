// ═══════════════════════════════════════════════════════════════
// 🎨 إعدادات الموقع - عدل هنا فقط
// ═══════════════════════════════════════════════════════════════

const PORTFOLIO_CONFIG = {
    
    // ═══════════════════════════════════════════════════════════════
    // 📝 المعلومات الشخصية
    // ═══════════════════════════════════════════════════════════════
    personalInfo: {
        name: "Lazy",
        title: "Web Developer",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus labore dolores esse. Odit similique doloribus tenetur doloremque, sunt commodi in ipsa repudiandae debitis deleniti blanditiis quibusdam quaerat neque asperiores ea.",
        profileImage: "main.jpg"
    },

    // ═══════════════════════════════════════════════════════════════
    // 🎮 إعدادات Discord Card
    // ═══════════════════════════════════════════════════════════════
    discord: {
        useLanyard: true,
        lanyardUserId: "1000711739031162910",
        
        // البيانات اليدوية (تظهر عند فشل API)
        username: "._idc",
        discriminator: "",
        banner: "linear-gradient(135deg, #8a2be2, #da70d6)",
        bio: "Bot Developer • Designer • Gamer",
        aboutMe: "Passionate developer specializing in Discord bots and web development. Love creating interactive experiences and building cool stuff!",
        
        badges: [
            { icon: "👑", tooltip: "Server Owner" },
            { icon: "⚡", tooltip: "Early Supporter" },
            { icon: "💎", tooltip: "Nitro" },
            { icon: "🛠️", tooltip: "Developer" }
        ],
        
        roles: [
            { name: "Owner", color: "#ff0000" },
            { name: "Developer", color: "#8a2be2" },
            { name: "Designer", color: "#00d4ff" }
        ],
        
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
    // 📧 إعدادات الإيميل
    // ═══════════════════════════════════════════════════════════════
    email: {
        useMailto: true,
        recipientEmail: "alikalbouneh268@gmail.com",
        formSubmitEmail: "alikalbouneh268@gmail.com",
        
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

document.addEventListener('DOMContentLoaded', function() {
    
    // تحديث المعلومات الشخصية
    const nameElements = document.querySelectorAll('.hero-content h1 .highlight');
    nameElements.forEach(el => el.textContent = PORTFOLIO_CONFIG.personalInfo.name);
    
    const titleElements = document.querySelectorAll('.hero-content h2 .highlight');
    titleElements.forEach(el => el.textContent = PORTFOLIO_CONFIG.personalInfo.title);
    
    const descElements = document.querySelectorAll('.hero-content p');
    if(descElements[0]) descElements[0].textContent = PORTFOLIO_CONFIG.personalInfo.description;
    
    const profileImg = document.querySelector('.profile-image');
    
    // ═══════════════════════════════════════════════════════════════
    // 🎮 Discord Card Integration
    // ═══════════════════════════════════════════════════════════════
    
    if(PORTFOLIO_CONFIG.discord) {
        
        // دالة لتحديث Discord Card
        async function updateDiscordCard(apiData) {
            const config = PORTFOLIO_CONFIG.discord;
            
            // تحضير البيانات - إما من API أو من الإعدادات اليدوية
            const data = {
                id: apiData?.discord_user?.id || null,
                username: apiData?.discord_user?.username || config.username,
                global_name: apiData?.discord_user?.global_name || config.username,
                discriminator: apiData?.discord_user?.discriminator || config.discriminator,
                avatar: apiData?.discord_user?.avatar || null,
                banner: apiData?.discord_user?.banner || null,
                banner_color: apiData?.discord_user?.banner_color || null,
                discord_status: apiData?.discord_status || 'offline',
                fallback: config
            };
            
            // البانر
            const banner = document.getElementById('discordBanner');
            if(banner) {
                if(data.banner) {
                    const bannerExt = data.banner.startsWith('a_') ? 'gif' : 'png';
                    banner.style.backgroundImage = `url(https://cdn.discordapp.com/banners/${data.id}/${data.banner}.${bannerExt}?size=600)`;
                    banner.style.backgroundSize = 'cover';
                    banner.style.backgroundPosition = 'center';
                } else if(data.banner_color) {
                    banner.style.background = data.banner_color;
                } else {
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
            let avatarUrl = 'main.jpg';
            
            if(data.avatar && data.id) {
                const avatarExt = data.avatar.startsWith('a_') ? 'gif' : 'png';
                avatarUrl = `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.${avatarExt}?size=128`;
            }
            
            if(avatar) avatar.src = avatarUrl;
            if(profileImg) profileImg.src = avatarUrl;
            
            // الحالة (Status)
            const status = document.querySelector('.discord-status');
            if(status) {
                const statusColors = {
                    online: '#23a559',
                    idle: '#f0b232',
                    dnd: '#f23f43',
                    offline: '#80848e'
                };
                status.style.background = statusColors[data.discord_status] || statusColors.offline;
            }
            
            // اسم المستخدم
            const username = document.getElementById('discordUsername');
            if(username) username.textContent = data.global_name || data.username;
            
            const discriminator = document.getElementById('discordDiscriminator');
            if(discriminator) {
                if(data.discriminator && data.discriminator !== '0') {
                    discriminator.textContent = '#' + data.discriminator;
                    discriminator.style.display = 'inline';
                } else {
                    discriminator.style.display = 'none';
                }
            }
            
            // البايو
            const bio = document.getElementById('discordBio');
            if(bio) bio.textContent = config.bio;
            
            // About Me
            const about = document.getElementById('discordAbout');
            if(about) about.textContent = config.aboutMe;
            
            // الشارات
            const badgesContainer = document.getElementById('discordBadges');
            if(badgesContainer) {
                badgesContainer.innerHTML = '';
                config.badges.forEach(badge => {
                    const badgeEl = document.createElement('div');
                    badgeEl.className = 'discord-badge';
                    badgeEl.textContent = badge.icon;
                    badgeEl.title = badge.tooltip;
                    badgesContainer.appendChild(badgeEl);
                });
            }
            
            // الأدوار
            const rolesContainer = document.getElementById('discordRoles');
            const rolesSection = document.getElementById('rolesSection');
            if(rolesContainer && config.roles.length > 0) {
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
                    rolesContainer.appendChild(roleEl);
                });
            } else if(rolesSection) {
                rolesSection.style.display = 'none';
            }
            
            // تاريخ الانضمام
            const memberSince = document.getElementById('discordMemberSince');
            if(memberSince) memberSince.textContent = config.memberSince;
            
            // رسالة الحالة
            const statusEl = document.getElementById('discordApiStatus');
            if(statusEl) {
                if(data.id) {
                    statusEl.className = 'discord-api-status success';
                    statusEl.innerHTML = '✅ Live data from Discord API';
                } else {
                    statusEl.className = 'discord-api-status error';
                    statusEl.innerHTML = '⚠️ Using fallback data. Check Discord User ID in config.js';
                }
            }
        }
        
        // جلب البيانات من Lanyard API
        async function fetchLanyardData() {
            try {
                const userId = PORTFOLIO_CONFIG.discord.lanyardUserId;
                console.log('🎮 Fetching Discord data from Lanyard API...');
                
                const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
                
                if(!response.ok) {
                    console.warn('⚠️ Lanyard API request failed:', response.status);
                    return null;
                }
                
                const result = await response.json();
                
                if(result.success && result.data) {
                    console.log('✅ Successfully fetched Discord data!');
                    console.log('📊 Data:', result.data);
                    return result.data;
                } else {
                    console.warn('⚠️ Lanyard API returned unsuccessful response');
                    return null;
                }
            } catch(error) {
                console.warn('⚠️ Error fetching from Lanyard API:', error.message);
                return null;
            }
        }
        
        // تحميل البيانات
        if(PORTFOLIO_CONFIG.discord.useLanyard && PORTFOLIO_CONFIG.discord.lanyardUserId) {
            fetchLanyardData().then(apiData => {
                updateDiscordCard(apiData);
            });
        } else {
            updateDiscordCard(null);
        }
    }
    
    // ═══════════════════════════════════════════════════════════════
    // 🔗 تحديث روابط السوشيال ميديا
    // ═══════════════════════════════════════════════════════════════
    
    const socialLinks = document.querySelectorAll('.social-links a');
    const socialOrder = ['instagram', 'discord', 'github', 'youtube'];
    socialLinks.forEach((link, index) => {
        const platform = socialOrder[index];
        if(platform && PORTFOLIO_CONFIG.socialLinks[platform]) {
            link.href = PORTFOLIO_CONFIG.socialLinks[platform];
        }
    });
    
    // ═══════════════════════════════════════════════════════════════
    // 📋 تحديث المحتوى
    // ═══════════════════════════════════════════════════════════════
    
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
    
    // ═══════════════════════════════════════════════════════════════
    // 📧 معالجة نموذج الاتصال
    // ═══════════════════════════════════════════════════════════════
    
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if(PORTFOLIO_CONFIG.email.useMailto) {
                const subject = `رسالة من ${name}`;
                const body = `الاسم: ${name}%0D%0Aالإيميل: ${email}%0D%0A%0D%0Aالرسالة:%0D%0A${message}`;
                window.location.href = `mailto:${PORTFOLIO_CONFIG.email.recipientEmail}?subject=${subject}&body=${body}`;
                alert('سيتم فتح برنامج البريد الإلكتروني... ✉️');
            } else {
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
    
    // ═══════════════════════════════════════════════════════════════
    // 🔄 Smooth Scrolling
    // ═══════════════════════════════════════════════════════════════
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
