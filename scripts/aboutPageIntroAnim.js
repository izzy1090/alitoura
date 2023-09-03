// Logo animation timeline
const tl1 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 500
});

tl1.add({
    targets: ['.backButton', '.toggleButton'],
    opacity: 1, 
    translateY: [5,0],
    delay: 800
})      
.add({
    targets: '#siteBio',
    opacity: 1,
    translateY: [5,0]
})
.add({
    targets: ['#photography', '#subjects', '#website', '#productionAssistant'], 
    opacity: 1,
    translateY: [5,0]
})

// Where all the action happens!
tl1.play().finished.then(() => {})
