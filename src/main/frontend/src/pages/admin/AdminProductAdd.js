import AdminSide from "../../components/admin/AdminSide";
import AdminProductCreate from "../../components/admin/productAll/AdminProductCreate";

const AdminProductAdd = () => {
    return (
        <>
        <div style={{display:"flex", backgroundColor:"white"}}>
        <div style={{backgroundColor:"white",height:"1080px"}}>
            <AdminSide/>
        </div>
        <div style={{width:"100%"}}>
            <div style={{width:"100%", display:"flex", justifyContent:"center",paddingTop:"30px"}}>
                <AdminProductCreate/>
            </div>
        </div>
    </div>
    </>
    );
}

export default AdminProductAdd;