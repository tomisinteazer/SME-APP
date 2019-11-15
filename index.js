let imgList = '.DS_Store,IMG_20191109_123705_0.jpg,IMG_20191109_123706_9.jpg,IMG_20191109_123708_3.jpg,IMG_20191109_123710_2.jpg,IMG_20191109_123713_3.jpg,IMG_20191109_123715_5.jpg,IMG_20191109_123718_0.jpg,IMG_20191109_123735_0.jpg,IMG_20191109_123736_1.jpg,IMG_20191109_123822_8.jpg,IMG_20191109_123824_2.jpg';
let res = imgList.split(",");
res.shift();
console.log(res);
for (r of res) {
    re = "images/" + r.toString();
    var pics = document.createElement("img");
    pics.setAttribute("src" , re)
    document.body.appendChild(pics);
}
