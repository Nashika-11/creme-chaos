const observer = new IntersectionObserver((entries) => {
    for(const entry of entries){
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show')
        }
    }
});

const hiddenElements = document.querySelectorAll('.hidden');
for (const hiddenElement of hiddenElements){
    observer.observe(hiddenElement);
}

const observerAlt = new IntersectionObserver((entries) => {
    for(const entry of entries){
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('slide-in');
        }else {
            entry.target.classList.remove('slide-in')
        }
    }
});

const hiddenAltElements = document.querySelectorAll('.slide-out');
for (const hiddenAltElement of hiddenAltElements){
    observerAlt.observe(hiddenAltElement);
}


const observerImg = new IntersectionObserver((entries) => {
    for(const entry of entries){
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('scale-in');
        }else {
            entry.target.classList.remove('scale-in')
        }
    }
});

const hiddenImgElements = document.querySelectorAll('.scale-out');
for (const hiddenImgElement of hiddenImgElements){
    observerImg.observe(hiddenImgElement);
}

