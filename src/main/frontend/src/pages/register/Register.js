import RegisterForm from "../../components/register/RegisterForm";
import MainCategory from "../../components/MainCategory";
import Header from "../../components/Header";

import "../../styles/globalStyles.css"
import Footer from "../../components/Footer";

function register() {
    
    
    return (
        <>
            <Header/>
            <MainCategory/>
            <div className="page">
                <RegisterForm/>
            </div>
            <Footer/>
        </>
    );
}


export default register;