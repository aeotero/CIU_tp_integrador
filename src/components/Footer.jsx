import React from 'react';
import house from "./Icons/house.svg";
import linkedin from "./Icons/linkedin.svg";
import facebook from "./Icons/facebook.svg";
import twitter from "./Icons/twitter.svg";
import instagram from "./Icons/instagram.svg";

const Footer = () => {  
    return (
        <div class="px-2 py-2 bg-dark text-white fixed-bottom">
            <footer class="container-md d-flex align-items-center ">
                    
                <div class="text-secondary">© 2023 Agustin Otero </div>

                <div class="ms-auto p-2">
                    <a href="index.html">
                        <button type="button" class="btn btn-light-empasis">
                            <img src = {house} alt="Home"/>
                        </button>
                    </a>
                    <a href="https://www.sicarul.com/">
                        <button type="button" class="btn btn-light-empasis">
                            <img src= {linkedin} alt="Linkedin"/>
                        </button>
                    </a>
                    <a href="https://www.facebook.com/bluelytics">
                        <button type="button" class="btn btn-light-empasis">
                            <img src= {facebook} alt="Facebook"/>
                        </button>
                    </a><a href="https://www.twitter.com/bluelytics">
                        <button type="button" class="btn btn-light-empasis">
                            <img src= {twitter} alt="Twitter"/>
                        </button>
                    </a><a href="https://www.instagram.com/bluelytics_dolar">
                        <button type="button" class="btn btn-light-empasis">
                            <img src= {instagram} alt="Instagram"/>
                        </button>
                    </a>
                </div>
            </footer>
        </div>
    );
}
 
export default Footer;