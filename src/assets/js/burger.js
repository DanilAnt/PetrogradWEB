"use strict"
const body = document.querySelector("body");
const burger = document.getElementById("burger");

burger.addEventListener('click', () =>{
    body.classList.toggle('showSidebar');
})
