import AdminSide from "../../components/admin/AdminSide";
import AdminProductAll from "../../components/admin/productAll/AdminProductAll";
import AdminProductFilter from "../../components/admin/productAll/AdminProductFilter";

const AdminProductMange = () => {
    return (
        <>
        <div style={{display:"flex", backgroundColor:"white"}}>
        <div style={{backgroundColor:"white",height:"auto"}}>
            <AdminSide/>
        </div>
        <div style={{width:"100%"}}>
            <div style={{width:"100%", display:"flex", justifyContent:"center",paddingTop:"30px",paddingBottom:"30px"}}>
                <AdminProductAll/>
            </div>
        </div>
    </div>
    </>
    );
}

export default AdminProductMange;