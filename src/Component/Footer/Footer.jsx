import logo from '../../Image/logo.png'
export default function Footer() {
  return (
    <div className="footer pt-5">
      <div className="container py-5 border-bottom border-opacity-25 border-light">
        <div className="row g-5">
          <div className="col-lg-4 col-sm-12">
            <div className="info border-end border-light border-opacity-25 text-center text-lg-start h-100">
              <h4 className="mb-4">WORKING HOURS</h4>
              <p>Monday - Friday: 08:00 am – 08:30 pm</p>
              <p>Saturday: 10:00 am – 16:30 pm</p>
              <p>Sunday: 10:00 am – 16:30 pm</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="info text-center d-flex justify-content-center align-items-center flex-column border-end border-light border-opacity-25 h-100">
              <img src={logo} alt="logo" />
              <p className='my-4  pe-lg-3'>Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
              <div className="d-flex">
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-square-twitter"></i>
                <i className="fa-brands fa-square-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="sub text-center text-lg-start">
              <h4>SUBSCRIBE</h4>
              <p className="my-4 ">Get latest updates and offers.</p>
              <form className="d-flex justify-content-lg-center align-items-lg-center" role="search">
                <input className="form-control me-1" type="search" placeholder="SUBSCRIBE" aria-label="Search" />
                <button className="btn btn-danger" type="submit">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copy d-flex justify-content-center align-items-center py-4 text-white text-center">
        Copyright ©2023 All rights reserved | This template is made with  by <i className="fa-solid fa-heart mx-2"></i> <span className='text-danger'> Mohamed Maher</span>
      </div>
    </div>
  )
}