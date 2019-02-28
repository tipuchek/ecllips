

const btnUp = document.querySelector('.btn-scrollUp'); //получаем кнопку " Scroll Up"
//Показываем кнопку при прокрутке к низу страници
document.querySelector('body').onscroll = function (){ 
    if(pageYOffset>=2900){
        btnUp.style.display='block';
    }
    else{
        btnUp.style.display='none';
    }
}
//прокручивам страницу в вверх при клике 
btnUp.onclick = function(){
    let interval = setInterval(function(e){
        let res = pageYOffset;
        res=res-200;
        if(res<=0){
            res = 0;
            clearInterval(interval);
        }
        window.scrollTo(0,res);
    },20)
 
}

//=====Contact us button====
const wrap = document.querySelector('.wrapper');
const btnUs = document.querySelector('.btn-contactUs');
//позиционируем кнопку по правому краю Contact Us относительно блока .wrapper
function posContactUs(){
    let coord = (window.innerWidth - wrap.clientWidth)/2-68;
    if(window.innerWidth > wrap.clientWidth){
        btnUs.style.right=`${coord}px`;
    }
    
    else{
        btnUs.style.right=`px` ;
    }
    
    console.log(window.innerWidth);
    console.log(wrap.clientWidth);
    console.log(coord)
    console.log("==============")
}

posContactUs();//позиция при начальной загрузке
window.onresize = posContactUs; //новая позиция при изменении размера екрана
//==end======