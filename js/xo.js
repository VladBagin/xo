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
        
    }
} 