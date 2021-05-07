let h1 = document.querySelector('h1')

h1.classList.add('test')

document.body.append(h1)


function alertHello(e) {
    alert('hi!!!')
    console.log(e.target.innerText)
    console.log(e.target.nodeName)
}

h1.addEventListener('click', alertHello)

let btn = document.querySelector('#v1')
let btn2 = document.querySelector('#v2')
let btn3 = document.querySelector('#v3')
let btn4 = document.querySelector('#v4')

let target = 0

let numOnScreen = document.createElement('h1')
numOnScreen.textContent = target

document.body.append(numOnScreen)

btn.addEventListener('click', add)
btn2.addEventListener('click', subtract)

btn3.addEventListener('click', goUpSlide)
btn4.addEventListener('click', goDownSlide)

let array = ['uchenna','augustine','attah']
let num = -1

let images = ['./zeke.png', './zeke1.png', './zeke3.png']

let previewPic = document.createElement('img')
previewPic.classList.add('square')
previewPic.src = images[0]
document.body.append(previewPic)

// can use the logic below and change the names for images
function goUpSlide() {
    num ++
    previewPic.src = images[num]
    let count = document.createElement('p')
    count.textContent = images[num]
    document.body.append(count)
    console.log(images[num])
        if (num === images.length) {
            previewPic.src = images[num = 0]
        }
    // console.log(array[num])
    // if (num === array.length) {
    //     console.log(array[num = 0])
    // }
}

function goDownSlide() {
    num --
    console.log(num)
    console.log(array[num])
}


function add() {
    target ++
    numOnScreen.textContent = target
    if (target === 5) {
        console.log('rached taargetttt')
    }
}

function subtract() {
    target --
    numOnScreen.textContent = target
    if (target === -2) {
        console.log('negative.... ADD!')
    }
}

// Now i have this working, try logic but using an array and counting up and down an array.
// then implement into an image changer?

//by clicking the button it goes up and down the array the number is a variable, and the buttons increase/decrease it's count