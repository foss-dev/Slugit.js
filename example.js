document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    var slug = new Slugit()

    slug.doSlug({
        event: 'focusout',
        timeout: 800,
        el: '#first',
        target: '#second',
    })
});
  
