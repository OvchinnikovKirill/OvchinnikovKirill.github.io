document.getElementById('toggleMenu').addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block' ? 'none' : 'block');
});

document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var toggleMenuButton = document.getElementById('toggleMenu');
    var isClickInsideMenu = menu.contains(event.target);
    var isClickOnToggleMenuButton = (event.target === toggleMenuButton || toggleMenuButton.contains(event.target));

    if (!isClickInsideMenu && !isClickOnToggleMenuButton) {
        menu.style.display = 'none';
    }
});

 const targetDate = new Date("2024-07-18T15:20:00");

 function updateCountdown() {
 const now = new Date();
 const remainingTime = targetDate - now;

 const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
 const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
 const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

 document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
 document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
 document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
 document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
 }

 setInterval(updateCountdown, 1000);
