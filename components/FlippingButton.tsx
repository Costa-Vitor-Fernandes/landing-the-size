import { useState } from "react";
import { gsap } from "gsap";
export const FlippingButton = () => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleButtonClick = () => {
      const tl = gsap.timeline();
      
      // Flip animation
      tl.to('.flip-container', { rotateY: isFlipped ? 0 : 180, duration: 0.5 });
  
      setIsFlipped(!isFlipped);
    };
  
    return (
      <div className=" mb-10">
        <div className="flip-container perspective-1000">
          <div className={`flip-button ${isFlipped ? 'flipped' : ''}`}>
            <div className="front-content text-center">
              <button
                className="text-white bg-black rounded-lg shadow-2xl px-9 py-9 "
                onClick={handleButtonClick}
              >
                Agende Uma Demonstração
              </button>
            </div>
            <div className={`absolute top-0 bg-white  shadow-2xl px-3 py-7 rounded-md  ${isFlipped ? '' : 'hidden'} `}
            //  onClick={handleButtonClick}
             >
              <div className="bg-white shadow-2xl">
                <div className="flex ">
  
              <input
                type="email"
                placeholder="Seu melhor email"
                className="input-field pl-2  z-30"
                />
              <button className="bg-green-400 rounded-lg z-30 py-2 px-2 ml-1" >Enviar</button>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  };