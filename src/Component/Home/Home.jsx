import { Link } from "react-router-dom"
import Video from "../../Image/play-btn.png"
import offer1 from "../../Image/f1.png"
import offer2 from "../../Image/f2.png"
import offer3 from "../../Image/f3.png"
import offer4 from "../../Image/f4.png"
import chef1 from "../../Image/t1.jpg"
import chef2 from "../../Image/t2.jpg"
import chef3 from "../../Image/t3.jpg"
import chef4 from "../../Image/t4.jpg"
import blog1 from "../../Image/b1.jpg"
import blog2 from "../../Image/b2.jpg"
import blog3 from "../../Image/b3.jpg"
import blog4 from "../../Image/b4.jpg"
import customer1 from "../../Image/customer1.jpg"
import customer2 from "../../Image/customer2.jpg"
import customer3 from "../../Image/customer3.png"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useContext, useEffect } from "react"
import { FoodContext } from "../../Context/Context"
export default function Home() {
  let responsive = { responsive: { 0: { items: 1 }, 995: { items: 2 } } }
  let { cateInfo , getCategories} = useContext(FoodContext)
  useEffect(() => {
    getCategories(`pizza`)
}, [])
  return (
    <>
      <div className="landing">
        <span className="loader"></span>
      </div>
      <div className="home">
        <div className="main vh-100">
          <div className="container h-100">
            <div className="text d-flex justify-content-center align-items-start h-100 flex-column pt-5">
              <h4>WIDE OPTIONS OF CHOICE</h4>
              <h1>Delicious Receipes</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp
                <br />
                or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
              <Link to='/pizza' className="btn rounded-2 px-4 py-3">View Our Receipes</Link>
            </div>
          </div>
        </div>
        <div className="dishe my-5">
          <div className="container pb-5">
            <div className="header pb-5  text-center">
              <h2 className="my-3">Our Top Rated Dishes</h2>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className="row g-4">
              {cateInfo.slice(0,3).map((el) => {
                return <div className="col-lg-4  col-sm-12" key={el.recipe_id}>
                  <Link to={"/detalies/" + el.recipe_id}>
                    <div className="image rounded-2 shadow h-100">
                      <img src={el.image_url} alt="cat" className="w-100 rounded-2" height={250}/>
                      <span className="py-1 px-3 rounded-2">{el.title.split(" ").slice(0, 3).join(" ")}</span>
                    </div>
                  </Link>
                </div>
              })}
            </div>
          </div>
        </div>
        <div className="video d-flex justify-content-center align-items-center flex-column text-center">
          <a href="https://www.youtube.com/watch?v=ulhRORJpuBM" target="_blank"> <img src={Video} alt="video" /></a>
          <h3 className="my-4">We Always serve the vaping hot and delicious foods</h3>
          <p>Youtube video will appear in popover</p>
        </div>
        <div className="offer my-5">
          <div className="container py-5 border-bottom border-danger">
            <div className="row pb-5 g-4">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="meal text-lg-start text-sm-center text-center">
                  <img src={offer1} alt="offer" />
                  <h4 className="my-4">Refreshing Breakfast</h4>
                  <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="meal text-lg-start text-sm-center text-center">
                  <img src={offer2} alt="offer" />
                  <h4 className="my-4">Awesome Lunch</h4>
                  <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="meal text-lg-start text-sm-center text-center">
                  <img src={offer3} alt="offer" />
                  <h4 className="my-4">Soothing Dinner</h4>
                  <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="meal text-lg-start text-sm-center text-center">
                  <img src={offer4} alt="offer" />
                  <h4 className="my-4">Rich Quality Buffet</h4>
                  <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customer my-5">
          <div className="container mb-5">
            <div className="header pb-5  text-center">
              <h2 className="my-3">Our Client Say</h2>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <OwlCarousel className='owl-theme' loop items={2} autoplay={true} autoplayTimeout={2000} margin={20} dots {...responsive}>
              <div className="item">
                <div className="test border border-3 p-5">
                  <div className="head d-flex justify-content-between align-items-center ">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={customer1} alt="customer" className=" rounded-circle me-4" style={{ width: "70px", height: "70px" }} />
                      <div>
                        <h5>Kerry D.Silva</h5>
                        <span>New york</span>
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star-half-stroke"></i>
                    </div>
                  </div>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                </div>
              </div>
              <div className="item">
                <div className="test border-3 border  p-5">
                  <div className="head d-flex justify-content-between align-items-center ">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={customer2} alt="customer" className=" rounded-circle me-4" style={{ width: "70px", height: "70px" }} />
                      <div>
                        <h5>Kerry D.Silva</h5>
                        <span>New york</span>
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star-half-stroke"></i>
                    </div>
                  </div>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                </div>
              </div>
              <div className="item">
                <div className="test border-3 border p-5">
                  <div className="head d-flex justify-content-between align-items-center ">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={customer3} alt="customer" className=" rounded-circle me-4" style={{ width: "70px", height: "70px" }} />
                      <div>
                        <h5>Ali hamad  </h5>
                        <span>cairo</span>
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star-half-stroke"></i>
                    </div>
                  </div>
                  <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
                </div>
              </div>

            </OwlCarousel>
          </div>
        </div>
        <div className="chef">
          <div className="container">
            <div className="header pb-5 text-center">
              <h2 className="my-3">Meet Our Qualified Chefs</h2>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className="row g-4">
              <div className="col-lg-3 col-sm-6">
                <div className="info position-relative">
                  <img src={chef1} alt="chef" className="w-100 rounded-2" />
                  <div className="layout d-flex justify-content-center align-items-center rounded-2">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
                <div className="text">
                  <h4>Ethel Davis</h4>
                  <p>Managing Director (Sales)</p>
                </div>
              </div>
              <div className="col-lg-3  col-sm-6">
                <div className="info position-relative">
                  <img src={chef2} alt="chef" className="w-100 rounded-2" />
                  <div className="layout d-flex justify-content-center align-items-center rounded-2">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
                <div className="text">
                  <h4>Rodney Cooper</h4>
                  <p>Creative Art Director (Project)</p>
                </div>
              </div>
              <div className="col-lg-3  col-sm-6">
                <div className="info position-relative">
                  <img src={chef3} alt="chef" className="w-100 rounded-2" />
                  <div className="layout d-flex justify-content-center align-items-center rounded-2">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
                <div className="text">
                  <h4>Dora Walker</h4>
                  <p>Senior Core Developer</p>
                </div>
              </div>
              <div className="col-lg-3  col-sm-6">
                <div className="info position-relative">
                  <img src={chef4} alt="chef" className="w-100 rounded-2" />
                  <div className="layout d-flex justify-content-center align-items-center rounded-2">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
                <div className="text">
                  <h4>Lena Keller</h4>
                  <p>Creative Content Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog my-5">
          <div className="container">
            <div className="header pb-5 text-center">
              <h2 className="my-3">Latest From Our Blog</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row g-4">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="item">
                  <div className="image mb-4 overflow-hidden rounded-2"><img src={blog1} alt="blog" className="w-100" /></div>
                  <strong>17 May 2023</strong>
                  <h4 className="my-3">Cooking Perfect Pizza in minutes</h4>
                  <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
                  <div className="d-flex justify-content-between align-items-center comment">
                    <div><i className="fa-regular fa-heart"></i> <span>15 Likes</span></div>
                    <div><i className="fa-regular fa-comment"></i> <span>2 Comments</span></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="item">
                  <div className="image mb-4 overflow-hidden rounded-2"><img src={blog2} alt="blog" className="w-100" /></div>
                  <strong>17 May 2023</strong>
                  <h4 className="my-3">Secret of making perfect burger</h4>
                  <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
                  <div className="d-flex justify-content-between align-items-center comment">
                    <div><i className="fa-regular fa-heart"></i> <span>15 Likes</span></div>
                    <div><i className="fa-regular fa-comment"></i> <span>2 Comments</span></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="item">
                  <div className="image mb-4 overflow-hidden rounded-2"><img src={blog3} alt="blog" className="w-100" /></div>
                  <strong>17 May 2023</strong>
                  <h4 className="my-3">Secret of making Chocolate cake</h4>
                  <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
                  <div className="d-flex justify-content-between align-items-center comment">
                    <div><i className="fa-regular fa-heart"></i> <span>15 Likes</span></div>
                    <div><i className="fa-regular fa-comment"></i> <span>2 Comments</span></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="item">
                  <div className="image mb-4 overflow-hidden rounded-2"><img src={blog4} alt="blog" className="w-100 " /></div>
                  <strong>17 May 2023</strong>
                  <h4 className="my-3">The perfect way to make crispy bread</h4>
                  <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
                  <div className="d-flex justify-content-between align-items-center comment">
                    <div><i className="fa-regular fa-heart"></i> <span>15 Likes</span></div>
                    <div><i className="fa-regular fa-comment"></i> <span>2 Comments</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}