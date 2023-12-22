let winningPattern = [];

let currentPlayer = `X`;

const win = (letter) => {
    disableButtons();
    if (letter === "X") {
        msgRef.innerHTML = "&#x1F389; <br> 'X' WINS";
    } else {
        msgRef.innerHTML = "&#x1F389; <br> 'O' WINS";
    }
};

const draw =() => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

const disableButtons = () => {};

let newgameBtn = document.querySelector(".game-refresh-btn");


const enableButtons = () => {};

newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
    console.log(`new game button pressed`);
});






const winAuditor = () => {
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];

        if (element1 != "" && (element2 != "") & (element3 != ""))
        {
            if (element1 == element2 && element2 == element3) {
                win(element1);
            }
        }
    }
};

let count = 0;

for(let i = 1; i <= 9 ; i++){
    const cellIndex = i;
    const cellSelector = `[data-cell-index = '${cellIndex}']`
    let btnRef = document.querySelector(cellSelector)
    btnRef.addEventListener("click", () => {
        console.log(`square clicked`);
        if(currentPlayer === `X`) {
            currentPlayer = `O`;
            btnRef.innerText = "X";
            btnRef.disabled = true;
        } else {
            currentPlayer = `X`;            
            btnRef.innerText = "O";
            btnRef.disabled = true;
        }
        count += 1;
        if (count == 9) {
            draw();
        }
        winAuditor();
    });
}


// let btnRef = document.querySelectorAll("board_cell");
// console.log(btnRef);

// btnRef.forEach((element) => {
//     element.addEventListener("click", () => {
//         console.log(`square clicked`);
//         if(xTurn) {
//             xTurn = false;
//             element.innerText = "X";
//             element.disabled = true;
//         } else {
//             xTurn = true;
//             element.innerText = "O";
//             element.disabled = true;
//         }
//         count += 1;
//         if (count == 9) {
//             draw();
//         }
//         winAuditor();
//     });
// });

let popupRef = document.querySelector(".popup");

window.onload = enableButtons;