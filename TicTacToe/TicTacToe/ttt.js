let turn = 0;
function clickTile(x, y, event) {
    const element = event.target;
    if (element.innerHTML == "" ) {
        if (turn % 2 == 0) {
            element.innerHTML = "X";
        } else {
               element.innerHTML = "O";
        }
        turn += 1;
    }
}