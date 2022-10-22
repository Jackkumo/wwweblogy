let turn = 0;
function clickTile(x, y, event) {
    // checks for a win
    

    // goes through with action
    const elm = event.target;
    if (elm.innerHTML == "") {
        if (turn % 2 == 0) {
            elm.innerHTML = 'X';
        } else {
            elm.innerHTML = 'O';
        }
    turn += 1;
    }
}