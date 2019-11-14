let fs = require("fs");
let files = fs.readdirSync("./images");
let inter = []
for (file of files) {
    inter.push(file);

}
fs.writeFileSync("index.js", `let imgList = '${(inter)}';
let res = imgList.split(",");
res.shift();
console.log(res);
for (r of res) {
    re = "images/" + r.toString();
    var pics = document.createElement("img");
    pics.setAttribute("src" , re)
    document.body.appendChild(pics);
}
`);
module.exports.inter = inter;
console.log(module.filename);