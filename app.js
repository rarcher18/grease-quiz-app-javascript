// const burgerEmoji = document.querySelector('.burger')
// const fryEmoji = document.querySelector('.fries')
// const pizzaEmoji = document.querySelector('.pizza')
// const hotDogEmoji = document.querySelector('.hot-dog')

const closedEmoji = document.querySelector('.closed')
const openEmoji = document.querySelector('.open')



// Adding my Event Listeners
closedEmoji.addEventListener('click', () => {
    if(openEmoji.classList.contains('open')) {
        openEmoji.classList.add('active');
        closedEmoji.classList.remove('active');
    }
})

openEmoji.addEventListener('click', () => {
    if(closedEmoji.classList.contains('closed')) {
        closedEmoji.classList.add('active');
        openEmoji.classList.remove('active');
    }
})