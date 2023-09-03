import { useEffect, useState } from "react"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import axios from "axios"
import { useParams } from "react-router-dom"

function obtenerProd() {
   return axios.get("https://dummyjson.com/products?limit=30")
}

const Category = () => {

   const [productos, setProductos] = useState([])
   const { categoryId } = useParams()

   useEffect(() => {
      obtenerProd()
         .then((res) => { 
          const dataFiltrada = res.data.products.filter(items => items.category === categoryId);
          setProductos(dataFiltrada) })
         .catch((err) => console.log(err))
   }, [categoryId])

   return (
      <ItemListContainer greeting={"Bienvenidos  a Mi Tienda,explora la gama de  productos innovadores en Electra-Tech:Tecnologia,accesorios,y más,todo a precios increibles."}
         ProductosData={productos}></ItemListContainer>
   )

}
export default Category




