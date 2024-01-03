
const initialImage = document.getElementById('initialImages')
const largeVerticals = document.getElementById('largeVerticals')

function logoAnimation(){
  const logoMask = document.querySelector('.logoMask');

  anime({
    // Target the logo mask before moving the mask down to create a swipe in effect
    targets: logoMask,
    translateY: [0, '100%'],
    duration: 1000,
    easing: 'easeInOutQuad',
    begin: function() {
      
    },
    // Then complete the animation by removing the logo mask from the DOM
    complete: () => {
      logoMask.parentElement.removeChild(logoMask);
      
    }
  }) 
}

function growLogo(){
  anime({
      targets: '.logo',
      scale: 1.02,
      duration: 1200,
      easing: 'easeInOutQuad'
  });
}

window.addEventListener('load', function(){
  // Logo animation timeline
  const tl1 = anime.timeline({
    easing: 'easeOutExpo',
  });

  tl1
  .add({
    begin: () => {
      initialImage.style.opacity = '0'; 
      largeVerticals.style.opacity = '0'; 
      logoAnimation();
    }
  })      
  .add({
      complete: ()=> {
        growLogo();
        initialImage.style.opacity = '1'; 
        largeVerticals.style.transition = 'opacity 1s'; 
        largeVerticals.style.opacity = '1'; 
    }
  })

  // About, print, toggle button animation timeline
  var tl2 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 500,
    
  })

  tl2.add({
    targets: ['.aboutButton'],
      opacity: 0, 
      delay: 2000
  })
  .add({
    targets: ['.aboutButton'],
    opacity: 1,
  })
  .add({
    targets: ['.printButton'],
    opacity: 0,
  })
  .add({
    targets: ['.printButton'],
    opacity: 1,
  })
  .add({
    targets: ['.toggleButton'],
    opacity: 0,
  })
  .add({
    targets: ['.toggleButton'],
    opacity: 1,
  })

  // Where all the action happens!
  tl1.play().finished.then(() => {
    tl2.play().finished.then(() => {  })
  })
})
