import AdminSide from "../../components/admin/AdminSide";
import CouponForm from "../../components/admin/couponTool/CouponForm";


function AdminCouponPages() {
    return (
    <div style={{display:"flex", backgroundColor:"white"}}>
        <div style={{backgroundColor:"white",height:"1080px"}}>
            <AdminSide/>
        </div>
        <div style={{width:"100%"}}>
            <div style={{width:"100%", display:"flex", justifyContent:"center",paddingTop:"30px"}}>
                <CouponForm/>
            </div>
        </div>
    </div>
    );
}

export default AdminCouponPages;