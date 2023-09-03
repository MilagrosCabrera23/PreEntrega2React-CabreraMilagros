import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//iconos: 
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import '../CartWidget/CartWidget.css'
const CartWidget = () => {
    return (
        <div className="Cart" >
            <FontAwesomeIcon icon={faHeart}  />
            <FontAwesomeIcon icon={faUser}  className="user" />
            <FontAwesomeIcon icon={faCartShopping} /><h4 className="h4Text"/> 0
        </div>
    )
}

export default CartWidget; 