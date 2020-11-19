var arrayUl = Array.from(document.querySelectorAll('ul li')),
      arrayImg = Array.from(document.querySelectorAll('.ali_img')),
      plas=1;  
var myLi1 = document.getElementById('li1'),
    myLi2 = document.getElementById('li2'),
    myLi3 = document.getElementById('li3'),
    myLi4 = document.getElementById('li4');
    actJs();
function actJs()
{
    if(plas>=5){ plas=1;};
    arrayUl[plas-1].classList.add('actli');
    arrayUl[plas-1].children[0].classList.add('actimg');
    arrayUl[plas-1].children[1].classList.add('acticon');
    arrayImg[plas-1].classList.add('actives');
    
}
