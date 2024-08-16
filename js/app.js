const parallax_el = document.querySelectorAll(".parallax");


let xValue = 0,
    yValue = 0; 

window.addEventListener("mousemove", (e) => {

    xValue =  e.clientX - window.innerWidth/2;
    yValue =  e.clientY - window.innerHeight/2;

    console.log(xValue, yValue)

    parallax_el.forEach(el => {

        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;

        if (yValue < 0 ){
            speedy = 0
        }

        transX = -xValue * speedx
        transY = -yValue * speedy

        el.style.transform = `translateX(calc(-50% + ${transX}px)) translateY(calc(-100% + ${transY}px))`;
    });
});

 