import { Button } from "bootstrap";

const ButtonComponent = ({label, bsButtonType,  onClickFunction}) =>  {

    return <Button variant={bsButtonType} onClick={onClickFunction}>{label}</Button>
}

export default ButtonComponent; 