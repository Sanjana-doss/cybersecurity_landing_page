import React from 'react';

function Component7() {
  return (
    <div>
      <footer className="bg-dark text-light py-5">
        <div className="container">
          <style>
            {`
              @media (max-width: 991.98px) {
                .footer-col {
                  width: 50% !important;
                  float: none !important; /* Remove float */
                  margin-left: auto; /* Center align */
                  margin-right: auto; /* Center align */
                  text-align: justify; /* Justify text */
                }
                .footer-heading {
                  font-size: 1.5rem !important;
                }
                .footer-list-item {
                  font-size: 1rem !important;
                }
              }
            `}
          </style>
          <div className="row">
            <div className="col-md-2 footer-col">
              <h5 className="mb-3 fs-2 fw-bold footer-heading">Solutions</h5>
              <ul className="list-unstyled">
                <li className="mb-2 fs-5 footer-list-item">Application Services</li>
                <li className="mb-2 fs-5 footer-list-item">Security Servers</li>
                <li className="mb-2 fs-5 footer-list-item">Security FireWalls</li>
                <li className="mb-2 fs-5 footer-list-item">Cloud Services</li>
                <li className="mb-2 fs-5 footer-list-item">Integrations</li>
              </ul>
            </div>
            <div className="col-md-2 footer-col">
              <h5 className="mb-3 fs-2 fw-bold footer-heading">Partners</h5>
              <ul className="list-unstyled">
                <li className="mb-2 fs-5 footer-list-item">Amazon</li>
                <li className="mb-2 fs-5 footer-list-item">Figma</li>
                <li className="mb-2 fs-5 footer-list-item">Twitter</li>
                <li className="mb-2 fs-5 footer-list-item">CloudRail-IIOT</li>
              </ul>
            </div>
            <div className="col-md-2 footer-col">
              <h5 className="mb-3 fs-2 fw-bold footer-heading">Resources</h5>
              <ul className="list-unstyled">
                <li className="mb-2 fs-5 footer-list-item">Academy</li>
                <li className="mb-2 fs-5 footer-list-item">Blog</li>
                <li className="mb-2 fs-5 footer-list-item">Themes</li>
                <li className="mb-2 fs-5 footer-list-item">Hosting</li>
                <li className="mb-2 fs-5 footer-list-item">Developers</li>
                <li className="mb-2 fs-5 footer-list-item">Support</li>
              </ul>
            </div>
            <div className="col-md-2 footer-col">
              <h5 className="mb-3 fs-2 fw-bold footer-heading">Company</h5>
              <ul className="list-unstyled">
                <li className="mb-2 fs-5 footer-list-item">About Us</li>
                <li className="mb-2 fs-5 footer-list-item">Careers</li>
                <li className="mb-2 fs-5 footer-list-item">FAQs</li>
                <li className="mb-2 fs-5 footer-list-item">Teams</li>
                <li className="mb-2 fs-5 footer-list-item">Contact Us</li>
              </ul>
            </div>
          </div>
          <img src="./Rectangle 13.png" alt="" className="img-fluid footer-image" style={{ width: '100%' }} />
          <div className="d-flex bd-highlight justify-content-between align-items-center">
            <div className="p-2 fs-6" style={{ color: '#B1B5BB' }}>© 2024 All Rights Reserved</div>
            <div className="p-2 flex-shrink-1">
              <img src="./Frame 12(1).png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Component7;
