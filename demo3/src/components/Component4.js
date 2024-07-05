import React, { useState } from 'react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState('');

  const handleMouseEnter = (card) => {
    setHoveredCard(card);
  };

  const handleMouseLeave = () => {
    setHoveredCard('');
  };

  return (
    <div className="m-5 p-5 bg-dark services-container">
      <style>
        {`
          @media (max-width: 810.98px) {
            .card {
              width: 100% !important;
              margin-left: 20px !important;
              margin-right: 0 !important;
              flex-grow: 1 !important;
            }
            .services-container {
              margin-left: auto !important;
              margin-right: auto !important;
              padding-left: 1rem !important;  /* Adjusted padding */
              padding-right: 1rem !important; /* Adjusted padding */
              max-width: 100% !important;
            }
            .card-title1 {
              font-size: 1.5rem !important;
            }
            .card-text1 {
              font-size: 1rem !important;
              text-align: center !important; /* Center align text on tablet and mobile */
            }
            .card-text1 br {
              display: none; /* Hide line breaks on tablet and mobile */
            }
          }

          @media (max-width: 575.98px) {
            .card {
              width: 100% !important;
              
              margin: 0.5rem 0 0 1rem !important;
              flex-grow: 1 !important;
            }
            .card-title1 {
              font-size: 1rem !important;
            }
            .card-text1 {
              font-size: 0.875rem !important;
            }
            .services-container {
              margin: 0 !important;
              padding: 0.5rem 1rem !important; /* Consistent padding and balanced gaps */
              max-width: 100% !important;
            }
          }

          .row {
            display: flex;
            flex-wrap: wrap;
        
          }

          .col-md-6 {
            display: flex;
            justify-content: center; /* Center cards horizontally */
          }

          .card {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          }

          .card-body {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          }

          .card-text1 {
            text-align: justify; /* Justify text for larger screens */
          }

          @media (max-width: 991.98px) {
            .card-text1 {
              text-align: center !important; /* Center align text on tablet and mobile */
            }
            .card-text1 br {
              display: none; /* Hide line breaks on tablet and mobile */
            }
          }

          @media (max-width: 575.98px) {
            .card-text1 {
              text-align: center !important; /* Center align text on mobile */
              font-size: 0.875rem !important;
            }
          }
        `}
      </style>
      <p className="text-center text-light display-5 fw-bold mb-md-5 mt-5">Services We Offer</p>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <div
            className={`card security-card border-info rounded-5 bg-transparent img-fluid d-flex mb-5 ${hoveredCard === 'endpoint' ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('endpoint')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body bg-transparent">
              <div className="card-icon">
                <img src="./Frame.png" alt="" />
              </div>
              <h5 className="card-title1 fs-3 mb-3">Endpoint Security Solutions</h5>
              <p className="card-text1 text-light fs-5 text-center">
                Protect your devices and networks from malware,<br /> ransomware, and other cyber threats with our<br /> comprehensive endpoint security solutions. Safeguard <br />sensitive data and ensure business continuity with real-time threat detection and response.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div
            className={`card security-card border-info rounded-5 bg-transparent img-fluid mb-5 ${hoveredCard === 'network' ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('network')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body bg-transparent">
              <div className="card-icon">
                <img src="./Frame(1).png" alt="" />
              </div>
              <h5 className="card-title1 fs-3 mb-3">Network Security Solutions</h5>
              <p className="card-text1 text-light fs-5 text-center">
                Secure your network infrastructure from unauthorized <br /> access and data breaches with our advanced network <br />security solutions. Defend against evolving cyber <br />threats and maintain network integrity with robust<br /> firewalls.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <div
            className={`card security-card border-info rounded-5 bg-transparent img-fluid my-5 ${hoveredCard === 'data' ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('data')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body bg-transparent">
              <div className="card-icon">
                <img src="./Frame(4).png" alt="" />
              </div>
              <h5 className="card-title1 fs-3 mb-3">Data Encryption Services</h5>
              <p className="card-text1 text-light fs-5 text-center">
                Encrypt sensitive data at rest and in transit to protect confidentiality and integrity. Our data encryption services provide end-to-end encryption solutions to safeguard your most valuable assets from unauthorized access and cyber attacks.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div
            className={`card security-card border-info rounded-5 bg-transparent img-fluid my-5 ${hoveredCard === 'incident' ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('incident')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body bg-transparent">
              <div className="card-icon">
                <img src="./Frame(5).png" alt="" />
              </div>
              <h5 className="card-title1 fs-3 mb-3">Incident Response and Forensics</h5>
              <p className="card-text1 text-light fs-5 text-center">
                Rapidly detect, respond to, and recover from security incidents with our incident response and forensic services. Minimize the impact of breaches and maintain business continuity with our expert team of cybersecurity professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <div
            className={`card security-card border-info rounded-5 bg-transparent img-fluid mt-5 ${hoveredCard === 'training' ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('training')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body bg-transparent">
              <div className="card-icon">
                <img src="./Frame(2).png" alt="" />
              </div>
              <h5 className="card-title1 fs-3 mb-3">Security Awareness Training</h5>
              <p className="card-text1 text-light fs-5 text-center">
                Empower your employees with the knowledge and skills to recognize and mitigate cyber threats. Our security awareness training programs educate your workforce on cybersecurity best practices, reducing the risk of human error and strengthening your overall security posture.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div
            className={`card security-card border-info rounded-5 bg-transparent img-fluid mt-5 ${hoveredCard === 'cloud' ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('cloud')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body bg-transparent">
              <div className="card-icon">
                <img src="./Frame(3).png" alt="" />
              </div>
              <h5 className="card-title1 fs-3 mb-3">Cloud Security Solutions</h5>
              <p className="card-text1 text-light fs-5 text-center ">
                Secure your cloud-based applications and data storage <br /> with our cloud security solutions. Ensure <br />confidentiality, integrity, and availability in the cloud <br />environment with advanced security measures tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

