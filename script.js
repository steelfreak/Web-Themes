document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('theme-toggle-checkbox');
  const body = document.getElementsByTagName('body')[0];

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
  });

  const themeButtons = document.querySelectorAll('.theme-button');
  themeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const theme = this.dataset.theme;
      body.className = '';
      body.classList.add(theme);
      checkbox.checked = false;
    });
  });
});