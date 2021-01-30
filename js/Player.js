class Player {
    constructor(playName, playID, playColor, active = false) {
        this.playName = playerName;
        this.playerID = playerID;
        this.playerColor = playerColor;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    /**
        * Creates Token Object for Player
        * @param {integer} num - Number of token objects to be created. 
     */

    createTokens(num){
        const tokens = [];

        for(let i = 0; i < num.length; i++) {
            let token = new Token(i, this);
            tokens.push(token);
        }

        return tokens;
    }
}