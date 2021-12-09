import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { listarProductos } from '../actions/searchAction'
import Buscar from '../components/Buscar'
import Principal from '../components/Principal'

export default function Container() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(listarProductos())
     }, [dispatch])
    return (
        <div>
            <Buscar/>
            <Principal/>
        </div>
    )
}
