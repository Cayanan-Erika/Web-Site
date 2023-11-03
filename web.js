let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

let btnOpen = document.querySelector(".btnOpen");
let box = document.querySelector(".box");
let body = document.querySelector("body");
let close = document.querySelector(".close");

let contactHead = document.querySelector(".contact-head");
let contactBody = document.querySelector(".contact-body");
let slantLeft = document.querySelector(".slant-left");
let slantRight = document.querySelector(".slant-right");
let full_name = document.querySelector(".full_name");
let contact_num = document.querySelector(".contact_num");
let bodyText = document.querySelector(".body-text");
let btnClose = document.querySelector(".btnClose");

let contactBox = document.querySelector(".contact-box");
let confirmationBox = document.querySelector(".confirmation-box");
let btnSubmit = document.querySelector(".btnSubmit");

btnSubmit.addEventListener("click", ()=>{

    bodyText.innerHTML="Hi, " + full_name.value + "! Stay put for my response. Thank you for your trust and patience!";
    
    contactHead.style.display="none";    
    contactBody.style.display="none";

    slantLeft.style.display="block";    
    slantRight.style.display="block";    
    
    contactBox.style.display="none";
    confirmationBox.style.display="block";
});

btnOpen.addEventListener("click", ()=>{
    btnOpen.style.display="none";
    box.style.display="block";
    body.style.backgroundColor="#222";
});

close.addEventListener("click", ()=>{
    btnOpen.style.display="block";
    box.style.display="none";
    body.style.backgroundColor="#999";
});
btnClose.addEventListener("click", ()=>{
    btnOpen.style.display="block";
    box.style.display="none";
    body.style.backgroundColor="#999";
});


const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

        imageList.addEventListener("scroll", () => {
            updateScrollThumbPosition();
            handleSlideButtons();
        });
    }
    
    const video = document.getElementById('scroll-video');

    function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

    function checkVideo() {
    if (isElementInViewport(video)) {
        video.play();
    } else {
        video.play();
    }
}

window.addEventListener('scroll', checkVideo);
checkVideo(); 


window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);