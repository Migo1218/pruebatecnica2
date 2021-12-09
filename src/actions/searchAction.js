import { types } from "../types/types"
import { collection,getDocs,query,where} from "@firebase/firestore";
import { db } from "../firebase/firebase";


//LISTAR O LEER DATOS

export const listarProductos = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "pruebatecnica2"));
        
     
        const produc = [];
        querySnapshot.forEach((doc) => {
            produc.push({
                ...doc.data()
                
            })
            // console.log(produc)
        });
        dispatch(listar(produc));
    }
}

export const listar = (products) => {
    return {
        type: types.listar,
        payload: products
    }
}



//BUSQUEDA

export const searchAsyn = (producto) => {

    return async(dispatch) => {
       
        const productos = collection(db,"pruebatecnica2");
        console.log(productos)
        const q = query(productos,where("nombre","==",producto))
        const datos = await getDocs(q);
        console.log(datos)
        const productoM = [];
        datos.forEach((docu) => {
            console.log(docu)
            productoM.push(docu.data())
        }) 
        console.log(productoM)
        dispatch(searchSync(productoM))
    }
}


export const searchSync = (producto) => {
    return{
        type: types.buscar,
        payload: producto
    }
}



