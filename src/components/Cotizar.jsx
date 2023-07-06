import React from 'react';

const Cotizacion = ({cotizacion}) => {
    return ( 
        <div class="container-sm text-center">
            <p>
                Compra: $ {cotizacion.value_buy} 
                <br/>
                Venta: $ {cotizacion.value_sell} 
            </p>
        </div>
    );
}
 
export default Cotizacion;

