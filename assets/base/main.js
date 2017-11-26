document.addEventListener('DOMContentLoaded', function() {
    var app = senna.dataAttributeHandler.getApp();
  
    app.on('endNavigate', function(event) {
      initNavbar();
      fixHeroHeight();
      trackPageViews(event);
    });
  
    initNavbar();
    fixHeroHeight();
  });
  
  // Keeps the primary navigation in close proximity to the user
  // by fixing it when scrolling up and disappearing when scrolling down
  var headroom;
  
  function initNavbar() {
    var header = document.querySelector('.site-header');
  
    if (headroom) {
      headroom.destroy();
    }
  
    headroom = new Headroom(header, {
      offset: 0,
      tolerance: 10,
      classes: {
        initial: "animated",
        pinned: "slideDown",
        unpinned: "slideUp",
        top: "top",
        notTop: "notTop",
        bottom: "bottom",
        notBottom: "notBottom"
      }
    });
  
    headroom.init();
  }
  