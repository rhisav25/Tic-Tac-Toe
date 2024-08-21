let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let hide = document.querySelector(".hide");
let newGameButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const ResetGame = () =>{
    let turnO = true;
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    })

});

const showWinner = (winner) =>{
    msg.innerText = `Congratulations the winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const draw = () =>{
    msg.innerText =  `The Game has been drawn`;
    msgContainer.classList.remove("hide");
    count = 0;
}

const checkWinner = () =>{
    for(let pattern of winPatterns){

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2==pos3){
                count = 0;
                showWinner(pos1); 
                for(box of boxes){
                    box.disabled = true;
                }
            }else{
                if(count==9){
                    draw();
                }
            }
        }
    }
}

resetBtn.addEventListener("click",ResetGame);
newGameButton.addEventListener("click",ResetGame);
