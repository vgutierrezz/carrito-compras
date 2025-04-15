import { useContext, useEffect, useState } from "react"
import '../styles/CardComponent.css'
import { CartContext } from "../context/CartContext"

export const CardComponent = ({ id, image, title, description, price, handlerAdd, handlerRemove }) => {

  const { shoppingList } = useContext(CartContext)


  const [added, setAdded] = useState(false)

  const addProducts = () => {
    handlerAdd()
    setAdded(true)
  }

  const removeProducts = () => {
    handlerRemove()
    setAdded(false)
  }

  //Chequea si ya existe el producto en el carrito
  //Retorna un booleano
  const checkAdded = () => {
    const boolean = shoppingList.some(product => product.id == id)
    setAdded(boolean)
  }

  useEffect(() => {
    checkAdded()
  }, [])
  

  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">{price}</p>

        {
          added
            ? <button type="button" className="remove-button" onClick={removeProducts}>Quitar del Carrito</button>
            : <button type="button" className="add-button" onClick={addProducts}>Agregar del Carrito</button>
        }
      </div>
    </div>
  )
}
