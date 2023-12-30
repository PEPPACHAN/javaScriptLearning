var turn = 0;
var win = [
    [], [], []
];

function endGame(el){
    document.querySelector("#gameField").disabled = true;
    document.getElementById("turnsInfo").innerHTML = `${el} is win!`;
    console.info(`${el} is win!`)
    return 0;
}

function checkWin (list){
    if (((list[0][0] && list[1][1] && list[2][2]) == 'x') ||
        ((list[0][0] && list[1][1] && list[2][2]) == 'o')){      // \ type win
        endGame(list[0].pop(0));
        return 0;
    }
    
    if (((list[0][2] && list[1][1] && list[2][0]) == 'x') ||
        ((list[0][2] && list[1][1] && list[2][0]) == 'o')){    // / type win
        endGame(list[0].pop(2));
        return 0;
    }

    for (let i = 0; i < 3; i++){     // --- type win
        if (((list[i][0] && list[i][1] && list[i][2]) == 'x') ||
            ((list[i][0] && list[i][1] && list[i][2]) == 'o')){
            endGame(list[i].pop(0));
            return 0;
        }
    }

    for (let i = 0; i < 3; i++){    // | type win
        if (((list[0][i] && list[1][i] && list[2][i]) == 'x') ||
            ((list[0][i] && list[1][i] && list[2][i]) == 'o')){
            endGame(list[0][i]);
            return 0;
        }
    }
}

document.querySelector("#gameField").addEventListener("click", (event) =>{
    let turnsText = document.getElementById("whosTurn");
    let varCellIndex = event.target.cellIndex;
    let varCellRow = event.target.parentElement.rowIndex;
    let fields = document.getElementById("gameField");
    let turns = document.getElementById("whosTurn");
    let cell = document.getElementById(String(event.target.parentElement.rowIndex)).getElementsByTagName("td")[event.target.cellIndex];
    switch (turn){
        case 0: {
            if (cell.innerHTML == ""){
                cell.innerHTML = "x";
                win[parseInt(varCellRow)].splice(varCellIndex, 0, "x");
                turn++;
                turnsText.innerHTML = "O";
                checkWin(win);
                if ((win[0][0] == win[1][0]) == win[2][0]){
                    console.log("hi");
                }
                console.log(win);
                break;
            }
            break;
        }
        case 1: {
            if (cell.innerHTML == ""){
                cell.innerHTML = "o";
                win[parseInt(varCellRow)].splice(varCellIndex, 0, "o");;
                turn--;
                turnsText.innerHTML = "X";
                checkWin(win);
                console.log(win);
                break;
            }
            break;
        }
    }

    console.log(event.target.cellIndexs);
});









// if ((((list[0][0] && list[1][1] && list[2][2]) || (list[0][2] && list[1][1] && list[2][0])) == 'o') ||      // x type win
    // (((list[0][0] && list[1][1] && list[2][2]) || (list[0][2] && list[1][1] && list[2][0])) == 'o')){
    //     endGame(list[0].pop(0));
    //     return 0;
    // }

    // if (((list[0][0] && list[1][1] && list[2][2]) || (list[0][2] && list[1][1] && list[2][0])) == 'o'){     // --- type win
    //     endGame("o");
    //     return 0;
    // }
    
    // if (((list[0][0] && list[1][1] && list[2][2]) || (list[0][2] && list[1][1] && list[2][0])) == 'x'){     // --- type win
    //     endGame("x");
    //     return 0;
    // }

    // list.forEach((item) => {
    //     if (Set(item.forEach).size==1){
    //         endGame(item.pop());
    //         return 0;
    //     }
    // })