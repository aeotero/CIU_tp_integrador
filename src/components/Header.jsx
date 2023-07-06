import React from 'react';
import { useState, useEffect } from 'react';


const Header = () => {

    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);


    return (
        <div class="px-2 py-2 bg-dark text-white">
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div class="text-secondary">
                            Conversor de monedas
                        </div>
                    </div>
                    <div class="col">
                        <a href="#" class="nav-link text-white">
                            Valor del oro
                        </a>
                    </div>
                    <div class="col">
                        <a href="#" class="nav-link text-white">
                            Bolsa de valores
                        </a>
                    </div>
                    <div class="col">
                            <div class="nav-link text-white">{currentTime.toLocaleTimeString()}</div>
                    </div>
                </div>
            </div>
        </div>
    )        
}
export default Header;