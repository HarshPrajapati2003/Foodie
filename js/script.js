// Active Nav
let Nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        Nav.classList.add("scroll-on");
    }
    else{
        Nav.classList.remove("scroll-on");
    }
}

// Nav Hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
});

// Counter Design

// document.addEventListener("DOMContentLoaded",()=>{
//     function counter(id,start,end,duration){
//         let obj=document.getElementById(id),
//         current=start;
//         range = end-start,
//         increment = end > start ? 1:-1,
//         step=Math.abs(Math.floor(duration/range)),
//         timer = setInterval(()=>{
//             current += increment;
//             obj.textContent=current;
//             if(current==end){
//                 clearInterval(timer);
//             }   
//         },step);
//     }
//     counter("count1",0,1287,300);
//     counter("count2",50,187,2000);
//     counter("count3",69,107,3000);
//     counter("count4",90,287,305);
// });
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration /  range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 2786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 200, 2110, 3000); });

