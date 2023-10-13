let xOrO = 0
let turn = document.getElementById('turn')
let boxes = document.getElementsByClassName('box')
runGame()

function winner(b1, b2, b3) {
    b1.classList.add('winner')
    b2.classList.add('winner')
    b3.classList.add('winner')
    turn.innerHTML = b1.innerHTML + " is a winner"
    const winDiv = document.createElement('div')
    const winContent = document.createTextNode(`${b1.innerHTML} is a winner`)
    const aboveGrid = document.getElementById('main')
    winDiv.appendChild(winContent)
    document.body.appendChild(winDiv)
    aboveGrid.appendChild(winDiv)
    aboveGrid.parentNode.insertBefore(winDiv, aboveGrid)
    winDiv.classList.add('drawAlert')
    winDiv.setAttribute('id', 'win-alert')
}

function findWinner() {
    let b1 = document.getElementById('box-1')
    let b2 = document.getElementById('box-2')
    let b3 = document.getElementById('box-3')
    let b4 = document.getElementById('box-4')
    let b5 = document.getElementById('box-5')
    let b6 = document.getElementById('box-6')
    let b7 = document.getElementById('box-7')
    let b8 = document.getElementById('box-8')
    let b9 = document.getElementById('box-9')

    if (b1.innerHTML !== '' && b1.innerHTML === b2.innerHTML && b1.innerHTML === b3.innerHTML){
        winner(b1, b2, b3)
    }
    if (b4.innerHTML !== '' && b4.innerHTML === b5.innerHTML && b4.innerHTML === b6.innerHTML){
        winner(b4, b5, b6)
    }
    if (b7.innerHTML !== '' && b7.innerHTML === b8.innerHTML && b7.innerHTML === b9.innerHTML){
        winner(b7, b8, b9)
    }
    if (b1.innerHTML !== '' && b1.innerHTML === b4.innerHTML && b1.innerHTML === b7.innerHTML){
        winner(b1, b4, b7)
    }
    if (b2.innerHTML !== '' && b2.innerHTML === b5.innerHTML && b2.innerHTML === b8.innerHTML){
        winner(b2, b5, b8)
    }
    if (b3.innerHTML !== '' && b3.innerHTML === b6.innerHTML && b3.innerHTML === b9.innerHTML){
        winner(b3, b6, b9)
    }
    if (b1.innerHTML !== '' && b1.innerHTML === b5.innerHTML && b1.innerHTML === b9.innerHTML){
        winner(b1, b5, b9)
    }
    if (b3.innerHTML !== '' && b3.innerHTML === b5.innerHTML && b3.innerHTML === b7.innerHTML){
        winner(b3, b5, b7)
    }
    
}
function runGame() {
    let notEmpty = 0
    for(let i = 0; i < boxes.length; i++){
        boxes[i].onclick = function() {
            if (this.innerHTML !== 'X' && this.innerHTML !== 'O'){
                if (xOrO % 2 === 0) {
                    this.innerHTML = 'X'
                    turn.innerHTML = 'O Turn'
                    findWinner()
                    console.log(xOrO)
                    console.log(this.innerHTML)
                    xOrO += 1
                } else {
                    this.innerHTML = 'O'
                    turn.innerHTML = 'X Turn'
                    findWinner()
                    console.log(xOrO)
                    xOrO += 1
                }
                if(boxes[i].innerHTML !== ''){
                    notEmpty += 1
                }
                if(notEmpty = 8){
                    drawOrWin()
                }
            }
        }
    }
}

function drawOrWin(){
    let notWinner = 0
    for (let i = 0; i < boxes.length; i++){
        if(boxes[i].innerHTML !== '' && !boxes[i].classList.contains('winner')){
            console.log('Found a loser')
            notWinner++
        }
    }
    if(notWinner === 9){
        turn.innerHTML = 'Its a Draw'
        drawAlert()
    } 
}

document.getElementById('btn').addEventListener('click', restart)

function restart(){
    const winAlertDiv = document.getElementById('win-alert')
    const drawAlertDiv = document.getElementById('draw-alert')
    for(let i = 0; i < boxes.length; i++){
        boxes[i].classList.remove('winner')
        boxes[i].innerHTML = ''
        turn.innerHTML = 'Start Game'
        xOrO = 0
        console.log("Restarting...")
    }
    if(winAlertDiv != null){
        winAlertDiv.remove()
    }
    if(drawAlertDiv != null){
        drawAlertDiv.remove()
    }
}

function drawAlert(){
    const drawDiv = document.createElement('div')
    const drawContent = document.createTextNode('Its a Draw')
    const aboveGrid = document.getElementById('main')
    drawDiv.appendChild(drawContent)
    document.body.appendChild(drawDiv)
    aboveGrid.appendChild(drawDiv)
    aboveGrid.parentNode.insertBefore(drawDiv, aboveGrid)
    drawDiv.classList.add('drawAlert')
    drawDiv.setAttribute('id', 'draw-alert')
}


