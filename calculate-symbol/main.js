let str = prompt("Enter a random word for calculate")
let count = 0;
for(let i = 0; i < str.length; i++){
    if(str[i] == '~' || str[i] == '`' || str[i] == '!' || str[i] == '@' || str[i] == '#' || str[i] == '$' || str[i] == '%' || str[i] == '^' || str[i] == '&' || str[i] == '*' || str[i] == '(' || str[i] == ')' || str[i] == '-' || str[i] == '_' || str[i] == '+' || str[i] == '=' || str[i] == '[' || str[i] == '{' || str[i] == ']' || str[i] == '{' || str[i] == '}' || str[i] == ':' || str[i] == ';' || str[i] == '"' || str[i] == "'" || str[i] == '|' || str[i] == `/` || str[i] == '?' || str[i] == '<' || str[i] == '>' || str[i] == ',' || str[i] == '.') {
        count++;
    }
}
if(!count){
    console.log("Symbols not found in your words, sorry...")
} else if(count == 1){
    console.log("There is " + count + " symbols in your word");
} else {
    console.log("There are " + count + " symbols in your word");
}