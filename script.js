document.addEventListener('DOMContentLoaded', function() {
    console.log('Fejo site loaded!');
    // Example of adding interactivity
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            alert('You clicked a link to ' + this.textContent);
        });
    });
});
