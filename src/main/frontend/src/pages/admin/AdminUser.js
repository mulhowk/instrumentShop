import AdminSide from "../../components/admin/AdminSide";
import AdminUserFilter from "../../components/admin/userTool/AdminUserFilter";
import AdminUserTool from "../../components/admin/userTool/AdminUserTool";


function AdminUser() {
    return (
    <div style={{display:"flex", backgroundColor:"white"}}>
        <div style={{backgroundColor:"white",height:"1080px"}}>
            <AdminSide/>
        </div>
        <div style={{width:"100%"}}>
            <div style={{width:"100%", display:"flex", justifyContent:"center",paddingTop:"30px",paddingBottom:"30px"}}>
                <AdminUserTool/>
                    <div style={{width:'20px'}}>

                    </div>
                <AdminUserFilter/>
            </div>
        </div>
    </div>
    );
}

export default AdminUser;