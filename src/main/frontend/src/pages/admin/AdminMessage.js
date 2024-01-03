import AdminSide from "../../components/admin/AdminSide";
import AdminSendMessage from "../../components/admin/userTool/AdminSendMessage";

function AdminMessage() {
    return (
    <div style={{display:"flex", backgroundColor:"white"}}>
        <div style={{backgroundColor:"white",height:"1080px"}}>
            <AdminSide/>
        </div>
        <div style={{width:"100%"}}>
            <div style={{width:"100%", display:"flex", justifyContent:"center",paddingTop:"30px",paddingBottom:"30px"}}>
                <AdminSendMessage/>
            </div>
        </div>
    </div>
    );
}

export default AdminMessage;