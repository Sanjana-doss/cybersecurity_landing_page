import React, {  useState } from 'react';


function Component3() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageSize = isHovered ? { transform: 'scale(2.2)' } : {};
  const [isHovered1, setIsHovered1] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const imageSize1 = isHovered1 ? { transform: 'scale(2.2)' } : {};
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const imageSize2 = isHovered2 ? { transform: 'scale(2.2)' } : {};
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const imageSize3 = isHovered3 ? { transform: 'scale(2.2)' } : {};
  const [isHovered4, setIsHovered4] = useState(false);

  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  const imageSize4 = isHovered4 ? { transform: 'scale(2.2)' } : {};
  const [isHovered5, setIsHovered5] = useState(false);

  const handleMouseEnter5 = () => {
    setIsHovered5(true);
  };

  const handleMouseLeave5 = () => {
    setIsHovered5(false);
  };

  const imageSize5 = isHovered5 ? { transform: 'scale(2.2)' } : {};
  const [isHovered6, setIsHovered6] = useState(false);

  const handleMouseEnter6 = () => {
    setIsHovered6(true);
  };

  const handleMouseLeave6 = () => {
    setIsHovered6(false);
  };

  const imageSize6 = isHovered6 ? { transform: 'scale(2.2)' } : {};
  
  
  return (
    <div class="bg-dark ">
      <p class="text-center text-light fs-3">We are providing cybersecurity services to some of the World’s leading companies</p>
      
      <div class=" row d-flex align-items-center justify-content-center">
      <div className="hover-image col-md-1" style={{ overflow: 'hidden', position: 'relative', width: '170px' }}>
      <img
        src="./Frame 266.png"
        className="img-fluid"
        alt=""
        style={{ transition: 'transform 0.3s ease', ...imageSize }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
    <div className="hover-image col-md-1" style={{ overflow: 'hidden', position: 'relative', width: '170px' }}>
      <img
        src="./Frame 267.png"
        className="img-fluid"
        alt=""
        style={{ transition: 'transform 0.3s ease', ...imageSize1 }}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      />
    </div>
    <div className="hover-image col-md-1" style={{ overflow: 'hidden', position: 'relative', width: '170px' }}>
      <img
        src="./Frame 268.png"
        className="img-fluid"
        alt=""
        style={{ transition: 'transform 0.3s ease', ...imageSize2 }}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      />
    </div>
    <div className="hover-image col-md-1" style={{ overflow: 'hidden', position: 'relative', width: '170px' }}>
      <img
        src="./Frame 269.png"
        className="img-fluid"
        alt=""
        style={{ transition: 'transform 0.3s ease', ...imageSize3 }}
        onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave3}
      />
    </div>
    <div className="hover-image col-md-1" style={{ overflow: 'hidden', position: 'relative', width: '170px' }}>
      <img
        src="./Frame 270.png"
        className="img-fluid"
        alt=""
        style={{ transition: 'transform 0.3s ease', ...imageSize4 }}
        onMouseEnter={handleMouseEnter4}
        onMouseLeave={handleMouseLeave4}
      />
    </div>
    <div className="hover-image col-md-1" style={{ overflow: 'hidden', position: 'relative', width: '170px' }}>
      <img
        src="./Frame 271.png"
        className="img-fluid"
        alt=""
        style={{ transition: 'transform 0.3s ease', ...imageSize5 }}
        onMouseEnter={handleMouseEnter5}
        onMouseLeave={handleMouseLeave5}
      />
    </div>
    <div className="hover-image col-md-1" style={{ overflow: 'hidden', position: 'relative', width: '170px' }}>
      <img
        src="./Frame 272.png"
        className="img-fluid"
        alt=""
        style={{ transition: 'transform 0.3s ease', ...imageSize6 }}
        onMouseEnter={handleMouseEnter6}
        onMouseLeave={handleMouseLeave6}
      />
    </div>
    <p class="text-light fs-2 text-center text-justify responsive-text ">At <span class="text-info">Ironvelo</span> , we're dedicated to protecting businesses and individuals from the ever-evolving threats in the digital landscape. With [X years/months] of experience in the cybersecurity industry, we have  honed our expertise to deliver innovative solutions that safeguard your digital assets and maintain your peace of mind.</p>
    
    </div>
    
    
    </div>
  );
}

export default Component3;