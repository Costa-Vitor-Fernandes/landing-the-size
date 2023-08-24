import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Roboto } from 'next/font/google';


const roboto = Roboto({ weight: ['300'], subsets: ['latin'] });

const AnimatedText: React.FC = () => {
  const [words, setWords] = useState<string[]>([]);
  const [h2Visible, seth2Visible] = useState(false); // State to control h2 visibility

  useEffect(() => {
    setWords('Decisão segura em cada peça !'.split(' '));
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      words.map((_, index) => `#word-${index}`),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        delay:0.5,
        y: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {

          seth2Visible(true); // Show h2 after words animation is complete
        },
      }
    );
  }, [words]);

  useEffect(() => {
    if (h2Visible) {
      gsap.fromTo(
        '#h2-element',
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          delay:1.5,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            // Animation complete
          },
        }
      );
    }
  }, [h2Visible]);

  return (
    <div>
      <h1 className={`text-7xl text-center px-10 mb-3 ${roboto.className}`}>
        {words.map((word, index) => (
          <span key={index} id={`word-${index}`}>
            {word}{' '}
          </span>
        ))}
      </h1>
      <h2
        id="h2-element"
        className={`text-2xl text-center px-2 ${roboto.className}`}
        style={{
          opacity: 0,
          transform: 'translateY(20px)',
          visibility: h2Visible ? 'visible' : 'hidden',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      >
        Experimentando virtualmente antes de comprar
      </h2>
    </div>
  );
};

export default AnimatedText;
