let buttonRight = document.querySelector('.button2')
let buttonLeft = document.querySelector('.button1')
let buttonBottom = document.querySelector('.button4')
let buttonTop = document.querySelector('.button3')
let hero = document.querySelector('.hero')
let heroLeft = parseInt(getComputedStyle(hero).left)
let heroTop = parseInt(getComputedStyle(hero).top)
let timer = document.querySelector('.timer')
let seconds = 20
let youWin = false
let place = document.querySelector('.place')
let placeLeft = parseInt(getComputedStyle(place).left)
let placeTop = parseInt(getComputedStyle(place).top)
let placeHeight = parseInt(getComputedStyle(place).height)
let placeWidth = parseInt(getComputedStyle(place).width)


function check() {
    
    if (
        heroLeft >= placeLeft &&
        heroLeft <= placeLeft + placeWidth &&
        heroTop >= placeTop &&
        heroTop <= placeTop + placeHeight
    ) {
        youWin = true;
        document.body.innerHTML = '<h1 class="textik">Вы выиграли!</h1>';
        clearInterval(interval);
    }
}

buttonTop.addEventListener('click', function click(){
    heroTop -= 10
    hero.style.top = heroTop+'px'
    check()
})

buttonBottom.addEventListener('click', function click(){
    heroTop += 10
    hero.style.top = heroTop+'px'
    check()
})
buttonLeft.addEventListener('click', function click(){
    heroLeft -= 10
    hero.style.left = heroLeft+'px'
    check()
})
buttonRight.addEventListener('click', function click(){
    heroLeft += 10
    hero.style.left = heroLeft+'px'
    check()
})



let interval = setInterval(function time(){
    seconds -= 1
    timer.textContent = seconds
    if (seconds == 0){
        if (youWin == false){
            document.body.innerHTML = ''
            document.body.style.background = 'url(img/skrimer.jpg)'
        }
     clearInterval(interval)   
    }
 
},1000)

















































// button.addEventListener('click', function click(){
//     button.style.background = 'green'
// })
// let chisla = [1, 3, 5]
// console.log('hello')
// if ('hello' == 'hello'&& 3>2){ 
// let number = 0
// number++
// }

// function update(a,b,c,d){
// console.log(d-c)
// }
// update(3,5,15,19)



















// function get(a,b){

// }
// get(2,5)
// get(7,18)


// let img = document.querySelector('.img')
// img.addEventListener('click', function click(){
//     img.style.borderRadius = '20px'
// })

// // &&














// let ocenki = [10,12]
// console.log(ocenki[1])

// function delet(a,b){

// }
// delet(13,17)



// if (3 != 5 && 8 == 8){
    
// }


// let buton = document.querySelector('.bite')
// buton.addEventListener('click', function click(){

// })

// let age = 10
// age++













