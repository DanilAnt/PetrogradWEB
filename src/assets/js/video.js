"use strict"
const mainContent = document.querySelectorAll('.main__content');
const windowHeight = document.documentElement.clientHeight;

function showContent(){
    mainContent.forEach(content => {
        const parentTopOffSet = content.parentElement.offsetTop;
        const parentHeight = content.parentElement.clientHeight;
        const windowHeight = document.documentElement.clientHeight;
        const yOffSet = window.pageYOffset;
        if(yOffSet + windowHeight > parentTopOffSet && yOffSet < parentTopOffSet + parentHeight){
            content.classList.remove("hided");
            if(yOffSet < parentTopOffSet ){
                let translateY =150*(1 -(yOffSet + windowHeight - parentTopOffSet)/(windowHeight));
                let translateX =50*(1 -(yOffSet + windowHeight - parentTopOffSet)/(windowHeight));
                let rotate = 90*(1 -(yOffSet + windowHeight - parentTopOffSet)/(windowHeight));
                content.style.transform = `translate3d(${translateX}%, ${translateY}vh, 0) rotate(${rotate}deg)`;
                
            }else if(yOffSet < parentTopOffSet + parentHeight && yOffSet > parentTopOffSet + parentHeight - windowHeight){
                let translateY =-150*((yOffSet + windowHeight - parentTopOffSet - parentHeight)/(windowHeight));
                let translateX =-50*((yOffSet + windowHeight - parentTopOffSet - parentHeight)/(windowHeight));
                let rotate = -90*((yOffSet + windowHeight - parentTopOffSet - parentHeight)/(windowHeight));
                content.style.transform = `translate3d(${translateX}%, ${translateY}vh, 0) rotate(${rotate}deg)`;
                
            }else{
                content.style.transform = `translate3d(0%, 0vh, 0) rotate(0deg)`
            }
        }else{
            content.classList.add('hided');
        }
        let translateY =150*(1 -(yOffSet + windowHeight - parentTopOffSet)/(windowHeight));
        
    });
};

window.addEventListener('scroll', event => {
    showContent();
})