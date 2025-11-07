const robot = {
    debuts: {
        "":"13579",
        "1": "5",
        "12": "457",
        "13": "47",
        "15": "9",
        "16": "357",
        "19": "37",
        "159": "2468",
        "21": "9",
        "24": "5",
        "27": "1",
        "5": "1379",
        "52": "134679"
    },
    level: 70,
    turn: "_369258147",
    mirror: "_321654987",
    transform(key, type){
        let newKey = "";
        let newValye = "";
        for(let i of key){
            newKey += type[i];
        }
        for(let i of this.debuts[key]){
            newValye += type[i]
        }
        this.debuts[newKey] = newValye;
        return newKey;
    },
    allDebuts(){
        let keys = Object.keys(this.debuts);
        for(let key of keys){
            //console.log(key)
            this.transform(key, this.mirror);
            let newKey = key;
            for(let i = 0;i < 3; i++){
                newKey = this.transform(newKey, this.turn);
                this.transform(newKey, this.mirror);
            }
        }
    },
    move(){
        if(Math.random() * 100 > this.level){
            this.randomMove(xo.game.free);
            return;
        }
        if(this.debuts[xo.game.moves] !== undefined){
            this.randomMove(this.debuts[xo.game.moves])
            return;
        }
        if(this.rule1()) return;
        if(this.rule2()) return;
        this.randomMove(xo.game.free)
    },
    setLevel(sing){
        let addition = (100 - this.level) / 4;
        addition = (addition < 0) ? 0 : addition;
        addition = (addition > 10) ? 10 : addition;
        addition *= sing;
        this.level += addition;
        this.level = (this.level < 0) ? 0 : this.level;
        this.level = (this.level > 100) ? 100 : this.level;
        this.level = Math.round(this.level)
        document.getElementById("level").innerHTML = this.level
    },
    randomMove(str){
        let n = Math.random();
        n *= str.length;
        n = Math.floor(n);
        n = n >= str.length ? (str.length-1) : n;
        n = n < 0 ? 0 : n;
        xo.move(str[n]);        
    },
    rule1(){
        for(let player = 2; player > 0; player--){
            let variants = "";
            for(let line in xo.lines){
                let counterMark = 0;
                let counterFree = 0;
                let free;
                for(let i of xo.lines[line]){
                    if(xo.game[player].indexOf(i) !== -1) counterMark++;
                    if(xo.game.free.indexOf(i) !== -1){
                        counterFree++;
                        free = i;
                    }
                }
                if(counterMark === 2 && counterFree === 1) variants += free;
            }
            if(variants !== ""){
                this.randomMove(variants);
                return true;
            }
        }
        return false;
    },
    rule2(){
        for(let player = 2; player > 0; player--){
            let variants = "";
            let allFree = {};
            for(let n of xo.game.free){
                allFree[n] = 0;
            }
            for(let line in xo.lines){
                let counterMark = 0;
                let counterFree = "";
                for(let n of xo.lines[line]){
                    if(xo.game[player].indexOf(n) !== -1) counterMark++;
                    if(xo.game.free.indexOf(n) !== -1){
                        counterFree += n;
                    }
                }
                if(counterMark === 1 && counterFree.length === 2){
                    for(let n of counterFree){
                        allFree[n]++;
                    }
                }
            }
            for(let i in allFree){
                if(allFree[i] > 1) variants += i;
            }
            if(variants !== ""){
                this.randomMove(variants);
                return true;
            }
        }
        return false;
    }
}
robot.allDebuts();