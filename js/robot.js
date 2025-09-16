const robot = {
    random(str){
        let n = Math.random();
        n *= str.length;
        n = Math.floor(n);
        n = n >= str.length ? (str.length-1) : n;
        n = n < 0 ? 0 : n;
        return str[n];
    }
}