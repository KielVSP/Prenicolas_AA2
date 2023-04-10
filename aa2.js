let text = "";
let i = 1;
while (i < 52) {
  text += " " + i;
  i = i + 2;
}
document.getElementById("demo").innerHTML = text;

let text2 = "";
let j = 0;
do {
  text2 += " " + j;
  j = j + 2;
}
while (j < 51);
document.getElementById("demo2").innerHTML = text2;

let text3 = "";

for (let k = 2; k < 4097; i++) {
  text3 += " " + k;
  k = k*2;
}

document.getElementById("demo3").innerHTML = text3;