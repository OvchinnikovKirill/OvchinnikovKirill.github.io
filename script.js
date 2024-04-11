document.getElementById('toggleMenu').addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block' ? 'none' : 'block');
});

document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var toggleMenuButton = document.getElementById('toggleMenu');
    var isClickInsideMenu = menu.contains(event.target);
    var isClickOnToggleMenuButton = (event.target === toggleMenuButton);

    if (!isClickInsideMenu && !isClickOnToggleMenuButton) {
        menu.style.display = 'none';
    }
});