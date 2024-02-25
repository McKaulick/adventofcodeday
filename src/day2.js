function getPossibility (gameDeck) { 

    var elfBag = { red: 12, green: 13, blue: 14 };
    for (var hands in gameDeck) {
        var deck = [];
        deck = gameDeck[hands].split(",");

        for (var i in deck) {
            deck[i] = deck[i].trimStart();
            var [num, color] = deck[i].split(" ");
            console.log(deck[i]);
            if (elfBag[color] < num) {
                return false;
            }
        }
    }
    return true; 
}

const getTotalDay2 = function(stringValues) {

    let total = 0;

    for (let i = 0; i < stringValues.length; i++) {
        if (stringValues[i]) {
            var thisValue = stringValues[i].split(/:|;/); 
            var gameDeck = [];
            for (var element in thisValue) {
                gameDeck.push(thisValue[element]);
            }
            var game = gameDeck.shift();

            if (getPossibility(gameDeck) == true) {
                var [game, nbr] = game.split(" ")
                total = total + Number(nbr);
            }
        }
    }
    return total;
}

export default getTotalDay2;
  