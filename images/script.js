document.addEventListener('DOMContentLoaded', function () {
  var check = document.getElementById('mobilenav-check');
  var button = document.getElementById('mobilenav-button');
  var nav = document.getElementById('blog-nav');
  if (!check || !button || !nav) return;

  function sync() {
    var open = check.checked;
    button.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('nav-on', open);
  }

  check.addEventListener('change', sync);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && check.checked) {
      check.checked = false;
      sync();
    }
  });
  sync();
});
