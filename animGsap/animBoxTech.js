import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function animBoxTech() {
  gsap.fromTo(
    ".boxCont",
    {
      opacity: 0,
    
    },
    {
      opacity: 1,
     
  
      duration: 0.5,
      scrollTrigger: {
        trigger: ".boxEnd",
        start: "top 50%",
        end: "top 30% ",
      },
    }
  );
  gsap.fromTo(
    ".boxCont2",
    {
        opacity: 0,
     
        },
        {
        opacity: 1,
     
        duration: 0.5,
        scrollTrigger: {
  
            trigger: ".boxCont",
            start: "top 40%",
            end: "top 30% ",
        },
    })
}
