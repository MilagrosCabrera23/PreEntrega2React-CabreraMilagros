import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemDetailContainer = ({ ProductosData }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ProductosData.thumbnail} />
            <Card.Body>
                <Card.Title>{ProductosData.title}</Card.Title>
                <Card.Text>
                    {ProductosData.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Marca: {ProductosData.brand}</ListGroup.Item>
                <ListGroup.Item>Precio: {ProductosData.price}</ListGroup.Item>
                <ListGroup.Item>Categoría: {ProductosData.category}</ListGroup.Item>
                <ListGroup.Item>Stock: {ProductosData.stock}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemDetailContainer;
