import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import banner from "./banner.svg";

gsap.registerPlugin(ScrollTrigger);

export default function BG() {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const first = self.selector(".first");
      gsap.to(first, {
        y: -450,
        scrollTrigger: {
          trigger: first,
          start: "top top%",
          end: "bottom 50%",
          scrub: true,
          pin: true,
        },
      });
      // const boxes = self.selector('.box');
      // boxes.forEach((box) => {
      //   gsap.to(box, {
      //     x: 450,
      //     scrollTrigger: {
      //       trigger: box,
      //       start: 'bottom bottom',
      //       end: 'top 20%',
      //       scrub: true,
      //       markers: true,
      //       pin: true,
      //     },
      //   });
      // });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <main ref={main}>
      <div className="h-screen flex justify-center items-center flex-col bg-red-600">
        <div className="first">
          <p className="">RONNY</p>
          <p className="">AUTO SERVICE NZ</p>
        </div>
      </div>

      <div className="box second h-screen flex justify-center items-center flex-col bg-blue-400">
        <img src={banner} alt="banner" />
      </div>

      <div className="box third h-screen flex justify-center items-center flex-col text-white bg-yellow-600">
        Book your service and we will get back to you within 24 hours on
        weekdays with an estimated price, drop off- and pick up time.
      </div>

      <div className="box fourth h-screen flex justify-center items-center flex-col text-white bg-green-600">
        <button className="btn btn-primary">BOOK SERVICE</button>
      </div>
    </main>
  );
}
