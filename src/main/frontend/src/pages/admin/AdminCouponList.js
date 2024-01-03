import AdminSide from "../../components/admin/AdminSide";
import CouponAll from "../../components/admin/couponTool/CouponAll";

function AdminCouponList() {
    return (
    <div style={{display:"flex", backgroundColor:"white"}}>
        <div style={{backgroundColor:"white",height:"1080px"}}>
            <AdminSide/>
        </div>
        <div style={{width:"100%"}}>
            <div style={{width:"100%", display:"flex", justifyContent:"center",paddingTop:"30px",paddingBottom:"30px"}}>
                <CouponAll/>
            </div>
        </div>
    </div>
    );
}

export default AdminCouponList;