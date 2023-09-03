import React, { useState } from "react";

const UserComponent = ({usuarios}) => {
    return (
        <div>
            <ul>
                <li>{usuarios.nombre}</li>
                <li>{usuarios.gmail}</li>
                <li>{usuarios.edad}</li>
                <li>{usuarios.telefono}</li>
            </ul>
        </div>
    )
}


export default UserComponent