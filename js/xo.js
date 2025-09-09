const xo = {
    gameMode: 1,
    players: {
        1: {
            name: "Игрок 1",
            mark: 'x',
            wins: 0
        },
        2: {
            name: "Игрок 2",
            mark: 'o',
            wins: 0
        }
    },
    first: 1,
    now: 1,
    draw: 0,
    game:{
        moves: "",
        free: '123456789',
        1: "",
        2: ""
    },
    setMode(mode){
        this.gameMode = mode;
        if(mode === 1){
            document.getElementById('player1').value = 'Робот';
        }
        else{
            document.getElementById('player1').value = '';
        }
        
    },
    showSettings(){
        document.getElementById("settings").style.display = "inline-block";
        document.getElementById("game").style.display = "none";
        document.getElementById("info").style.display = "none";
    },
    showGame(){
       this.players[1].wins = 0;
       this.players[2].wins = 0;
       this.draw = 0;
       this.score();
        for(let i = 1; i <= 2; i++){
            let name = document.getElementById("player" + i).value.slice(0, 20);
            document.getElementById("player" + i).value = name;
            if(name === ''){
                name = (xo.gameMode === 1 && i == 2) ? "Робот" : ("Игрок "+(i));
                this.players[i].name = name;
                document.getElementById("player" + i).value = name;
            }
            else{ 
                this.players[i].name = name;
            }
            document.getElementById("score-name-" + i).innerHTML = name + ":";
        }
        document.getElementById("settings").style.display = "none";
        document.getElementById("game").style.display = "inline-block";
        document.getElementById("info").style.display = "inline-block";
        this.newGame();
    },
    score(){
        document.getElementById("score-value-1").innerHTML = this.players[1].wins;
        document.getElementById("score-value-2").innerHTML = this.players[2].wins;
        document.getElementById("draw").innerHTML = this.draw;
    },
    newGame(){
        document.getElementById("new-game").disabled = true ;
        this.game.moves = "";
        this.game.free = "123456789";
        this.game[1] = "";
        this.game[2] = "";
        this.first = Math.round(Math.random()) + 1;
        this.now = this.first;
        for( let i = 1; i <= 9; i++){
            document.getElementById(i).src = this.src("n");
        }
        document.getElementById("line").style.display = "none";
        this.nextMove();
    },
    nextMove(){
        let message = 'Ходит: ' + this.players[this.now].name + ' ' + this.img(this.now);
        document.getElementById("message").innerHTML = message;
        for(let i = 1; i <= 9; i++){
            document.getElementById(i).classList.remove('x', 'o');
        }
        for(let i of this.game.free){
            document.getElementById(i).classList.add(this.players[this.now].mark);
        }
    },
    move(id){
        if(this.game.free.indexOf(id) === -1) return;
        this.game.moves += id;
        this.game[this.now] += id;
        this.game.free = this.game.free.replace(id, '');
        document.getElementById(id).src = this.src(this.players[this.now].mark);
        for(let i = 1; i <= 9; i++){
            document.getElementById(i).classList.remove('x', 'o');
        }
        this.now = (this.now === 1) ? 2 : 1;
        this.nextMove();
    },
    src(k){
        if(k === 'n') return "img/mark/n.svg";
        else if(k === 'x')  return "img/mark/x.svg";
        else if(k === 'o')  return "img/mark/o.svg";
        else return "img/lines/" + k +".svg";
    },
    img(n){
        return '<img src = "' + this.src(this.players[n].mark) +'" />';
    }


} 