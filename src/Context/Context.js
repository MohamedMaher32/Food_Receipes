import axios from "axios";
import $ from "jquery"
import { createContext, useState } from "react";
export let FoodContext = createContext(null)
export function FoodContextProvider(props) {
    let [infoData, setInfoData] = useState({})
    let [cateInfo, setCateInfo] = useState([])
    async function getCategories(type) {
        $(".landing").fadeIn(1000)
        let { data } = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${type}`)
        $(".landing").fadeOut(1000)
        setCateInfo(data.recipes)
    }
    async function getDetalies(id) {
        $(".landing").fadeIn(1000)
        let { data } = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
        setInfoData(data.recipe)
        $(".landing").fadeOut(1000)
    }

    return <FoodContext.Provider value={{ infoData, getDetalies, getCategories, cateInfo }}>
        {props.children}
    </FoodContext.Provider>
}