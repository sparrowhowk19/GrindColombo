// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease',
    once: true,
    offset: 50,
});

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('hide');
    }, 1000);
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Cursor effects for links and buttons
const links = document.querySelectorAll('a, button, .tab-btn');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.width = '60px';
        cursorFollower.style.height = '60px';
        cursorFollower.style.borderColor = 'transparent';
        cursorFollower.style.backgroundColor = 'rgba(212, 165, 116, 0.2)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
        cursorFollower.style.borderColor = 'var(--secondary-color)';
        cursorFollower.style.backgroundColor = 'transparent';
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.main-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
    
    if (hamburger.classList.contains('active')) {
        hamburger.children[0].style.transform = 'translateY(9px) rotate(45deg)';
        hamburger.children[1].style.opacity = '0';
        hamburger.children[2].style.transform = 'translateY(-9px) rotate(-45deg)';
    } else {
        hamburger.children[0].style.transform = 'translateY(0) rotate(0)';
        hamburger.children[1].style.opacity = '1';
        hamburger.children[2].style.transform = 'translateY(0) rotate(0)';
    }
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.classList.remove('no-scroll');
        
        hamburger.children[0].style.transform = 'translateY(0) rotate(0)';
        hamburger.children[1].style.opacity = '1';
        hamburger.children[2].style.transform = 'translateY(0) rotate(0)';
    });
});

// Menu tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Show corresponding tab content
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Parallax effect for hero image
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image img');
    const scrolled = window.pageYOffset;
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.15}px)`;
    }
});

// Image hover effect
const imageContainers = document.querySelectorAll('.image-container');
imageContainers.forEach(container => {
    container.addEventListener('mouseenter', () => {
        const img = container.querySelector('img');
        img.style.transform = 'scale(1.05)';
    });
    
    container.addEventListener('mouseleave', () => {
        const img = container.querySelector('img');
        img.style.transform = 'scale(1)';
    });
});

// Disable custom cursor on mobile devices
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
    cursor.style.display = 'none';
    cursorFollower.style.display = 'none';
    document.body.style.cursor = 'auto';
}
