import { useContext, useEffect } from "react"
import { FoodContext } from "../../Context/Context"
import { Link, useParams } from "react-router-dom";
export default function Detalies() {
  let { infoData, getDetalies } = useContext(FoodContext)
  let { id } = useParams()
  useEffect(() => {
    getDetalies(`${id}`)
  }, [])

  return (
    <>
      <div className="landing">
        <span className="loader"></span>
      </div>
      <div className="detalies">
        <div className="container pt-5">
          <div className="header py-5 text-center">
            <h2 className="my-5">Meal Detalies</h2>
          </div>
          {infoData ?
            <div className="row mb-5 g-5 shadow pb-5 rounded-2 d-flex align-items-center" key={infoData.recipe_id}>
              <div className="col-lg-6 col-sm-12">
                <div className="image">
                  <img src={infoData.image_url} alt="image" className="w-100 rounded-2" height={400} style={{objectFit:"cover" , objectPosition:"center"}} />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="info p-3">
                  <h5 className=" border-bottom pb-3">{infoData.title}</h5>
                  <ul className="list-group my-4">
                    {infoData.ingredients?.map((el) => {
                      return <li className="list-group-item" key={el}>{el}</li>
                    })}
                  </ul>
                  <a href={infoData.publisher_url} className="btn btn-danger me-3" target="_blank">Publiser Website</a>
                  <Link to='/pizza' className="btn btn-success ">View More</Link>
                </div>
              </div>
            </div>
            : ""}
        </div>
      </div>
    </>
  )
}