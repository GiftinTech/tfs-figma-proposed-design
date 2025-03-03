const hideSidebar = document.querySelector('.hide-sidebar');
const menubar = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const anchorElements = document.querySelectorAll('a');
const backToTop = document.querySelector('.back-to-top');

  // Back to top button hides when the DOM loads
document.addEventListener('DOMContentLoaded', () => {
  backToTop.classList.remove('visible');
  backToTop.classList.add('hidden');
});

// Show sidebar and replace menu button with close button
menubar.addEventListener('click', () => {
  sidebar.classList.toggle('visible');
  menubar.classList.toggle('hidden');  
  hideSidebar.classList.toggle('hidden'); 
  hideSidebar.style.display = 'block';
});

// Hide sidebar and replace close button with menu button
hideSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('visible'); 
  hideSidebar.classList.toggle('hidden'); 
  hideSidebar.style.display = 'none';
  menubar.classList.toggle('hidden');
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
  if (
    sidebar.classList.contains('visible') &&
    !sidebar.contains(e.target) &&
    !menubar.contains(e.target) && 
    !hideSidebar.contains(e.target)
  ) {
    sidebar.classList.remove('visible');
    hideSidebar.classList.add('hidden'); 
    menubar.classList.remove('hidden');  
  }
});

// Hide sidebar on scroll
document.addEventListener('scroll', () => {
  if (
    sidebar.classList.contains('visible')
  ) {
    sidebar.classList.remove('visible');
    hideSidebar.classList.add('hidden'); 
    menubar.classList.remove('hidden');  
  }
})

// Close sidebar when a link is clicked
anchorElements.forEach((a) => {
  a.addEventListener('click', () => {
    sidebar.classList.remove('visible');
    hideSidebar.classList.add('hidden'); 
    hideSidebar.style.display = 'none'; // Hide it properly
    menubar.classList.remove('hidden'); 
  });
});

// Prevent default action only for buttons
anchorElements.forEach((a) => { 
  if (a.classList.contains('btn')) { 
    a.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }
});
