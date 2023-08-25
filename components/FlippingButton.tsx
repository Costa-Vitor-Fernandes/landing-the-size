import { useState } from "react";
import { gsap } from "gsap";

export const FlippingButton = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [email,setEmail] = useState('')
  
    const handleButtonClick = () => {
      const tl = gsap.timeline();
      
      // Flip animation
      tl.to('.flip-container', { rotateY: isFlipped ? 0 : 180, duration: 0.5 });
  
      setIsFlipped(!isFlipped);
    };
  

    const submitFunction = async (email:string) =>{
      if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)){
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(email),
        });
        setEmail('')

        if(!response.ok){
          console.log('error')
        }
        console.log(response)
      }
      else console.log('error')
    }

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
                onChange={(e)=>setEmail(e.target.value)}
                />
              <button className="bg-green-400 rounded-lg z-30 py-2 px-2 ml-1" onClick={()=>submitFunction(email)}>Enviar</button>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  };