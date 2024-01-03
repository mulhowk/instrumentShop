import AdminNewNotice from "../../components/admin/AdminNewNotice";
import AdminReview from "../../components/admin/AdminReview";
import AdminSide from "../../components/admin/AdminSide";
import AdminTodayCheck from "../../components/admin/AdminTodayCheck";

function AdminPage() {
    return (
        <div style={{display:"flex", backgroundColor:"white"}}>
            <div style={{backgroundColor:"white",height:"1080px"}}>
                <AdminSide/>
            </div>
            <div style={{width:"100%"}}>
                <AdminNewNotice/>
                <div style={{width:"100%", display:"flex", justifyContent:"center",paddingTop:"30px",paddingBottom:"30px"}}>
                    <AdminReview/>
                    <div style={{width:"150px"}} />
                    <AdminTodayCheck/>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;
