let boxes = document.querySelectorAll(".box");
let reset =  document.querySelector("#reset");
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");
 

let turn0 = true;
let count = 0

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () =>{
    count = 0;
    turn0 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turn0 === true){
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const checkWinner = () => {
    let isWinner = false;
    for(let pattern of winPattern){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                isWinner = true;
                showWinner(pos1Val);
                disableBoxes();
                return;
            }
        }
    }

    if(count === 9 && !isWinner) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hide");
    }
};

newGame.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)
