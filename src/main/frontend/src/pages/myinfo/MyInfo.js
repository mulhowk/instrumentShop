import Header from "../../components/Header";
import MainCategory from "../../components/MainCategory";
import Footer from "../../components/Footer";
import MyInfoSide from "../../components/myPage/MyInfoSide";
import MyInfoContent from "../../components/myPage/MyInfoContent";



function MyInfo() {
    return (
        <>
        <Header/>
        <MainCategory/>
        <div className="side-page">
            <div className="side-page-content">
                <MyInfoSide/>
                <MyInfoContent/>
            </div>
        </div>
        <Footer/>
    </>
    );
}

export default MyInfo;