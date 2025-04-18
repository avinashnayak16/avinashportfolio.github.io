// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        document.body.style.backgroundColor = '#ffffff';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        document.body.style.backgroundColor = '#0096c7';
    }
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#0096c7';
} else {
    document.body.style.backgroundColor = '#ffffff';
}

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            document.documentElement.classList.add('dark');
            document.body.style.backgroundColor = '#00b4d8';
        } else {
            document.documentElement.classList.remove('dark');
            document.body.style.backgroundColor = '#ffffff';
        }
    }
});

themeToggle.addEventListener('click', toggleTheme);

// Smooth Scrolling
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

// Intersection Observer for Section Animations
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

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Navbar Scroll Effect
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Form Validation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        }
    });
}

// Progress Bar Animation
document.querySelectorAll('.progress-bar').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = width;
    }, 100);
});

// Mobile Menu Toggle
const mobileMenuButton = document.createElement('button');
mobileMenuButton.className = 'md:hidden p-2 rounded-lg bg-primary-200 dark:bg-primary-800';
mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';

const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu fixed top-16 left-0 w-full bg-white dark:bg-primary-900 p-4 md:hidden';

// Clone the navigation links
const navLinks = document.querySelector('nav .flex.space-x-4').cloneNode(true);
mobileMenu.appendChild(navLinks);

document.body.appendChild(mobileMenu);
document.querySelector('nav .flex.justify-between').appendChild(mobileMenuButton);

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.remove('open');
    }
});

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
    img.classList.add('loading');
    img.addEventListener('load', () => {
        img.classList.remove('loading');
    });
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add animation to skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
    });
});

// Add animation to social icons
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Handle theme toggle animation
themeToggle.addEventListener('click', () => {
    themeToggle.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0)';
    }, 300);
});

// Add print styles
window.addEventListener('beforeprint', () => {
    document.body.classList.add('print');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('print');
}); 
