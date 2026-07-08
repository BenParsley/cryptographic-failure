(function () {
  var navHTML =
    '<div class="header-section">' +
    '<div class="header-bottom">' +
    '<div class="container smaller-container">' +
    '<nav class="navbar navbar-expand-lg navbar-light">' +
    '<button class="navbar-toggler" type="button" data-bs-toggle="collapse"' +
    ' data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"' +
    ' aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span>' +
    '</button>' +
    '<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
    '<ul class="navbar-nav main-menu ml-auto">' +
    '<li class="nav-item"><a href="index.html" data-view="view-home">What is Cryptography?</a></li>' +
    '<li class="nav-item"><a href="index.html#view-cryptographic-failure" data-view="view-cryptographic-failure">Cryptographic Failure</a></li>' +
    '<li class="nav-item"><a href="mailto:ben.parsley1@hotmail.com">Contact</a></li>' +
    '</ul>' +
    '<div class="header-join-part" id="auth-actions"></div>' +
    '</div>' +
    '</nav>' +
    '</div>' +
    '</div>' +
    '</div>';

  var placeholder = document.getElementById('site-nav');
  if (placeholder) {
    placeholder.outerHTML = navHTML;
  }

  // Highlight the active nav link based on which view is active
  var activeView = document.querySelector('.page-view.is-active');
  if (activeView) {
    var activeViewId = activeView.id;
    document.querySelectorAll('.main-menu .nav-item a[data-view]').forEach(function (link) {
      if (link.getAttribute('data-view') === activeViewId) {
        link.parentElement.classList.add('active');
      }
    });
  } else {
    // Fallback: href-based detection for non-SPA pages (profile, login, etc.)
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-menu .nav-item a').forEach(function (link) {
      if (link.getAttribute('href') === page) {
        link.parentElement.classList.add('active');
      }
    });
  }
})();
