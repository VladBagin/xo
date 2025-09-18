const robot = {
    move(){
        if(xo.gameMode === 1 && xo.now === 2){
           this.randomMove(xo.game.free)
        }
    },
    randomMove(str){
        let n = Math.random();
        n *= str.length;
        n = Math.floor(n);
        n = n >= str.length ? (str.length-1) : n;
        n = n < 0 ? 0 : n;
        xo.move(str[n]);        
    },
    click(id){
        if(xo.gameMode === 0 || xo.now === 1) xo.move(id);
    }
}