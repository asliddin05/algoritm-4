let str = prompt("Enter a random word for find a symbol")
let symbol = "";
let word = "";
let number = "";
for(let i = 0; i < str.length; i++){
    if(str[i] == '~' || str[i] == '`' || str[i] == '!' || str[i] == '@' || str[i] == '#' || str[i] == '$' || str[i] == '%' || str[i] == '^' || str[i] == '&' || str[i] == '*' || str[i] == '(' || str[i] == ')' || str[i] == '-' || str[i] == '_' || str[i] == '+' || str[i] == '=' || str[i] == '[' || str[i] == '{' || str[i] == ']' || str[i] == '{' || str[i] == '}' || str[i] == ':' || str[i] == ';' || str[i] == '"' || str[i] == "'" || str[i] == '|' || str[i] == `/` || str[i] == '?' || str[i] == '<' || str[i] == '>' || str[i] == ',' || str[i] == '.') {
        symbol += str[i];
    } else if (str[i] == Number(str[i])){
        number += str[i];
    }
     else {
        word += str[i];
    }
}
if(!symbol) {
    console.log("Symbols not found!");
} else {
    console.log("Symbol: " + symbol);
}
if(!word) {
    console.log("Strings not found!")
} else {
    console.log("Strings: " + word);
}
if(!number) {
    console.log("Numbers not found!");
} else {
    console.log("Numbers: " + number);
}
