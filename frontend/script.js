/* Meo Mix Premium Website Logic - Advanced Animations */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Meo Mix Liquid Motion UI Initialized');

    // 1. Intersection Observer for Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Parallax Implementation for Background Blobs
    const blobs = document.querySelectorAll('.bg-blob');

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Blob Parallax (Direct reaction)
        const moveX = (window.innerWidth / 2 - mouseX) / 25;
        const moveY = (window.innerHeight / 2 - mouseY) / 25;

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 0.4;
            blob.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px) rotate(${mouseX * 0.02}deg)`;
        });
    });

    // 3. Optimized 3D Tilt Effect
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (centerY - y) / 12;
            const rotateY = (x - centerX) / 12;

            card.style.transform = `perspective(1000px) translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) translateY(0) rotateX(0) rotateY(0) scale(1)`;
        });
    });

    // 4. Navbar Scroll Effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 5. Contact Form Logic (Enhanced Feedback)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            
            contactForm.parentElement.innerHTML = `
                <div class="reveal active" style="text-align: center; padding: 60px 20px;">
                    <div style="font-size: 5rem; margin-bottom: 30px;">🥂</div>
                    <h2 style="color: var(--primary); margin-bottom: 20px;">Welcome to the Elite, ${name}</h2>
                    <p>Your request has been received. Our concierge team will reach out within 24 hours.</p>
                </div>
            `;
        });
    }

    // 6. Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
