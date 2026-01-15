// ═══════════════════════════════════════════════════════════════
// 🎨 إعدادات الموقع - عدل هنا فقط
// ═══════════════════════════════════════════════════════════════

const PORTFOLIO_CONFIG = {
    
    // ═══════════════════════════════════════════════════════════════
    // 📝 المعلومات الشخصية
    // ═══════════════════════════════════════════════════════════════
    personalInfo: {
        name: "Lazy",                           // اسمك
        title: "Bots Developer",                 // المسمى الوظيفي
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus labore dolores esse. Odit similique doloribus tenetur doloremque, sunt commodi in ipsa repudiandae debitis deleniti blanditiis quibusdam quaerat neque asperiores ea.",
        profileImage: "main.jpg"                // اسم ملف الصورة
    },

    // ═══════════════════════════════════════════════════════════════
    // 🎮 إعدادات Discord Card (باستخدام API)
    // ═══════════════════════════════════════════════════════════════
    discord: {
        // استخدام API لجلب البيانات الحقيقية
        useAPI: true,                           // true = استخدام API | false = بيانات يدوية
        userId: "1000711739031162910",         // ضع Discord User ID هنا
        
        // أو استخدم Lanyard API (أسهل - يعرض الحالة المباشرة)
        useLanyard: true,                       // true = استخدام Lanyard
        lanyardUserId: "1000711739031162910",  // نفس الـ ID
        
        // بيانات احتياطية (في حال فشل API)
        fallback: {
            username: "Lazy",
            discriminator: "#1234",
            avatar: "main.jpg",
            banner: "linear-gradient(135deg, #8a2be2, #da70d6)",
            status: "online",
            bio: "Bot Developer • Designer • Gamer",
            aboutMe: "Passionate developer specializing in Discord bots and web development.",
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
        }
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
    
    // تحديث Discord Card
    if(PORTFOLIO_CONFIG.discord) {
        
        // دالة لتحديث Discord Card
        async function updateDiscordCard(data) {
            // البانر
            const banner = document.getElementById('discordBanner');
            if(banner) {
                if(data.banner) {
                    banner.style.backgroundImage = `url(https://cdn.discordapp.com/banners/${data.id}/${data.banner}.${data.banner.startsWith('a_') ? 'gif' : 'png'}?size=600)`;
                    banner.style.backgroundSize = 'cover';
                    banner.style.backgroundPosition = 'center';
                } else if(data.banner_color) {
                    banner.style.background = data.banner_color;
                } else if(data.fallback?.banner) {
                    if(data.fallback.banner.includes('url')) {
                        banner.style.backgroundImage = data.fallback.banner;
                        banner.style.backgroundSize = 'cover';
                        banner.style.backgroundPosition = 'center';
                    } else {
                        banner.style.background = data.fallback.banner;
                    }
                }
            }
            
            // الأفاتار
            const avatar = document.getElementById('discordAvatar');
            const avatarUrl = data.avatar 
                ? `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.${data.avatar.startsWith('a_') ? 'gif' : 'png'}?size=128`
                : data.fallback?.avatar || 'main.jpg';
            
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
                status.style.background = statusColors[data.discord_status || data.fallback?.status] || statusColors.offline;
            }
            
            // اسم المستخدم
            const username = document.getElementById('discordUsername');
            if(username) username.textContent = data.global_name || data.username || data.fallback?.username;
            
            const discriminator = document.getElementById('discordDiscriminator');
            if(discriminator) {
                if(data.discriminator && data.discriminator !== '0') {
                    discriminator.textContent = '#' + data.discriminator;
                } else {
                    discriminator.style.display = 'none';
                }
            }
            
            // البايو
            const bio = document.getElementById('discordBio');
            if(bio) bio.textContent = data.bio || data.fallback?.bio;
            
            // About Me
            const about = document.getElementById('discordAbout');
            if(about) about.textContent = data.aboutMe || data.fallback?.aboutMe;
            
            // الشارات
            const badgesContainer = document.getElementById('discordBadges');
            if(badgesContainer) {
                badgesContainer.innerHTML = '';
                const badgesList = data.badges || data.fallback?.badges || [];
                badgesList.forEach(badge => {
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
            if(rolesContainer) {
                const rolesList = data.roles || data.fallback?.roles || [];
                if(rolesList.length > 0) {
                    rolesContainer.innerHTML = '';
                    rolesList.forEach(role => {
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
                } else {
                    rolesSection.style.display = 'none';
                }
            }
            
            // تاريخ الانضمام
            const memberSince = document.getElementById('discordMemberSince');
            if(memberSince) {
                if(data.created_at) {
                    const date = new Date(data.created_at);
                    memberSince.textContent = date.toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                    });
                } else {
                    memberSince.textContent = data.fallback?.memberSince || 'Unknown';
                }
            }
            
            // رسالة الحالة
            const statusEl = document.getElementById('discordApiStatus');
            if(statusEl) {
                if(data.id) {
                    statusEl.className = 'discord-api-status success';
                    statusEl.innerHTML = '✅ Live data from Discord';
                } else {
                    statusEl.className = 'discord-api-status error';
                    statusEl.innerHTML = '⚠️ Using fallback data. <a href="https://discord.gg/lanyard" target="_blank">Join Lanyard</a> for live updates';
                }
            }
        }
        
        // جلب البيانات من Lanyard API
        async function fetchLanyardData() {
            try {
                const userId = PORTFOLIO_CONFIG.discord.lanyardUserId;
                console.log('🎮 Fetching Discord data for user:', userId);
                
                const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
                
                if(!response.ok) {
                    if(response.status === 404) {
                        console.error('❌ Error 404: User not found in Lanyard');
                        console.log('');
                        console.log('🔧 How to fix:');
                        console.log('   1. Join Lanyard Discord Server: https://discord.gg/lanyard');
                        console.log('   2. Wait 2-3 minutes for sync');
                        console.log('   3. Refresh this page');
                        console.log('');
                        console.log('✅ Verify your User ID is correct:', userId);
                        return null;
                    }
                    throw new Error(`HTTP ${response.status}`);
                }
                
                const result = await response.json();
                
                console.log('📦 Lanyard Response:', result);
                
                if(result.success && result.data) {
                    const data = result.data;
                    console.log('✅ Discord data loaded successfully!');
                    console.log('👤 Username:', data.discord_user.username);
                    console.log('🟢 Status:', data.discord_status);
                    return {
                        id: data.discord_user.id,
                        username: data.discord_user.username,
                        global_name: data.discord_user.global_name,
                        discriminator: data.discord_user.discriminator,
                        avatar: data.discord_user.avatar,
                        banner: data.discord_user.banner,
                        banner_color: data.discord_user.banner_color,
                        bio: data.discord_user.bio,
                        discord_status: data.discord_status,
                        activities: data.activities,
                        spotify: data.spotify,
                        created_at: data.discord_user.created_at,
                        fallback: PORTFOLIO_CONFIG.discord.fallback
                    };
                } else {
                    console.warn('⚠️ Lanyard API returned unsuccessful response');
                }
            } catch(error) {
                console.error('❌ Lanyard API Error:', error);
            }
            return null;
        }
        
        // تحميل البيانات
        if(PORTFOLIO_CONFIG.discord.useLanyard && PORTFOLIO_CONFIG.discord.lanyardUserId) {
            console.log('🚀 Starting Discord API integration...');
            
            // التحقق من وجود User ID
            if(PORTFOLIO_CONFIG.discord.lanyardUserId === 'YOUR_DISCORD_USER_ID') {
                console.error('❌ Please set your Discord User ID in config.js!');
                console.log('📝 How to get your Discord ID:');
                console.log('   1. Open Discord Settings → Advanced');
                console.log('   2. Enable "Developer Mode"');
                console.log('   3. Right-click your profile → Copy User ID');
                console.log('   4. Paste it in config.js → lanyardUserId');
                
                updateDiscordCard({
                    fallback: PORTFOLIO_CONFIG.discord.fallback
                });
                return;
            }
            
            fetchLanyardData().then(data => {
                if(data) {
                    console.log('Discord Card updated with live data!');
                    updateDiscordCard(data);
                } else {
                    console.warn('⚠️ Using fallback data');
                    console.log('💡 Make sure you joined Lanyard server: https://discord.gg/lanyard');
                    updateDiscordCard({
                        fallback: PORTFOLIO_CONFIG.discord.fallback
                    });
                }
            });
        } else {
            console.log('ℹ️ Lanyard API disabled, using manual data');
            updateDiscordCard({
                fallback: PORTFOLIO_CONFIG.discord.fallback
            });
        }
    }
    
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
});
