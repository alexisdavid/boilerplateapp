/**
 *  @version 1.0.1
 *  @author Trejocode - Sergio
 *  @description Manejo de todas las rutas de la aplicación
 * 	@process 3
*/

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute     from './private';
// import RestrictRoute    from './restrict';


/**
 * @description Incorporación de todas las rutas
*/
import PageIndex    from '../pages';

// import PagePrivate  from '../pages/private';
import Clients from '../pages/clients/clients'
import Page404      from '../pages/404';


const Routes = () => (

    <BrowserRouter>
        <div className="flex main">
            <div className="column full">
                <Switch>
                    <Route path = "/" exact component = { PageIndex } />
                   
                    <PrivateRoute path = "/clients" exact component = { Clients } />
          
                    <Route component = { Page404 } />
                </Switch>
            </div>
        </div>
    </BrowserRouter>

);

export default Routes;