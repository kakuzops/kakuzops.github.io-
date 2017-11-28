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
  
  var disqus_config = function () {
    this.page.url = "https://kakuzops.github.io{{ page.url }}";  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = "{{ page.url }}"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    
    (function() { 
    var d = document, s = d.createElement('script');
    s.src = 'https://kakuzops-github-io.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();

  
 
