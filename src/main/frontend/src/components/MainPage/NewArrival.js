import React from 'react';
import '../../styles/globalStyles.css'
import '../../styles/MainPage/NewArrival.css'

function NewArrival(){
    return(
        <div className="new-arrivals">
            <p className="new-arrival-title">NEW ARRIVALS</p>
            <div className="new-arrival-01">
                <div className="new-arrival">
                    <a href="/goodsList/228392382"><img src="/NewArrivals/md_choice1.jpg" alt="md1" /></a>

                </div>
                <div className="new-arrival">
                    <a href="/goodsList/228392382"><img src="/NewArrivals/md_choice2.jpg" alt="md2" /></a>
                </div>
            </div>
            <div className="new-arrival-02">
                <div className="new-arrival">
                    <a href="/goodsList/228392382"><img src="/NewArrivals/md_choice3.jpg" alt="md3" /></a>
                </div>
                <div className="new-arrival">
                    <a href="/goodsList/228392382"><img src="/NewArrivals/md_choice4.jpg" alt="md4" /></a>
                </div>
            </div>
            <div className="new-arrival-03">
                <div className="new-arrival">
                    <a href="/goodsList/228392382"><img src="/NewArrivals/md_choice5.jpg" alt="md5" /></a>
                </div>
                <div className="new-arrival">
                    <a href="/goodsList/228392382"><img src="/NewArrivals/md_choice6.jpg" alt="md6" /></a>
                </div>
            </div>
        </div>
    );
}

export default NewArrival;