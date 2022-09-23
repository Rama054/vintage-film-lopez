import { collection, getFirestore, addDoc } from "firebase/firestore";


function CrearDocumento(){
    
    
    const sendOrder = () => {
        const order ={
            buyer: {name: "Ramiro", phone: "0123456789", email: "prueba@pepe.com"},
            items: [{name: "Rollo Kodak", price: 2000}],
            total: 2000
        }
        const db = getFirestore();
        
        const ordersCollections = collection(db,"orders")
        addDoc(ordersCollections,order).then(({id}) => console.log(id)) 
    }

    sendOrder()
    return(
        <div>
            Crear documento
        </div>
    )


}

export default CrearDocumento;