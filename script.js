// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeAccordions();
    initializeSearch();
    initializeSmoothScroll();
    initializeMobileNav();
});

// Accordion Implementation
function initializeAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const isActive = this.classList.contains('active');
            
            // Close all other accordions in the same section
            const accordion = this.closest('.accordion');
            const allHeaders = accordion.querySelectorAll('.accordion-header');
            const allContents = accordion.querySelectorAll('.accordion-content');
            
            allHeaders.forEach(h => h.classList.remove('active'));
            allContents.forEach(c => c.classList.remove('active'));
            
            // Toggle current accordion
            if (!isActive) {
                this.classList.add('active');
                accordionContent.classList.add('active');
            }
        });
    });
}

// Search Functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            clearSearch();
            return;
        }
        
        performSearch(searchTerm);
    });
}

function performSearch(searchTerm) {
    // Remove previous highlights
    clearSearch();
    
    // Get all searchable content
    const sections = document.querySelectorAll('.content-section');
    let foundResults = false;
    
    sections.forEach(section => {
        const sectionText = section.textContent.toLowerCase();
        const sectionContainsSearch = sectionText.includes(searchTerm);
        
        if (sectionContainsSearch) {
            foundResults = true;
            section.style.display = 'block';
            
            // Expand accordions that contain the search term
            const accordionItems = section.querySelectorAll('.accordion-item');
            accordionItems.forEach(item => {
                const itemText = item.textContent.toLowerCase();
                if (itemText.includes(searchTerm)) {
                    const header = item.querySelector('.accordion-header');
                    const content = item.querySelector('.accordion-content');
                    header.classList.add('active');
                    content.classList.add('active');
                    
                    // Highlight matching text
                    highlightText(item, searchTerm);
                }
            });
            
            // Highlight matching text in cards
            const cards = section.querySelectorAll('.term-card, .model-card, .resource-card');
            cards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                if (cardText.includes(searchTerm)) {
                    highlightText(card, searchTerm);
                }
            });
        } else {
            // Hide sections that don't contain the search term (except hero and TOC)
            if (!section.classList.contains('hero') && !section.querySelector('.toc-grid')) {
                section.style.display = 'none';
            }
        }
    });
    
    // Scroll to first result
    if (foundResults) {
        const firstVisibleSection = Array.from(sections).find(s => 
            s.style.display !== 'none' && 
            !s.classList.contains('hero') &&
            s.textContent.toLowerCase().includes(searchTerm)
        );
        
        if (firstVisibleSection) {
            firstVisibleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

function highlightText(element, searchTerm) {
    // Get all text nodes
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const textNodes = [];
    let node;
    
    while (node = walker.nextNode()) {
        if (node.textContent.trim().length > 0) {
            textNodes.push(node);
        }
    }
    
    // Highlight matches in text nodes
    textNodes.forEach(textNode => {
        const text = textNode.textContent;
        const lowerText = text.toLowerCase();
        const index = lowerText.indexOf(searchTerm);
        
        if (index !== -1 && textNode.parentElement.tagName !== 'SCRIPT') {
            const before = text.substring(0, index);
            const match = text.substring(index, index + searchTerm.length);
            const after = text.substring(index + searchTerm.length);
            
            const span = document.createElement('span');
            span.className = 'highlight';
            span.textContent = match;
            
            const fragment = document.createDocumentFragment();
            fragment.appendChild(document.createTextNode(before));
            fragment.appendChild(span);
            fragment.appendChild(document.createTextNode(after));
            
            textNode.parentElement.replaceChild(fragment, textNode);
        }
    });
}

function clearSearch() {
    // Remove all highlights
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        const text = highlight.textContent;
        const textNode = document.createTextNode(text);
        highlight.parentElement.replaceChild(textNode, highlight);
    });
    
    // Show all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'block';
    });
    
    // Close all accordions
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const accordionContents = document.querySelectorAll('.accordion-content');
    
    accordionHeaders.forEach(h => h.classList.remove('active'));
    accordionContents.forEach(c => c.classList.remove('active'));
}

// Smooth Scroll for TOC links
function initializeSmoothScroll() {
    const tocLinks = document.querySelectorAll('.toc-item');
    
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile Navigation (if needed in future)
function initializeMobileNav() {
    const navToggle = document.getElementById('navToggle');
    
    if (!navToggle) return;
    
    navToggle.addEventListener('click', function() {
        // Future implementation for mobile menu if needed
        console.log('Mobile navigation toggle clicked');
    });
}

// Utility: Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll progress indicator
function initializeScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #7c3aed);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
initializeScrollProgress();

// Add "Back to Top" button
function createBackToTopButton() {
    const button = document.createElement('button');
    button.textContent = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2563eb, #7c3aed);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    button.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(button);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}

// Initialize back to top button
createBackToTopButton();

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Press '/' to focus search
    if (e.key === '/' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
    
    // Press 'Escape' to clear search
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        if (searchInput.value !== '') {
            searchInput.value = '';
            clearSearch();
        }
    }
});

// Add keyboard shortcuts hint
function addKeyboardShortcutsHint() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = 'Search for terms, concepts, or models... (Press "/" to focus)';
    }
}

// Initialize keyboard shortcuts hint
addKeyboardShortcutsHint();

// Log initialization
console.log('Referencia - AI & LLM Reference Guide initialized successfully!');
console.log('Keyboard shortcuts: "/" to focus search, "Escape" to clear search');
