import MyPageReview from "../../components/myPage/inMyReview/MyPageReview.js";
import MyPageReviewStar from "../../components/myPage/inMyReview/MyPageReviewStar.js";

function InMyReview() {

    return (
        <div style={{display:"flex", alignItems:"center",flexDirection:"column"}}>
            <MyPageReviewStar/>
            <MyPageReview/>
        </div>
    );
}

export default InMyReview;