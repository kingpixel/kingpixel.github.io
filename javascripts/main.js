
(function () {
    // get the button and menu nodes
    var button = document.querySelector('[aria-label="site"] button');
    var menu = button.nextElementSibling;
    // set initial (closed menu) states
    button.setAttribute('aria-expanded', 'false');
    menu.classList.add('hidden');
    button.addEventListener('click', function () {
        // toggle menu visibility
        var expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        menu.classList.toggle('hidden');
    });

})()
