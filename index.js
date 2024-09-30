const response = await fetch("https://runtime.fivem.net/doc/natives.json");
const responseJSON = await response.json();

let sum = 0;
for (let key in responseJSON) {
    console.log(key, Object.keys(responseJSON[key]).length);
    sum += Object.keys(responseJSON[key]).length;
}
console.log(`There are ${Object.keys(responseJSON).length} categories and ${sum} natives`);