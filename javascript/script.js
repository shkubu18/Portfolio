/* loadstart */

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('contents').style.visibility = "hidden";
    } else if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('load').style.display = "none";
            document.getElementById('contents').style.visibility = "visible";
        }, 1000);
    }
}

/* loadstart */


/* load */

const welcomeDescrb = document.querySelector('.welcome-description');
const socLinks = document.querySelector('.soc-links.welcome');

window.addEventListener('load', appear);

function appear() {
    welcomeDescrb.style.display = 'flex';
    setTimeout(() => {
        welcomeDescrb.style.opacity = '1';
    }, 1000);
    socLinks.style.display = 'flex';
    setTimeout(() => {
        socLinks.style.opacity = '1';
    }, 2000);
}

/* load */


/* menu */

const bars = document.querySelector('.bars');
const xmark = document.querySelector('.xmark');
const menu = document.querySelector('.hidden-menu');
const body = document.querySelector('body');

bars.addEventListener('click', () => {
    menu.style.display = 'flex';
    setTimeout(() => {
        menu.style.transform = 'translateX(0px)';
    }, 10);
    bars.style.transform = 'scale(0)';
    setTimeout(() => {
        bars.style.display = 'none';
    }, 1000);
    xmark.style.display = 'flex';
    setTimeout(() => {
        xmark.style.transform = 'scale(1)';
    }, 1000);
    body.style.overflow = 'hidden';
})

xmark.addEventListener('click', () => {
    menu.style.transform = 'translateX(-500px)';
    setTimeout(() => {
        menu.style.display = 'none';
    }, 1000);
    xmark.style.transform = 'scale(0)';
    setTimeout(() => {
        xmark.style.display = 'none';
    }, 1000);
    setTimeout(() => {
        bars.style.display = 'flex';
    }, 1000);
    setTimeout(() => {
        bars.style.transform = 'scale(1)';
    }, 1100);
    body.style.overflow = 'unset';
})

const hiddenMenuLinks = document.querySelectorAll('.hidden-menu a');

for (const hiddenMenuLink of hiddenMenuLinks) {
    hiddenMenuLink.addEventListener('click', () => {
        body.style.overflow = 'unset';
        menu.style.transform = 'translateX(-500px)';
        menu.style.display = 'none';
        xmark.style.display = 'none';
        xmark.style.transform = 'scale(0)';
        bars.style.transform = 'scale(1)';
        bars.style.display = 'initial';
    })
}


/* menu */


/* scroll down effects */

const aboutMe = document.querySelector('.about-me');
const profAndSkills = document.querySelector('.profile-and-skills');
const projectsSection = document.querySelector('.projects-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        aboutMe.style.transform = 'scale(1)';
    }

    if (window.scrollY > 1100) {
        profAndSkills.style.transform = 'scaleX(1)';
    }

    if (window.scrollY > 2400) {
        projectsSection.style.transform = 'scaleX(1)';
    }
})

/* scroll down effects */


