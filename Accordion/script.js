document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
  
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const parent = header.parentElement;
        const content = header.nextElementSibling;
        const icon = header.querySelector('.accordion-icon');
  
        // Close all other sections if only one should be open at a time
        document.querySelectorAll('.accordion-item').forEach(item => {
          if (item !== parent) {
            item.classList.remove('active');
            item.querySelector('.accordion-content').style.maxHeight = null;
            item.querySelector('.accordion-icon').textContent = "+";
          }
        });
  
        // Toggle active class for the clicked item
        parent.classList.toggle('active');
  
        // Toggle content visibility
        if (parent.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
          icon.textContent = "−";
        } else {
          content.style.maxHeight = null;
          icon.textContent = "+";
        }
      });
    });
  });
  