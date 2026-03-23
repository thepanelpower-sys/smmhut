// Simple Mobile Menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// WhatsApp Order Function - WORKING 100%
function orderNow(serviceName) {
    let message = '';
    
    if(serviceName === 'insta-1k') {
        message = 'Hi Smmhut! I want 1000 Instagram Followers for ₹30';
    } else if(serviceName === 'insta-10k') {
        message = 'Hi Smmhut! I want 10K Instagram Followers for ₹299';
    } else if(serviceName === 'insta-combo') {
        message = 'Hi Smmhut! I want 100K Views+Likes+Followers for ₹900';
    } else if(serviceName === 'youtube-monetize') {
        message = 'Hi Smmhut! I want YouTube Monetization Package ₹7000';
    }
    
    const whatsappNumber = '919781116047';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
    
    alert('✅ Order request sent to WhatsApp! Check your phone.');
}

// Navbar active page
window.onload = function() {
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
};

// Add click to hamburger (add this to HTML hamburger)
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    if(hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
});