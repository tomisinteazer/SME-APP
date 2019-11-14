/*this the server side version of the code and much cleaner implementation */

const images = require('./fileGetter.js');
let res = images.inter;
for (r of res) {
    re = `images/${r}`;
    var pics = document.createElement("img");
    pics.setAttribute("src", re)
    document.body.appendChild(pics);
}
;