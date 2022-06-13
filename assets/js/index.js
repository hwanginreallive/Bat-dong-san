$('.fade').slick();


    const bar = document.querySelector(".bar")
    const list = document.querySelector(".header--list")
    bar.addEventListener('click',()=>{
        list.classList.toggle('header--list-active')
        bar.classList.toggle('bar-active')

    });
    

