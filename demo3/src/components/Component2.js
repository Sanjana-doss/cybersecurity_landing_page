import React, { useState, useEffect } from 'react';

function Component2() {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 991.98);
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="card bg-dark text-white" style={{ border: "none", display: 'flex', alignItems: 'flex-start', height: '700px' }}>
      <style>
        {`
          @media (max-width: 576px) {
            .responsive-title {
              font-size: 2rem !important; /* Equivalent to display-6 */
            }
            .responsive-text {
              font-size: 1.25rem !important; /* Equivalent to fs-5 */
            }
          }
        `}
      </style>
      <div className="card-img-overlay ms-3">
        <h5 className="card-title display-3 fw-bold my-5 responsive-title">
          Comprehensive <br />
          <span className="text-info">Cybersecurity</span> Strategies <br />
          for Growth and Resilience
        </h5>
        <p className="card-text fs-3 my-5 responsive-text">
      Unlock your business's full potential with our comprehensive{' '}
      {!isTablet && <br />}
      cybersecurity strategies. Safeguard your growth and resilience in the{' '}
      {!isTablet && <br />}
      digital age.
    </p>
        <p className="card-text my-3">
          <button type="button" className="btn btn-lg btn-info me-5 mb-2">Learn More</button>
          <button type="button" className="btn btn-lg btn-outline-info mb-2">Talk With Us</button>
        </p>
      </div>
      <img src="./cyber security 1.png" className="card-img img-fluid" alt="..." style={{ marginLeft: 'auto', maxWidth: '65%', height: 'auto' }} />
    </div>

    </div>
  );
}

export default Component2;
