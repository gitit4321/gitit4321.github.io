/* Navbar */
const navbarBtn = document.querySelector(".navbar__btn");
const navbarLinks = document.querySelector(".navbar__links");

navbarBtn.addEventListener("click", function () {
  let value = navbarLinks.classList.contains("navbar__collapse");

  if (value) {
    navbarLinks.classList.remove("navbar__collapse");
    navbarBtn.classList.remove("change");
  } else {
    navbarLinks.classList.add("navbar__collapse");
    navbarBtn.classList.add("change");
  }
});

/* Drum Kit */
/* Code below from Wes Bos' online Javascript30 Course */

function playSound(e) {
  console.log(e)
  if (e.type == "click") {            // checks if event type is 'click' or 'keydown'
    keyCode = e.path[1].dataset.key
  } else {
    keyCode = e.keyCode
  }

  const audio = document.querySelector(`audio[data-key='${keyCode}']`);
  const key = document.querySelector(`.key[data-key='${keyCode}']`);
  if (!audio) return; // stop function if no audio file
  audio.currentTime = 0; //plays audio file immediately
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //omit if not transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

keys.forEach((key) => key.addEventListener("click", playSound));

window.addEventListener("keydown", playSound);
