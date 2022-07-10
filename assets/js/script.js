const startButton = document.getElementById('start-btn')
let welcomeDivElement = document.getElementById('intro')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    
}

function  selectQuestion() {

}