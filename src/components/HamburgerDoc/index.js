import React, { useRef, useCallback, useState, useEffect } from 'react';
import '../Hamburger/hamburger.css';

const HamburgerDoc = () => {

  const [open, setOpen] = useState(false);

  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);


  const toggleMenu = useCallback(() => {
    const mobileSide = document.querySelector('.sidebar-mobile');
    if (!open) {
      mobileSide.animate([
        { transform: "translateX(0%)" }
      ], {
        duration: 300,
        fill: "forwards",
        easing: "ease-in-out"
      })
      line1.current.animate([
        { transform: "translateY(6px) rotate(-45deg)" }
      ], {
        duration: 300,
        fill: "forwards",
        easing: "ease-in-out"
      })
      line3.current.animate([
        { transform: "translateY(-6px) rotate(45deg)" }
      ], {
        duration: 300,
        fill: "forwards",
        easing: "ease-in-out"
      })
      line2.current.animate([
        { opacity: 0 }
      ], {
        duration: 200,
        easing: "ease-in-out",
        fill: "forwards",
      })
    } else {
      mobileSide.animate([
        { transform: "translateX(-100%)" },
      ], {
        duration: 300,
        fill: "forwards",
        easing: "ease-in-out"
      })
      line1.current.animate([
        { transform: "translateY(0px) rotate(0deg)" }
      ], {
        duration: 300,
        fill: "forwards",
        easing: "ease-in-out"
      })
      line3.current.animate([
        { transform: "translateY(0px) rotate(0deg)" }
      ], {
        duration: 300,
        fill: "forwards",
        easing: "ease-in-out"
      })
      line2.current.animate([
        { opacity: 1 }
      ], {
        duration: 200,
        delay: 100,
        easing: "ease-in-out",
        fill: "forwards",
      })
    }
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.classList.add('menu-doc-open');
    } else {
      document.body.classList.remove('menu-doc-open');
    }
  }, [open])

  return (
    <>
      <button className="hamburger-button" onClick={toggleMenu}>
        <div className="hamburger-line-01" ref={line1}></div>
        <div className="hamburger-line-02" ref={line2}></div>
        <div className="hamburger-line-03" ref={line3}></div>
      </button>
    </>
  )

}


export default HamburgerDoc;