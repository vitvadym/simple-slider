const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const dots = document.querySelectorAll(".dot");

let slidePosition = 0;

const setActiveDot = () => {
  dots.forEach((dot, index) => {
    if (slidePosition === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

const nextSlide = () => {
  if (slidePosition < images.length - 1) {
    slidePosition++;
    slider.style.transform = `translateX(-${slidePosition * 900}px)`;
  } else {
    slidePosition = 0;
    slider.style.transform = `translateX(0px)`;
  }

  setActiveDot();
  console.log(slidePosition);
};

const prevSlide = () => {
  if (slidePosition <= 0) {
    slidePosition = images.length - 1;
    slider.style.transform = `translateX(-${slidePosition * 900}px)`;
  } else {
    slidePosition--;
    slider.style.transform = `translateX(-${slidePosition * 900}px)`;
  }

  setActiveDot();
  console.log(slidePosition);
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slidePosition = index;
    slider.style.transform = `translateX(-${slidePosition * 900}px)`;
    setActiveDot();
  });
});

right.addEventListener("click", nextSlide);
left.addEventListener("click", prevSlide);
