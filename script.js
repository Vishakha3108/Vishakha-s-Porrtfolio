 // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Typing Effect
        const typingText = document.querySelector('.typing-text');
        const words = ['Frontend Developer', 'Backen Developer','Full Stack Developer', 'Problem Solver'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                // Remove char
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Add char
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            // If word is complete
            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1500);
            } 
            // If word is deleted
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            } 
            // Continue typing/deleting
            else {
                setTimeout(type, isDeleting ? 100 : 200);
            }
        }

        // Start the typing effect
        document.addEventListener('DOMContentLoaded', type);

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
                nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
            } else {
                nav.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
                nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
            }
        });

        // Add animation to cards on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card, .skill-card, .project-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            cards.forEach(card => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
            });
        });
