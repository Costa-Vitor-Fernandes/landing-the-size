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
      setEmail('')
      if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)){
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(email),
        });
        
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
            <div className={`absolute flex justify-center w-[100%] top-0 bg-white  shadow-2xl px-1 py-7 rounded-md  ${isFlipped ? '' : 'hidden'} `}
            //  onClick={handleButtonClick}
             >
              <form className="max-w-[100%] shadow-2xl "  onSubmit={(e)=>{e.preventDefault();
                submitFunction(email)}}>

              <div className=" max-w-[100%] shadow-2xl ">
                <div className="flex max-w-[100%] justify-between">
      
              <input
                type="email"
                placeholder="Email"
                className="input-field pl-2  z-30 max-w-[65%]"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                />
              <button className="bg-green-400 rounded-lg z-30 py-2 px-2 ml-1" type='submit'>Enviar</button>
                </div>
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  };