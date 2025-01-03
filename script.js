let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg');

let draw = 1;
let turnO = true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if(turnO){
            box.innerHTML="O";
            turnO=false
        }
        else{
            box.innerHTML="X";
            turnO=true
        }
        box.disabled=true;
        
        checkWinner()
        if( draw == 9){
            showDraw();
        }
        draw += 1
    });
});

const enabledBoxes = ()=>{
    for( let box of boxes){
        box.disabled = false;
        box.innerText="";

    }
};

const disabledBoxes = ()=>{
    for( let box of boxes){
        box.disabled = true;
    }
};

const resetGame = ()=>{
    turnO = true;
    draw = 1;
    enabledBoxes();
    msgContainer.classList.add("hide");
};

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const showDraw = ()=>{
    msg.innerText = `Game Drawn`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
        }
};

newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);