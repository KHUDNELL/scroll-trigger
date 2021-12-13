import './App.css';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const titleRef = useRef();

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 500,
      scrollTrigger: {
        trigger: titleRef.current
      }

    })
  })


  return (
    <div className="App">
      <div className="space"></div>
      <h1 className="title" ref={titleRef}>Hello</h1>
      <div className="space"></div>
    </div>
  );
}

export default App;
