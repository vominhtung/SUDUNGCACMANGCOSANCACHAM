let str = prompt("nhap chuoi");
let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let LOWER = 'abcdefghijklmnopqrstuvwxyz';
let result = [];

for (let x = 0; x < str.length; x++) {
    if (UPPER.includes(str[x])) {
        result.push(str[x].toLowerCase());
    } else if (LOWER.includes(str[x])) {
        result.push(str[x].toUpperCase());
    } else {
        result.push(str[x]);
    }
}
let rs=result.join('');
console.log(rs);

document.getElementById('ketqua').innerHTML=rs ;