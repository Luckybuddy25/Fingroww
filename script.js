// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Form submission handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value;

            if (!email) {
                alert('Please enter your email address');
                return;
            }

            // Here you would typically send the email to your backend
            // For now, we'll just show a success message
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'mt-4 text-green-400';
                successMessage.textContent = 'Thank you for joining our waitlist!';
                form.appendChild(successMessage);

                // Clear the input
                emailInput.value = '';

                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            } catch (error) {
                alert('Something went wrong. Please try again later.');
            }
        });
    }

    // Mobile menu toggle
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'md:hidden fixed top-4 right-4 z-50 p-2';
    mobileMenuButton.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    `;

    const nav = document.querySelector('nav');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'fixed inset-0 bg-black/95 z-40 hidden';
    mobileMenu.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#features" class="text-2xl hover:text-purple-400 transition">Features</a>
            <a href="#vision" class="text-2xl hover:text-purple-400 transition">Vision</a>
            <a href="#contact" class="text-2xl hover:text-purple-400 transition">Contact</a>
            <button class="bg-purple-600 px-8 py-3 rounded-full text-lg hover:bg-purple-700 transition">
                Get Started
            </button>
        </div>
    `;

    document.body.appendChild(mobileMenu);
    nav.appendChild(mobileMenuButton);

    let isMenuOpen = false;
    mobileMenuButton.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('mobile-menu');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('mobile-menu');
        });
    });

    // Add hover-lift class to cards
    document.querySelectorAll('.bg-white\\/5').forEach(card => {
        card.classList.add('hover-lift');
    });

    // Add gradient-text class to specific elements
    document.querySelectorAll('h1 span').forEach(element => {
        element.classList.add('gradient-text');
    });
}); 