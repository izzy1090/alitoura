
const initialImage = document.getElementById('initialImages')
const largeVerticals = document.getElementById('largeVerticals')
function fadePicsAndGrowLogo(){
    anime({
        targets: [initialImage, largeVerticals],
        opacity: 1,
        duration: 500,
        easing: 'easeInOutQuad',
    });

    anime({
        targets: '.logo',
        scale: 1.02,
        duration: 1200,
        easing: 'easeInOutQuad'
    });
  }
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
  window.addEventListener('load', function(){
    // Logo animation timeline
    const tl1 = anime.timeline({
      easing: 'easeOutExpo',
    });

    tl1
    .add({
      begin: () => {
        initialImage.style.opacity = '0'; // Set initial opacity to 0
        largeVerticals.style.opacity = '0';
        logoAnimation();
      }
    })      
    .add({
        complete: ()=> {
          fadePicsAndGrowLogo;
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
