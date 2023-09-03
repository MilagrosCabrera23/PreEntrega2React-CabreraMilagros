import { Navigate, useNavigate } from "react-router-dom";
import "./ItemListContainer.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import { useHistory } from "react-router-dom"
const ItemListContainer = ({ greeting, ProductosData }) => {
  console.log(ProductosData)

const navegar = useNavigate()

  return (
    <div>
      <h5 className="greeting">{greeting}</h5><br />

      <div className="Prod">
        {ProductosData.map((items) => (
          <Card style={{ width: "18rem", height: "100%" }} key={items.id}>
            <Card.Img src={items.images[1]} className="card-img" />
            <Card.Body>
              <Card.Title className="title-name">{items.title}</Card.Title>
              <Card.Text>
                <strong>Descripcion:  <p className="text-muted">{items.description}</p></strong>
                <strong>Precio:$ {items.price}</strong>
              </Card.Text>
              <Button variant="info" className="text-white bold" onClick={() => {navegar(`/item/${items.id}`)}}>Mas detalles </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>

  );
}







export default ItemListContainer;


