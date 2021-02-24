module.exports = function check(str, bracketsConfig) {
    let pairBrackets  = [];

    bracketsConfig.forEach(item => {
        pairBrackets.push(item.join(''));
    });

    for (let i = 0; i < pairBrackets.length; i++) {
        if (str.includes(pairBrackets[i])) {
            str = str.replace(pairBrackets[i], "");
            i = -1;
        }
    }
    
    return str.length === 0 ? true : false;
}  
