 function animate(){
  var tl =gsap.timeline()
  tl.from("h1 span",{
  y:100,
  delay:1,
  duration:0.2,
  opacity:0,
  stagger:0.1
  })
  tl.to("h1 span",{
      y:-100,
      duration:0.2,
      opacity:0,
      stagger:0.1
      })
  tl.to(".container ",{
          duration:0.7,
          y:-1000,
          display:"none"
          })
  
  
  
  
          var swiper = new Swiper(".mySwiper", {
              slidesPerView: 4,
              centeredSlides: true,
              spaceBetween: 30,
              loop: true,
              autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
                },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            });
}
animate();
var btn =document.querySelector(".c1 button");
var cont =document.querySelector(".c1");
var cart=document.querySelector("#cart");
var arr=[];
var cl = document.querySelectorAll(".gift");
