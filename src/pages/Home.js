import NavBar from "../features/navbar/navbar";
import ProductList from "../features/product/components/ProductList";

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