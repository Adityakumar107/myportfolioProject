var box = document.querySelector("#icon")
var icons = document.querySelector(".menu-line")
var section = document.querySelector("#menu-show")
var value = 0
var tl = gsap.timeline()
   tl.from(section,{
   x:50,
   duration:.5,
   opacity:0
})
    tl.from("#menu-show a", {
      x: 50,
      duration:.5,
      stagger:.5,
      opacity:0,
   })
     tl.from(".links svg", {
      y: 50,
      duration:.5,
      opacity:0,
   })
   tl.pause()
box.addEventListener("click", () => {
   if (value == 0) {
      box.style.backgroundColor = "rgba(0, 0, 0, 0.25)"
      section.style.visibility = "initial"
      box.innerHTML = `<i class="ri-close-fill"></i>`
      value = 1
      tl.play()
   }
   else {
      box.style.backgroundColor = "#edebeb"
      box.innerHTML = `<i class="ri-menu-line"></i>`
      value = 0
      tl.reverse()
   }
})



var roundenimgdiv1 = document.querySelector(".img1")
var fullimg1 = document.querySelector(".full-img1")


roundenimgdiv1.addEventListener("mousemove", (dets) => {
   fullimg1.style.visibility = "initial"
   gsap.from(fullimg1, {
      x: dets.x / 12,
      y: dets.y / 12,
      duration: .3,
      ease: "power4.out"
   })
})
roundenimgdiv1.addEventListener("mouseleave", () => {
   fullimg1.style.visibility = "hidden"
})

var roundenimgdiv2 = document.querySelector(".img2")
var fullimg2 = document.querySelector(".full-img2")
roundenimgdiv2.addEventListener("mousemove", (dets) => {
   fullimg2.style.visibility = "initial"
   gsap.from(fullimg2, {
      x: dets.x / 12,
      y: dets.y / 12,
      duration: .3,
      ease: "power4.out"
   })
})
roundenimgdiv2.addEventListener("mouseleave", () => {
   fullimg2.style.visibility = "hidden"
})


var roundenimgdiv3 = document.querySelector(".img3")
var fullimg3 = document.querySelector(".full-img3")
roundenimgdiv3.addEventListener("mousemove", (dets) => {
   fullimg3.style.visibility = "initial"
   gsap.from(fullimg3, {
      x: dets.x / 12,
      y: dets.y / 12,
      duration: .3,
      ease: "power4.out"
   })
})
roundenimgdiv3.addEventListener("mouseleave", () => {
   fullimg3.style.visibility = "hidden"
})

gsap.from("#full-intier h1",{
   y:100,
   duration:.6,
   delay:.4,
   opacity:0
})
