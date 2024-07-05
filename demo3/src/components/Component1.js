import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Component1() {
  const togglerIconStyle = {
    backgroundImage: "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")"
  };

  const containerStyle = {
    marginTop: '0',
    paddingTop: '0'
  };

  return (
    <div className="container" style={{ margin: '0', padding: '0' }}>
      <nav className="mx-lg-4 navbar fixed-top navbar-expand-lg navbar-light" style={containerStyle}>
        <div className="container bg-dark d-flex justify-content-between">
          <nav className="navbar-brand text-info fs-2 fw-bold" href="#">Iron</nav>
          <button
            className="navbar-toggler mt-3 ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: 'white' }}
          >
            <span className="navbar-toggler-icon" style={togglerIconStyle}></span>
          </button>
          <div className="collapse navbar-collapse navbar-dark bg-dark" id="navbarTogglerDemo01">
            <div className="d-flex justify-content-center w-100">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <nav className="nav-link active text-light fs-4 mx-3" aria-current="page" href="#">Pricing</nav>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn text-light dropdown-toggle fs-4 mx-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Features
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><nav className="dropdown-item" href="#">Action1</nav></li>
                      <li><nav className="dropdown-item" href="#">Action2</nav></li>
                      <li><nav className="dropdown-item" href="#">Action3</nav></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <nav className="nav-link text-light fs-4 mx-3" href="#" tabIndex="-1">Support</nav>
                </li>
                <li className="nav-item">
                  <nav className="nav-link text-light fs-4 mx-3" href="#" tabIndex="-1">Blog</nav>
                </li>
                <li className="nav-item">
                  <nav className="nav-link text-light fs-4 mx-3" href="#" tabIndex="-1">Partners</nav>
                </li>
              </ul>
            </div>
            <form className="d-flex ms-auto">
              <button className="btn text-info fs-4 fw-bold" type="submit">SIGN&nbsp;UP</button>
            </form>
          </div>
        </div>
      </nav>
      <div style={{ paddingTop: '56px' }}>
        <img src="./Rectangle 13.png" alt="" className="img-fluid" style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default Component1;
