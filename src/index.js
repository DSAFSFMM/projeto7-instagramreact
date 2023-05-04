import ReactDOM from "react-dom"
import App from "./App"

const index = function(){
    return(
        <App/>
    );
};
const raiz = document.querySelector(".root");
ReactDOM.render(index(),raiz);