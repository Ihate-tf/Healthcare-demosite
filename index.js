const observer = new IntersectionObserver((entries) => {
    entries.forEach((enrty) => {
        if(enrty.isIntersecting){
            enrty.target.classList.add('show');
        } 
        // else{
        //     enrty.target.classList.remove('show');
        // }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));