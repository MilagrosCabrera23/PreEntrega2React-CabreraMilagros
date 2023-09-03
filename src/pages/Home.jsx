import { useEffect, useState } from "react"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import axios from "axios"


function obtenerProd() {
   return axios.get("https://dummyjson.com/products?limit=30")
}

const Home = () => {

   const [productos, setProductos] = useState([])



   useEffect(() => {
      obtenerProd()
         .then((res) => {
            setProductos(res.data.products)
         })

         .catch((err) => console.log(err))
   }, [])

   return (
      <ItemListContainer greeting={"Bienvenidos  a Mi Tienda,explora la gama de  productos innovadores en Electra-Tech:Tecnologia,accesorios,y más,todo a precios increibles."}
         ProductosData={productos}></ItemListContainer>
   )

}
export default Home




