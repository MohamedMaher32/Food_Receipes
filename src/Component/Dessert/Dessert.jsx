import { useContext, useEffect } from 'react'
import { FoodContext } from '../../Context/Context'
import { Link } from 'react-router-dom';
export default function Dessert() {
  let { cateInfo, getCategories } = useContext(FoodContext)
  useEffect(() => {
    getCategories(`cake`)
  }, [])
  return (
    <>
      <div className="landing">
        <span className="loader"></span>
      </div>
      <div className="food my-5">
        <div className="container pt-5">
          <div className="header py-5 text-center">
            <h2 className="my-3">Cake Receipes</h2>
            <p>Cake is a staple dessert of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.</p>
          </div>
          <div className="row g-4">
            {cateInfo.map((el) => {
              return <div className="col-lg-3 col-md-4 col-sm-6" key={el.recipe_id}>
                <Link to={"/detalies/" + el.recipe_id}>
                  <div className="info position-relative">
                    <img src={el.image_url} alt="meal" className="w-100 rounded-2"  height={250}/>
                    <div className="layout d-flex justify-content-center align-items-center rounded-2">
                      <button className='btn btn-light fw-bold'>View Detalies</button>
                    </div>
                  </div>
                </Link>
                <div className="text">
                  <h4>{el.title.split(" ").slice(0, 3).join(" ")}</h4>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}