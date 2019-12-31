//this the server side version of the code and much cleaner implementation


// const images = require('./fileGetter.js');
// let res = images.inter;
// for (r of res) {
//     re = `images/${r}`;
//     var pics = document.createElement("img");
//     pics.setAttribute("src", re)
//     document.body.appendChild(pics);
// };

let image= document.getElementsByTagName("img");
pic = []

for( imag of image ){
    pic.push(imag)
}
pic.forEach(e => { 
    e.onclick = () =>{
       let value = `${e.src}`
       let key = pic.indexOf(e).toString()
       localStorage.setItem(key,value)
       console.log(key);
       
       
        };
        
});
function clear() {
  localStorage.clear()    
}

    

