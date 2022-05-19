"use strict";

const carousel1Buttons = document.querySelectorAll(".carousel-btn1");
const carousel1ButtonLeft = document.querySelector(".btn-left1");
const carousel1ButtonRight = document.querySelector(".btn-right1");
const carousel1Image1 = document.querySelector(".carousel1-image-1");
const carousel1Image2 = document.querySelector(".carousel1-image-2");
const carousel1Image3 = document.querySelector(".carousel1-image-3");
const numberOfImages1 = document.querySelectorAll(".carousel1-image").length;
let imageIndex1 = 1;
let translateX1 = 0;

carousel1ButtonLeft.addEventListener("click", slideLeft);
carousel1ButtonRight.addEventListener("click", slideRight);

function slideLeft() {
  if (imageIndex1 !== 1) {
    imageIndex1--;
    translateX1 += 100;
    carousel1Image1.style.transform = `translateX(${translateX1}%)`;
    carousel1Image2.style.transform = `translsateX(${translateX1}%)`;
    carousel1Image3.style.transform = `translateX(${translateX1}%)`;
  }
}

function slideRight() {
  if (imageIndex1 !== numberOfImages1) {
    imageIndex1++;
    translateX1 -= 100;
    carousel1Image1.style.transform = `translateX(${translateX1}%)`;
    carousel1Image2.style.transform = `translateX(${translateX1}%)`;
    carousel1Image3.style.transform = `translateX(${translateX1}%)`;
  }
}
