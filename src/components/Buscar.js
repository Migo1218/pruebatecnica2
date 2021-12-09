import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { listarProductos, searchAsyn } from "../actions/searchAction";
import * as yup from 'yup'
// import styled from "styled-components";

// export const Divform = styled.div`
// margin: 0 auto;
// width: 25%;
// `


const Buscar = () => {
    const dispatch = useDispatch()
    const datos = useSelector(state => state.datos)

    

    useEffect(() => {
        dispatch(listarProductos())
     }, [ dispatch])


    const formik = useFormik({
        initialValues: {
            search:''
        },

     

        onSubmit: ({search}) => {
            // dispatch(searchAsyn(search))
           
        }
    }
        
    )
  return (
    <div>
      <h1>hola</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" name='search' placeholder="Ingrese su búsqueda" onChange={formik.handleChange}/>
        </Form.Group>

      </Form>
    </div>
  );
};

export default Buscar;
