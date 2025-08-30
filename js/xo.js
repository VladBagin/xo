const xo = {
    gameMode: 1,
    players: {
        0: {
            name: "Игрок 1",
            mark: 'x',
            wins: 0
        },
        1: {
            name: "Игрок 2",
            mark: 'o',
            wins: 0
        }
    },
    first: 0,
    now: 0,
    game:{
        moves: "",
        free: '123456789',
        0: "",
        1: ""
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
    setName(){
        for(let i = 0; i < 2; i++){
            let name = document.getElementById("player" + i).value;
            if(name === ''){
                this.players[i].name = "Игрок "+(i + 1);
                document.getElementById("player" + i).value = "Игрок "+(i + 1);
            }
            else{ 
                this.players[i].name = name;
            }
        }
        document.getElementById("settings").style.display = "none";
        document.getElementById("game").style.display = "inline-block";
        document.getElementById("info").style.display = "inline-block";
    }
} 