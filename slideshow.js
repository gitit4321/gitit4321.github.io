// Photo slide-show; Code modeled after romeojeremiah's github "javascript for beginners"

(function() {
  const photos = [
    "Paul_toy_piano.jpg",
    "Paul_headshot_stoic.jpg",
    "Paul_mallet_vibe_BW.jpg",
    "ppg_photos/ppg_group1.jpg"
  ]

  const btns = document.querySelectorAll('.btn')
  const slidesDiv = document.querySelector('.slides')
  const interval = 5000
  let counter = 0


  btns.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('btn-right')){
        counter++
        if (counter > photos.length - 1){
          counter = 0
        }
        slidesDiv.style.backgroundImage = `url('./resources/images/${photos[counter]}')`
        slidesDiv.style.transition = '1s';
      }
      if (button.classList.contains('btn-left')){
        counter--
        if (counter < 0){
          counter = photos.length - 1
        }
        slidesDiv.style.backgroundImage = `url('./resources/images/${photos[counter]}')`
        slidesDiv.style.transition = '1s';
      }
    })
  })

  const slideLoop = () => {
    setInterval(() => {
      counter++;
      if (counter > photos.length - 1){
        counter = 0
      }
      slidesDiv.style.backgroundImage = `url('./resources/images/${photos[counter]}')`
      slidesDiv.style.transition = '1s';
    }, interval);
  }
  
  slideLoop()
})();
