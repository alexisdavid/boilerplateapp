/**
 *  @version 1.0.2
 *  @author Trejocode - Sergio
 *  @description Template de las páginas, preparada para SEO.
 */

import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";

// Componentes
import Header from "../components/header";
import Sidebar from "../components/header/sidebar";
// import Footer from "../components/footer";

/**
 *  @param: {String} title: "Título de la página"
 *  @param: {String} description: "Descripción de la página"
 *  @param: {String} keywords: "Etiquetas para SEO"
 */

const Layout = (props) => {
  const { title, description, keywords, children } = props;

  return (
    <Fragment>
      <Helmet>
        <title>
          {" "}
          {title
            ? title + " - React Boilerplate"
            : "React.js Boilerplate - Trejocode"}{" "}
        </title>
        <meta
          name="description"
          content={
            description ||
            "React.js Simple and clean Boilerplate, SEO Ready | Reactjs plantilla limpia, organizada y optimizada para SEO"
          }
        />
        <meta
          name="keywords"
          content={
            keywords ||
            "React.js, boilterplate, trejocode react, reactjs boilterplate, react-router-dom"
          }
        />
      </Helmet>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div> */}

            {children}
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
