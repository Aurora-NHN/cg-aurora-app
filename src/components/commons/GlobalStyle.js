import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"
import "~/assets/css/font-awesome.css"
import "~/assets/css/icomoon.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "~/assets/scss/main.scss"
import 'primeicons/primeicons.css';

function GlobalStyle({children}){

    return(
        <>
            {children}
        </>
    )
}
export default GlobalStyle