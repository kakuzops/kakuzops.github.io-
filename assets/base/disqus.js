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
