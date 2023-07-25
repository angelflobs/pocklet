const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu")

    navMenu.classList.remove("show-menu")
}
/**roadmap* */
jQuery(document).ready(function(){

    //logo
    
    
    
    //needed variables
    var $content =$("#roadmap");
    
    //run easetabs
    $content.easytabs({
        animate         :true,
        updateHash      :false,
        tabs            :".tmenu",
        tabActiveClass  :"active",
    });
    
    
    });

/*Countdown */
navLink.forEach(n => n.addEventListener("click", linkAction))
var target_date = new Date().getTime() + (1000 * 3600 * 48); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles-countdown"); // get tag element

getCountdown();

setInterval(function() { getCountdown(); }, 1000);

function getCountdown() {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    days = pad(parseInt(seconds_left / 86400));
    seconds_left = seconds_left % 86400;

    hours = pad(parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    // format countdown string + set tag value
    countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}




