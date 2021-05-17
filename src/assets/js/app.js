"use strict"
const sourses = {
    mainBlocks: document.querySelectorAll('.mainBlock'),
    
    scrolledLines: document.querySelectorAll(`[data-scrolledLine]`),
   
    windowHeight: document.documentElement.clientHeight,
    setWindowHeight(height) {
        this.windowHeight = height;
    },
    getMainBlocks() {
        return this.mainBlocks;
    },
    getWindowHeight() {
        return this.windowHeight;
    },
    getScrolledLines() {
        return this.scrolledLines;
    },
};
const body = document.querySelector("body");

setScrollElements();

let scrollPos1 = 0 , scrollPos2 = 0, deltaPos = 0;
window.addEventListener('scroll', event => {
    scrollPos1 = scrollPos2;
    scrollPos2 = window.pageYOffset;
    deltaPos = scrollPos2 - scrollPos1;
    setScrollElements();
    setScrolledLinesInCenter(sourses.getMainBlocks()[0]);
    setScrolledLinesInCenter(sourses.getMainBlocks()[1]);
    scrollElements(deltaPos);
    body.classList.remove('showSidebar');
    
});

window.addEventListener('resize', () => {
    sourses.setWindowHeight(document.documentElement.clientHeight);
});


function setScrolledLinesInCenter(mainBlock) {
    const yOffSet = window.pageYOffset;
    const windowHeight = sourses.getWindowHeight();
    
    const mainBlockOffSet = mainBlock.offsetTop;
    const scrolledLines = mainBlock.querySelectorAll(`[data-scrolledLine]`);
    
    if(document.documentElement.clientWidth > 768){
        const windowCenterPos = yOffSet - mainBlockOffSet + windowHeight/2 - 200;
        for (let i = 0 ; i < scrolledLines.length ; i++){
            scrolledLines[i].style.top = `${windowCenterPos + i*200}px`;
        }
    }else{
        const windowCenterPos = yOffSet - mainBlockOffSet + windowHeight/2 - 250;
        for (let i = 0 ; i < scrolledLines.length ; i++){
            scrolledLines[i].style.top = `${windowCenterPos + i*400}px`;
        }
    }
};

function scrollElements(deltaPos){
    const scrolledLines = sourses.getScrolledLines();
    for (let i = 0 ; i < scrolledLines.length ; i++){
        if(window.pageYOffset+window.innerHeight >=  scrolledLines[i].parentElement.offsetTop){

        if(isEven(i)){
            for(let j=0; j < scrolledLines[i].children.length; j++){
                let leftOffSet = getComputedStyle(scrolledLines[i].children[j]).left;
                scrolledLines[i].children[j].style.left = `${parseInt(leftOffSet) - deltaPos * 1.5}px`;
                
            }
        }else{
            for(let j=0; j < scrolledLines[i].children.length; j++){
                let leftOffSet = getComputedStyle(scrolledLines[i].children[j]).right;
                scrolledLines[i].children[j].style.right = `${parseInt(leftOffSet) - deltaPos * 1.5}px`;
            }
        }
    }
    }
}

function setScrollElements(){
    if(window.pageYOffset < 50){
    const scrolledLines = sourses.getScrolledLines();

    for (let i = 0 ; i < scrolledLines.length ; i++){
            let children = scrolledLines[i].children[0].cloneNode(true);        
            scrolledLines[i].innerHTML = '';
            if(isEven(i)){
                for(let j = 0 ; j < 9 ;j++){
                    scrolledLines[i].append(children.cloneNode(true));
                    let childWidthProcent = scrolledLines[i].children[j].offsetWidth / window.innerWidth;
                    scrolledLines[i].children[j].style.left = `${100 + j * childWidthProcent*250}%`;
                }
            }else{
                for(let j = 0 ; j < 9 ;j++){
                    scrolledLines[i].append(children.cloneNode(true));
                    let childWidthProcent = scrolledLines[i].children[j].offsetWidth / window.innerWidth;
                    scrolledLines[i].children[j].style.right = `${100 + j * childWidthProcent*250}%`;
                } 
            }
        }
    }
};

function isEven(number) {
    return (number % 2 == 0);
};
