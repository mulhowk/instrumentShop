import React from 'react';
import '../../styles/globalStyles.css'
import '../../styles/MainPage/QuickLink.css'

function QuickLink(){
    return(
    <div className="quick-links">
        <p className="quick-link-title">QUICK CATEGORY</p>
        <div className="quick-link-01">
            <div className="quick-link">
                <a href="goodsList/category/1"><img src="/QuickCategory/cate1.jpg" alt="cate1" /></a>
            </div>
            <div className="quick-link">
                <a href="#"><img src="/QuickCategory/cate2.jpg" alt="cate2" /></a>
            </div>
            <div className="quick-link">
                <a href="#"><img src="/QuickCategory/cate3.jpg" alt="cate3" /></a>
            </div>
            <div className="quick-link">
                <a href="#"><img src="/QuickCategory/cate4.jpg" alt="cate4" /></a>
            </div>
            <div className="quick-link">
                <a href="#"><img src="/QuickCategory/cate5.jpg" alt="cate5" /></a>
            </div>
            <div className="quick-link">
                <a href="#"><img src="/QuickCategory/cate6.jpg" alt="cate6" /></a>
            </div>
        </div>
        <div className="quick-link-02">
            <div className="quick-link">
                <a href="#"><img src="/QuickCategory/cate7.jpg" alt="cate7" /></a>
            </div>
            <div className="quick-link">
                <a href="#"><img src="/QuickCategory/cate8.jpg" alt="cate8" /></a>
            </div>
            <div className="quick-link">
                <a href="#"><img src="/QuickCategory/cate9.jpg" alt="cate9" /></a>
            </div>
            <div className="quick-link">
                <a href="#"><img src="/QuickCategory/cate10.jpg" alt="cate10" /></a>
            </div>
            <div className="quick-link">
                <a href="#"><img src="/QuickCategory/cate11.jpg" alt="cate11" /></a>
            </div>
            <div className="quick-link">
                <a href="#"><img src="/QuickCategory/cate12.jpg" alt="cate12" /></a>
            </div>
        </div>
    </div>
    );
}

export default QuickLink;