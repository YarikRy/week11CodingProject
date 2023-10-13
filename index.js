let xOrO = 0
let turn = document.getElementById('turn')
let boxes = document.getElementsByClassName('box')

function winner(b1, b2, b3) {
    b1.classList.add('winner')
    b2.classList.add('winner')
    b3.classList.add('winner')
    turn.innerHTML = b1.innerHTML + " is a winner"
}

function draw(){
    for (let i = 0; i < boxes.length; i++){
        let win = boxes[i].classList.contains('winner')
        if (win){
            findWinner()
        } else {
            turn.innerHTML = 'Its a Draw'
        }
    }
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
        }
    }
}

document.getElementById('btn').addEventListener('click', restart)
document.getElementById('btn').addEventListener('click', hide)

function restart(){
    for(let i = 0; i < boxes.length; i++){
        boxes[i].classList.remove('winner')
        boxes[i].innerHTML = ''
        turn.innerHTML = 'Start Game'
        xOrO = 0
        console.log("Restarting...")
    }
}

function hide() {
    document.getElementById('alert').hidden = true
}

function show() {
    document.getElementById('alert').hidden = false
}