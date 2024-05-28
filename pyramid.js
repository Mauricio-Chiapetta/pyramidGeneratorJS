// // pyramid generator
const character = "*";
const count = 8;//contador começa em 8
const rows = [];


function padRow(rowNumber, RowCount) {
    return " ".repeat(RowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(RowCount - rowNumber);

}

// TODO:use a different type of loop
for (let i = 1; i <= count; i++) {
    rows.unshift(padRow(i,count))//inverted pyramid
    rows.push(padRow(i,count))//normal pyramid
}

// differents ways to use loops("while" and "for") to generate the pyramid
// while (rows.length  < count) {
// rows.push(padRow(rows.length + 1 ,count))
// }

// upsidedown pyramid
// for(let i = count;i>0;i--){
//     rows.push(padRow(i,count))
// }

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}
console.log(result)

