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

    // إضافة الدعم الديناميكي لبطاقة Discord باستخدام Lanyard API (غير متزامن لتجنب تبطيئ الصفحة)
    const DISCORD_USER_ID = '1000711739031162910';
    fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const discordData = data.data;

                // Banner
                if (discordData.discord_user.banner) {
                    document.getElementById('discord-banner').style.backgroundImage = `ur[](https://cdn.discordapp.com/banners/${DISCORD_USER_ID}/${discordData.discord_user.banner}.png?size=600)`;
                }

                // Profile Picture
                document.getElementById('discord-avatar').src = `https://cdn.discordapp.com/avatars/${DISCORD_USER_ID}/${discordData.discord_user.avatar}.png?size=256`;

                // Display Name
                document.getElementById('discord-displayname').textContent = discordData.discord_user.global_name || discordData.discord_user.username;

                // Status (Online/Offline/DND/Idle)
                const status = discordData.discord_status;
                document.getElementById('discord-status').textContent = status.charAt(0).toUpperCase() + status.slice(1);
                document.getElementById('discord-status-indicator').classList.add(status);

                // Bio
                if (discordData.discord_user.bio) {
                    document.getElementById('discord-bio').textContent = discordData.discord_user.bio;
                } else {
                    document.getElementById('discord-bio').textContent = 'No bio available.';
                }

                // Badges (بناءً على public_flags و premium_type)
                const badgesContainer = document.getElementById('discord-badges');
                const publicFlags = discordData.discord_user.public_flags;
                const badges = [];

                if (publicFlags & 1) badges.push('Discord Staff');
                if (publicFlags & 2) badges.push('Partnered Server Owner');
                if (publicFlags & 4) badges.push('HypeSquad Events');
                if (publicFlags & 64) badges.push('HypeSquad Bravery');
                if (publicFlags & 128) badges.push('HypeSquad Brilliance');
                if (publicFlags & 256) badges.push('HypeSquad Balance');
                if (publicFlags & 512) badges.push('Early Supporter');
                if (publicFlags & 16384) badges.push('Bug Hunter Level 2');
                if (publicFlags & 131072) badges.push('Verified Bot Developer');
                if (publicFlags & 262144) badges.push('Certified Moderator');
                if (publicFlags & 4194304) badges.push('Active Developer');

                if (discordData.discord_user.premium_type === 1) badges.push('Nitro Classic');
                if (discordData.discord_user.premium_type === 2) badges.push('Nitro');

                if (badges.length > 0) {
                    badges.forEach(badge => {
                        const badgeEl = document.createElement('span');
                        badgeEl.classList.add('badge');
                        badgeEl.textContent = badge;
                        badgesContainer.appendChild(badgeEl);
                    });
                } else {
                    badgesContainer.innerHTML = '<span>No badges available.</span>';
                }

                // Custom Status
                const customStatus = discordData.activities.find(act => act.type === 4);
                if (customStatus && customStatus.state) {
                    document.getElementById('discord-custom-status').textContent = `Custom Status: ${customStatus.state}`;
                } else {
                    document.getElementById('discord-custom-status').textContent = 'No custom status.';
                }

                // RPC / Activities
                const activitiesContainer = document.getElementById('discord-activities');
                const activities = discordData.activities.filter(act => act.type !== 4); // استبعاد Custom Status
                if (activities.length > 0) {
                    activities.forEach(act => {
                        const actEl = document.createElement('p');
                        let activityText = '';
                        switch (act.type) {
                            case 0: activityText = `Playing: ${act.name}`; break;
                            case 1: activityText = `Streaming: ${act.name}`; break;
                            case 2: activityText = `Listening to: ${act.name}`; break;
                            case 3: activityText = `Watching: ${act.name}`; break;
                            case 5: activityText = `Competing in: ${act.name}`; break;
                            default: activityText = `Activity: ${act.name}`;
                        }
                        if (act.details) activityText += ` - ${act.details}`;
                        if (act.state) activityText += ` (${act.state})`;
                        actEl.textContent = activityText;
                        activitiesContainer.appendChild(actEl);
                    });
                } else {
                    activitiesContainer.innerHTML = '<p>No current activities.</p>';
                }
            } else {
                // في حال فشل الجلب، عرض رسالة افتراضية
                document.querySelector('.discord-container').innerHTML = '<p>Unable to load Discord profile. Please check your connection or try later.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching Discord data:', error);
            document.querySelector('.discord-container').innerHTML = '<p>Error loading Discord profile.</p>';
        });
});
