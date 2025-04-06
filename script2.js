function showMenu(menuId) {
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
      if (section.id === menuId) {
        section.style.display = 'flex';
      } else {
        section.style.display = 'none';
      }
    });
  }