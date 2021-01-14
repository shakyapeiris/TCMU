const nav = document.querySelector(".navbar");
const tl = new TimelineMax();
const paragraph = document.querySelector(".mainPara");
tl.fromTo(paragraph,0.5, {y:"50", opacity:0}, {y:0, opacity:"1"});
tl.fromTo(nav, 2, {y:'-100', opacity:0}, {y:0, opacity:'1'})
  

new fullpage ('#fullpage', {
    autoScrolling:true,
    navigation:true,
    onLeave:(origin,destination,direction) => {
        const section = destination.item;
        const para = section.querySelector("p");
        const tl = new TimelineMax({delay:0.5});

        tl.fromTo(para, 0.5, {y:'50',opacity:0},{y:'0',opacity:1});
        
    if (destination.index === 2){
        const table = document.querySelector(".lg");
        const chair = document.querySelectorAll(".chair");
        tl.fromTo(table, 0.7, {x:'-110', opacity:0}, {x:0, opacity:1})
        .fromTo(chair, 1, {x:'110'}, { ease: Power4.easeOut, x:'-300'})
            .fromTo(chair[0],2,{opacity:1}, {opacity:1})
            .fromTo(chair[1],2,{opacity:0}, {opacity:1})
            .fromTo(chair[2],2,{opacity:0}, {opacity:1});
    }
    if (destination.index === 3){
        const n = document.querySelectorAll(".otherPara");
        const b = document.querySelectorAll(".otherPara1");
        const tl = new TimelineMax();

        tl.fromTo(n,0.5,{y:"50", opacity:0},{y:0, opacity:"1"})
        .fromTo(b,0.5,{y:"50", opacity:0},{y:0, opacity:"1"});

    }
    }
    
})