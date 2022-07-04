let wave1 = document.getElementById('wave1')
let wave2 = document.getElementById('wave2')
let wave3 = document.getElementById('wave3')
let wave4 = document.getElementById('wave4')

window.addEventListener('scroll', () => {
    let value =  window.scrollY
    wave1.style.backgroundPositionX =   `${value * 4}px`
    wave2.style.backgroundPositionX =   `${370 + value * -2}px`
    wave3.style.backgroundPositionX =   `${200 + value * 4}px`
    wave4.style.backgroundPositionX =   `${600 + value * -2}px`
})

VanillaTilt.init(document.querySelectorAll(".vannilla-animate"), {
    max: 25,
    speed: 400
});
