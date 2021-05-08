let button = document.querySelector('#button')
let buttonTwo = document.querySelector('#buttonTwo')
let buttonThree = document.querySelector('#buttonThree')

let modes = ['dark', 'light', 'middle']

button.addEventListener('mouseover', darkMode)
// button.addEventListener('mouseleave', defaultBg)
buttonTwo.addEventListener('mouseover', lightMode)
buttonThree.addEventListener('mouseover', middleMode)

function darkMode(e) {
    console.dir(e)
    document.body.classList.toggle('darkMode')
    console.log(`changed mode to ${modes[0]} mode`)
}

function lightMode() {
    document.body.classList.toggle('lightMode')
    console.log(`changed mode to ${modes[1]} mode`)
}

function middleMode() {
    document.body.classList.toggle('middleMode')
    console.log(`changed mode to ${modes[2]} mode`)
}

// function defaultBg() {
//     // document.body.style.background = 'white'
//     document.body.classList.toggle('darkMode')
//     console.log('background defaulted')
// }


// find a way to use the DOM event to find out what class is added to body
// and how to remove it
// So this way it can be applied to all functions.