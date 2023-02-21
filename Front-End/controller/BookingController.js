function rollDice() {
    return "B-" + (Math.floor(Math.random() * 100000) + 5);
}

var bid = rollDice();

$("#bId").val(bid);