const header = document.querySelector(".header");
const logo = document.querySelector('[data-logo]');
const mainBlock = document.querySelector(".mainBlock");
const contactBlock = document.querySelector(".contact");
const head = document.querySelector("head");

window.addEventListener('scroll', ()=>{
let windowPos = window.pageYOffset;
let mainBlockOffSet = mainBlock.offsetTop;

if(windowPos > mainBlockOffSet){
    header.style.position = "fixed";
}else{
    header.style.position = "absolute";
}
if(windowPos > mainBlockOffSet && windowPos < contactBlock.offsetTop - header.offsetHeight){
    header.classList.add('redFon');
    logo.classList.add('redFon');
    
}else{
    header.classList.remove('redFon');
    logo.classList.remove('redFon');
}
});