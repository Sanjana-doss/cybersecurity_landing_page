import React, { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = (callback, options) => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && callback) {
        callback();
      }
    }, options);

    const currentRef = ref.current; 

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [callback, options]);

  return [ref, isIntersecting];
};

const Counter = ({ end, duration, startCounting }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!startCounting) return;

    const endNumber = parseInt(end, 10);
    const totalMilSecDur = parseInt(duration, 10);
    const incrementTime = totalMilSecDur / endNumber;

    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount >= endNumber) {
          clearInterval(timer);
          return endNumber;
        }
        return prevCount + 1;
      });
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, startCounting]);

  return <span>{count}</span>;
};

function Component8() {
  const [startCounting, setStartCounting] = useState(false);
  const [ref, isVisible] = useIntersectionObserver(() => setStartCounting(true), {
    threshold: 0.1,
  });

  useEffect(() => {
    if (isVisible) {
      setStartCounting(true);
    }
  }, [isVisible]);

  const commonDuration = 1000; 

  return (
    <>
      <style>
        {`
          
         
          @media (max-width: 810px) {
            h1.fw-bold.display-1 {
              font-size: 2.0rem;
            }
            p.fs-3{
            font-size: 0.4rem;}
            
          }

          
          @media (max-width: 576px) {
            h1.fw-bold.display-1 {
              font-size: 2rem;
            }
p.fs-3{
            font-size: 1rem;}
            
          }
        `}
      </style>
      <div ref={ref} className="ms-4 text-center mt-5">
        <div className="container">
          <div className="row justify-content-around py-4 counter text-dark full-width-row">
            <div className="col-md-3">
              <h1 className="fw-bold display-1">
                <Counter end="10" duration={commonDuration} startCounting={startCounting} />+
              </h1>
              <p className="fs-3">Years of Experience</p>
            </div>
            <div className="col-md-3">
              <h1 className="fw-bold display-1">
                <Counter end="900" duration={commonDuration} startCounting={startCounting} />+
              </h1>
              <p className="fs-3">Satisfied customers</p>
            </div>
            <div className="col-md-4">
              <h1 className="fw-bold display-1">
                <Counter end="99" duration={commonDuration} startCounting={startCounting} />%
              </h1>
              <p className="fs-3">Cybersecurity guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Component8;
