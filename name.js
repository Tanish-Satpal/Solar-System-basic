function getdate(){
    document.getElementById("Date").innerHTML=new Date().toDateString();
}
var images=[
"https://i.pinimg.com/564x/69/bb/6e/69bb6ec8baac6d7fa05f4320020964bb.jpg","https://i.ytimg.com/vi/jGqxZa1fLbk/hqdefault.jpg","https://rukidn.me/wp-content/uploads/2020/01/Screenshot_174.png","https://www.nasa.gov/sites/default/files/thumbnails/image/654284main_i1220bw.jpg","https://i.pinimg.com/originals/4e/56/40/4e5640755fe6aed82f7e9317a794d893.jpg","https://i.gzn.jp/img/2019/12/23/stellar-engines/s13.jpg","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dyson-sphere-alien-mega-structure-around-a-star-royalty-free-image-1615333415.","https://laughingsquid.com/wp-content/uploads/2018/04/black-hole-mirror.png"
];
var indexvalue=0;
function Next(){
  document.getElementById("images").src=img2[indexvalue];
  indexvalue++;
  if(indexvalue>8){
    indexvalue=0;
  }
}