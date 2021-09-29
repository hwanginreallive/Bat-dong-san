const imgs = document.getElementById('imgs')
const btnleft = document.getElementById('left')
const btnright = document.getElementById('right')

let img = document.querySelectorAll('#imgs img')    
let idx = 0
// let interval  = setInterval(run,2000)

function run(){
    idx++
    changeImg();
}
function changeImg(){
    if(idx>img.length-1){
        idx=0
    }else if(idx<0){
        idx = img.length-1
    }
    imgs.style.transform =`translateX(${ -idx*1529}px)`
}

btnleft.addEventListener('click',()=>{
    idx--
    changeImg();
})
btnright.addEventListener('click', () => {
    idx++
    changeImg();
})