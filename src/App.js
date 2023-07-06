import { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Cotizar from './components/Cotizar';
import SeleccionCotizacion from './components/SeleccionCotizacion';
import './App.css';

function App() {

  const [cotizacion, editarCotizacion] = useState({})

  const consultaCotizacionAPI = async() => {
    try {
      const api = await fetch("https://api.bluelytics.com.ar/v2/latest");
      const cotizacion = await api.json();

      var moneda = document.getElementById("moneda").value;
      var inicial = {
        value_sell: 0.00,
        value_buy: 0.00
      }

      var cotizacionAMostrar =
        moneda == "inicial" ?
        inicial :
        cotizacion[moneda]

      editarCotizacion(cotizacionAMostrar);

    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <Fragment>

      <Header/>

      <h1 class="display-1 text-center">Cotizador de moneda online</h1>

      <br/><br/>

      <div class="container text-center">
        <div class="row">
          
          <div class="col">
            <SeleccionCotizacion consultaCotizacionAPI = {consultaCotizacionAPI}/>
          </div>
          
          <div class="col">
            <Cotizar cotizacion = {cotizacion}/>
          </div>
          
        </div>

      </div>


      <Footer/>

    </Fragment>
  );
}

export default App;
