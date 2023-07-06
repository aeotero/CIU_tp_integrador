import React from 'react';

const SeleccionCotizacion = ({consultaCotizacionAPI}) => {
    return ( 
        <div class="container-md">
            <select class="form-select form-select-lg mb-8" aria-label="Default select example" id="moneda" onChange={consultaCotizacionAPI}>
                <option selected value="inicial">Seleccione la moneda que quiere cotizar</option>
                <option value="oficial">Dolar Oficial</option>
                <option value="blue">Dolar Blue</option>
                <option value="oficial_euro">Euro Oficial</option>
                <option value="blue_euro">Euro Blue</option>
            </select>
        </div>
    );
}
 
export default SeleccionCotizacion;
