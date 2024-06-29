import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export const NavBar = () => {

  let [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriaRef = collection(db, "categoria");
    getDocs(categoriaRef)
      .then((res) => {
        setCategories(res.docs.map((doc) => {
          return { ...doc.data() }
        }));
      })
  }, [])

  return (
    <nav className="nav navbar navbar-dark navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler navbar-icono" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav-menu navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="active" className="nav-link">Inicio</NavLink>
            </li>
            {categories.map((category) => (
              <li className="nav-item" key={category.id}>
                <NavLink to={`/category/${category.id}`} activeClassName="active" className="nav-link">{category.nombre}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );

  // return (
  //   <nav className="nav">
  //       <ul className="nav-menu">
  //           <li className="nav-item">
  //             <NavLink to="/" activeclassname="active" className="nav-link">Inicio</NavLink>
  //           </li>
  //           {
  //             categories.map((category) => {
  //                 return (
  //                   <li className="nav-item" key={category.id}>
  //                     <NavLink to={`/category/${category.id}`} activeclassname="active" className="nav-link">
  //                       {category.nombre}
  //                     </NavLink>
  //                   </li>
  //                 )
  //             })
  //           }
  //       </ul>
  //   </nav>
  // )
}
