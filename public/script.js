document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.carousel-container');
    
    // Mouse wheel scrolling
    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      container.scrollBy({ left: e.deltaY, behavior: 'smooth' });
    });
    
    // Touch scrolling (mobile)
    let isDown = false;
    let startX;
    let scrollLeft;
    
    container.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });
    
    container.addEventListener('mouseleave', () => {
      isDown = false;
    });
    
    container.addEventListener('mouseup', () => {
      isDown = false;
    });
    
    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    });
  });
 
  // Add click functionality for mobile devices
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', function(e) {
        // Remove active class from all items
        document.querySelectorAll('.skill-item').forEach(skill => {
            skill.classList.remove('active');
        });
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Prevent event bubbling
        e.stopPropagation();
    });
});

// Close popup when clicking outside
document.addEventListener('click', function() {
    document.querySelectorAll('.skill-item').forEach(skill => {
        skill.classList.remove('active');
    });
});

// Animate progress bars on hover
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const progressBar = this.querySelector('.progress-fill');
        if (progressBar) {
            // Get the target width from the data attribute or style
            const targetWidth = progressBar.getAttribute('data-original-width') || progressBar.style.width;
            if (targetWidth) {
                // Start from 0% and animate to target width
                progressBar.style.width = '0%';
                progressBar.style.transition = 'width 1.2s ease-out';
                
                // Delay the animation slightly to sync with popup appearance
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 200);
            }
        }
    });
    
    // Reset progress bar on mouse leave
    item.addEventListener('mouseleave', function() {
        const progressBar = this.querySelector('.progress-fill');
        if (progressBar) {
            const targetWidth = progressBar.getAttribute('data-original-width') || progressBar.style.width;
            // Quickly reset without animation
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';
            setTimeout(() => {
                progressBar.style.width = targetWidth;
            }, 10);
        }
    });
});

// Add some interactive effects
document.querySelectorAll('.skill-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(5deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Optional: Add keyboard navigation support
document.querySelectorAll('.skill-item').forEach((item, index) => {
    item.setAttribute('tabindex', '0');
    
    item.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

// Optional: Add smooth scrolling if skills extend beyond viewport
function smoothScrollToSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
        skillsContainer.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// Optional: Initialize any additional features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Skills showcase initialized successfully!');
    
    // Initialize progress bars
    document.querySelectorAll('.skill-item').forEach(item => {
        const progressBar = item.querySelector('.progress-fill');
        if (progressBar) {
            // Store the original width and set initial state
            const originalWidth = progressBar.style.width;
            progressBar.setAttribute('data-original-width', originalWidth);
            progressBar.style.width = '0%';
            
            // Animate in after a short delay
            setTimeout(() => {
                progressBar.style.transition = 'width 0.8s ease';
                progressBar.style.width = originalWidth;
            }, 200);
        }
    });
    
    // Add fade-in animation for skills on page load
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
