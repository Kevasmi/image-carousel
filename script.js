const images = document.querySelectorAll('.image-container > img');
const rightArrow = document.querySelector('.right');
const leftArrow = document.querySelector('.left');
let count = 0;

leftArrow.addEventListener('click', () => {
    count--
    if (count <= -1) {
        count = images.length - 1;
        images[count].classList.add('visible');
        images[0].classList.remove('visible');
        return
    }
    images[count].classList.add('visible');
    images[count + 1].classList.remove('visible');
});

rightArrow.addEventListener('click', () => {
    count++
    if (count > images.length - 1) {
        count = 0;
        images[count].classList.add('visible');
        images[images.length - 1].classList.remove('visible');
        return
    }
    images[count].classList.add('visible');
    images[count - 1].classList.remove('visible');
});


console.log(images[0])
console.log(rightArrow)
console.log(leftArrow)