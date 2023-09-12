// Logo animation timeline
const tl1 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 700
});

tl1.add({
    targets: ['.backButton', '.toggleButton'],
    opacity: 1, 
    translateY: [5,0],
    delay: 800
})
.add({
    targets: ['.bookContainer'],
    opacity: 1, 
    translateY: [5, 0],
    duration: 900
})
.add({
    targets: ['.copyContainer'],
    opacity: 1, 
    translateY: [5, 0]
})      

// Where all the action happens!
tl1.play().finished.then(() => {})
