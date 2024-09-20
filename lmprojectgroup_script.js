window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

//JavaScript for "Continue Reading" functionality in the blog section
document.querySelectorAll('.continue-reading').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('data-target');
      const fullContent = document.getElementById(targetId);

      if (fullContent.style.display === 'block') {
        fullContent.style.display = 'none';
        this.textContent = 'Continue Reading';
      } else {
        fullContent.style.display = 'block';
        this.textContent = 'Show Less';
      }
    });
  });
  
  function toggleHours() {
    const hoursList = document.getElementById('hours-list');
    hoursList.style.display = hoursList.style.display === 'block' ? 'none' : 'block';
}

window.onload = function() {
    const showFormButton = document.getElementById('showFormButton');
    const contactForm = document.getElementById('contactForm');
    const cancelButton = document.querySelector('button[type="button"]');

    showFormButton.addEventListener('click', function() {
        contactForm.style.display = 'block';
    });

    cancelButton.addEventListener('click', function() {
        contactForm.style.display = 'none';
    });
};

