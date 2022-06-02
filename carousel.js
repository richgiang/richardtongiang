"use strict";

const carouselButtons = document.querySelectorAll(".carousel-btn");
const carouselButtonLeft = document.querySelector(".btn-left");
const carouselButtonRight = document.querySelector(".btn-right");
const carouselImage1 = document.querySelector(".carousel-image-1");
const carouselImage2 = document.querySelector(".carousel-image-2");
const carouselImage3 = document.querySelector(".carousel-image-3");
const carouselImage4 = document.querySelector(".carousel-image-4");
const carouselImage5 = document.querySelector(".carousel-image-5");
const carouselImage6 = document.querySelector(".carousel-image-6");
const numberOfImages = document.querySelectorAll(".carousel-image").length;
let imageIndex = 1;
let translateX = 0;

carouselButtonLeft.addEventListener("click", slideLeft);
carouselButtonRight.addEventListener("click", slideRight);

function slideLeft() {
  if (imageIndex !== 1) {
    imageIndex--;
    translateX += 100;
    carouselImage1.style.transform = `translateX(${translateX}%)`;
    carouselImage2.style.transform = `translateX(${translateX}%)`;
    carouselImage3.style.transform = `translateX(${translateX}%)`;
    carouselImage4.style.transform = `translateX(${translateX}%)`;
    carouselImage5.style.transform = `translateX(${translateX}%)`;
    carouselImage6.style.transform = `translateX(${translateX}%)`;
  }
}

function slideRight() {
  if (imageIndex !== numberOfImages) {
    imageIndex++;
    translateX -= 100;
    carouselImage1.style.transform = `translateX(${translateX}%)`;
    carouselImage2.style.transform = `translateX(${translateX}%)`;
    carouselImage3.style.transform = `translateX(${translateX}%)`;
    carouselImage4.style.transform = `translateX(${translateX}%)`;
    carouselImage5.style.transform = `translateX(${translateX}%)`;
    carouselImage6.style.transform = `translateX(${translateX}%)`;
  }
}
