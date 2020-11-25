/**
 *  @version 1.1.0
 *  @author alexis
 *  @description Página de /index
 */

import React, { useState,useEffect } from "react";
import {Redirect} from 'react-router-dom';
import "./signin.css";
import Request from "../utils/http";
const request = new Request();

const PageIndex = () => {
  useEffect(() => {
    window.sessionStorage.getItem('token')?setLoged(true):setLoged(false)
   
  }, [])
  const [loged,setLoged]=useState(false)
  const [user, setUser] = useState({
    user: "",
    password: "",
  });
  const handleSubmit = async () => {
    const response = await request.post("/login", user);
   
    if (response && response.result.success) {
      let user = JSON.stringify(response.result.user);
      let token = JSON.stringify(response.result.access_token);
     window.sessionStorage.setItem('token',token);
     window.sessionStorage.setItem('user',user);
     setLoged(true)
    }
      
    
  };
  return (
    <div className="row login ">
 {loged?   <Redirect  to="/clients" />:null}
      {/* <div className="white-space-8 col-md-12 "></div> */}
      <div className="col-md-4 col-xs-4"></div>
      <div className="col-md-4 pl-3 col-xs-8 justify-center pl-5">
        <div className="form-signin ">
          <h1 className="h3 mb-3 font-weight-normal" style={{ color: "white" }}>
            Iniciar sesión
          </h1>
          <label htmlFor="inputEmail" className="sr-only">
            Usuario
          </label>
          <input
            type="text"
            id="inputUser"
            className="form-control"
            placeholder="usuario"
            required
            value={user.user}
            onChange={(e) => setUser({ ...user, user: e.target.value })}
            autoFocus
          />
          <div className="white-space-16"></div>
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <div className="white-space-16 col-md-12"></div>
          <div className="col-12 justify-center pl-0 pr-5">
            <button
              className="btn btn-primary "
              style={{ width: "200px" }}
              type="button"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <p className="mt-5 mb-3 text-muted">&copy; Munya software</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-4"></div>
    </div>
  );
};

export default PageIndex;
