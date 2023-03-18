import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartLink from "./Cart/CartLink";

export default class Nav extends Component {
    render() {
        return (
<>




   <div class="top-header-area" id="sticker">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-sm-12 text-center">
					<div class="main-menu-wrap">
 						<div class="site-logo">
                             <Link to="/"> 
							   	<img src="assets/img/logo.png" alt=""/>
                             </Link>
						</div>
				 
						<nav class="main-menu">
							<ul>
								<li class="current-list-item"><Link to="/">Inicio</Link></li>
								<li> <Link to="/products">Products</Link>  </li>
						 
						 
 					 
								<li>
									<div class="header-icons">
										
										<CartLink />
									</div>
								</li>
							</ul>
						</nav>
						<a class="mobile-show search-bar-icon" href="#"><i class="fas fa-search"></i></a>
						<div class="mobile-menu"></div>
 					</div>
				</div>
			 </div>
		   </div>
		</div>









</>

        )
    }
}


