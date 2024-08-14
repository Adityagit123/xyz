import NavBar from "../features/navbar/navbar";
import ProductList from "../features/product-list/counter/ProductList";

function App(){
    return (
        <div >
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
    ); 
}

export default App;