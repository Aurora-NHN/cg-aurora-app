import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"
import "~/assets/css/font-awesome.css"

import "~/assets/scss/main.scss"
function GlobalStyle({children}){

    return(
        <>
            {children}
        </>
    )
}
export default GlobalStyle