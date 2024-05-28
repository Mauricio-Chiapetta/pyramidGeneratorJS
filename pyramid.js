// pyramid generator
// you can test different values to generate pyramid by changing the variables below ↓
const character = "*";
const count = 8;//contador começa em 8
const rows = [];
let inverted = false;

function padRow(rowNumber, RowCount) {
    return " ".repeat(RowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(RowCount - rowNumber);

}

// TODO:use a different type of loop
for (let i = 1; i <= count; i++) {

    if (inverted) {
        rows.unshift(padRow(i, count))//inverted pyramid
    } else {
        rows.push(padRow(i, count))//normal pyramid

    }

}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}
console.log(result)



// outras formas que o loop pode ser usado :)
// differents ways to use loops("while" and "for") to generate the pyramid
// while (rows.length  < count) {
// rows.push(padRow(rows.length + 1 ,count))
// }

// upsidedown pyramid(inverted)
// for(let i = count;i>0;i--){
//     rows.push(padRow(i,count))
// }
