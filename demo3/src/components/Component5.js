import React from 'react';

function Component5() {
  return (
    <div>
      <p className="text-center text-light display-5 fw-bold pt-5">Customer Testimonials</p>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container text-center text-light my-3 py-3">
              <blockquote className="blockquote">
                <p className="mb-4 text-info display-4 carousel-text">
                  “By working with Ironvelo, we processed more payments, increased authorization rates by 10 to 15 percentage points, increased revenue by 5% to 7%, and reduced PCI scope.”
                </p>
                <footer className="text-light">
                  <img
                    src="./avatar 1.png"
                    alt="Alberto Flores"
                    className="rounded-circle"
                    width="150"
                    height="150"
                  />
                  <div className="my-3">
                    <strong className="fs-1 carousel-name">Alberto Flores</strong>
                    <p className="mb-5 mt-3 carousel-role">IT Director</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container text-center text-light my-3 py-3">
              <blockquote className="blockquote">
                <p className="mb-4 text-info display-4 carousel-text">
                  “By working with Ironvelo, we processed more payments, increased authorization rates by 10 to 15 percentage points, increased revenue by 5% to 7%, and reduced PCI scope.”
                </p>
                <footer className="text-light">
                  <img
                    src="./avatar 1.png"
                    alt="Alberto Flores"
                    className="rounded-circle"
                    width="150"
                    height="150"
                  />
                  <div className="my-3">
                    <strong className="fs-1 carousel-name">Alberto Flores</strong>
                    <p className="mb-5 mt-3 carousel-role">IT Director</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container text-center text-light my-3 py-3">
              <blockquote className="blockquote">
                <p className="mb-4 text-info display-4 carousel-text">
                  “By working with Ironvelo, we processed more payments, increased authorization rates by 10 to 15 percentage points, increased revenue by 5% to 7%, and reduced PCI scope.”
                </p>
                <footer className="text-light">
                  <img
                    src="./avatar 1.png"
                    alt="Alberto Flores"
                    className="rounded-circle"
                    width="150"
                    height="150"
                  />
                  <div className="my-3">
                    <strong className="fs-1 carousel-name">Alberto Flores</strong>
                    <p className="mb-5 mt-3 carousel-role">IT Director</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container text-center text-light my-3 py-3">
              <blockquote className="blockquote">
                <p className="mb-4 text-info display-4 carousel-text">
                  “By working with Ironvelo, we processed more payments, increased authorization rates by 10 to 15 percentage points, increased revenue by 5% to 7%, and reduced PCI scope.”
                </p>
                <footer className="text-light">
                  <img
                    src="./avatar 1.png"
                    alt="Alberto Flores"
                    className="rounded-circle"
                    width="150"
                    height="150"
                  />
                  <div className="my-3">
                    <strong className="fs-1 carousel-name">Alberto Flores</strong>
                    <p className="mb-5 mt-3 carousel-role">IT Director</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container text-center text-light my-3 py-3">
              <blockquote className="blockquote">
                <p className="mb-4 text-info display-4 carousel-text">
                  “By working with Ironvelo, we processed more payments, increased authorization rates by 10 to 15 percentage points, increased revenue by 5% to 7%, and reduced PCI scope.”
                </p>
                <footer className="text-light">
                  <img
                    src="./avatar 1.png"
                    alt="Alberto Flores"
                    className="rounded-circle"
                    width="150"
                    height="150"
                  />
                  <div className="my-3">
                    <strong className="fs-1 carousel-name">Alberto Flores</strong>
                    <p className="mb-5 mt-3 carousel-role">IT Director</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <style jsx>{`
        @media (max-width: 991.98px) {
          .carousel-text {
            font-size: 1.5rem !important;
          }
          .carousel-name {
            font-size: 1.2rem !important;
          }
          .carousel-role {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 575.98px) {
          .carousel-text {
            font-size: 1rem !important;
          }
          .carousel-name {
            font-size: 1rem !important;
          }
          .carousel-role {
            font-size: 0.875rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Component5;
