        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                menuToggle.innerHTML = navLinks.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
            
            // Theme toggle
            const themeToggle = document.querySelector('.theme-toggle');
            
            themeToggle.addEventListener('click', function() {
                document.body.classList.toggle('dark-mode');
                themeToggle.innerHTML = document.body.classList.contains('dark-mode') ? 
                    '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            });
            
            // Form validation
            const form = document.getElementById('form validation');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                let isValid = true;
                
                // Reset error messages
                document.querySelectorAll('.error-message').forEach(el => {
                    el.style.display = 'none';
                });
                
                // Validate name
                const name = document.getElementById('name');
                if (name.value.trim() === '') {
                    document.getElementById('name-error').textContent = 'Name is required';
                    document.getElementById('name-error').style.display = 'block';
                    isValid = false;
                }
                
                // Validate email
                const email = document.getElementById('email');
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (email.value.trim() === '') {
                    document.getElementById('email-error').textContent = 'Email is required';
                    document.getElementById('email-error').style.display = 'block';
                    isValid = false;
                } else if (!emailRegex.test(email.value)) {
                    document.getElementById('email-error').textContent = 'Please enter a valid email';
                    document.getElementById('email-error').style.display = 'block';
                    isValid = false;
                }
                
                // Validate subject
                const subject = document.getElementById('subject');
                if (subject.value.trim() === '') {
                    document.getElementById('subject-error').textContent = 'Subject is required';
                    document.getElementById('subject-error').style.display = 'block';
                    isValid = false;
                }
                
                // Validate message
                const message = document.getElementById('message');
                if (message.value.trim() === '') {
                    document.getElementById('message-error').textContent = 'Message is required';
                    document.getElementById('message-error').style.display = 'block';
                    isValid = false;
                }
                
                if (isValid) {
                    alert('Message sent successfully!');
                    form.reset();
                }
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Set active navigation link based on scroll position
            const sections = document.querySelectorAll('section');
            const navItems = document.querySelectorAll('.nav-links a');
            
            window.addEventListener('scroll', function() {
                let currentSection = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (window.scrollY >= sectionTop - 100) {
                        currentSection = section.getAttribute('id');
                    }
                });
                
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${currentSection}`) {
                        item.classList.add('active');
                    }
                });
            });
            
            // Scroll animations
            const hiddenElements = document.querySelectorAll('.hidden');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            }, { threshold: 0.1 });
            
            hiddenElements.forEach(el => observer.observe(el));
        });
