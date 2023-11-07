import "../../../styles/myInfo/myWishList.css"

const MyWishList = () => {

    const wishItems = [
        {
            id: 1,
            price: "700,000 원",
            imageSrc: "7.png",
            description: "SELMER(셀마) Soprano SA80 II JUBILEE AUG Gold Plated"
        },
        {
            id: 2,
            price: "380,000 원",
            imageSrc: "7.png",
            description: "YAMAHA(야마하) YAS-62 Alto Saxophone"
        },
        {
            id: 3,
            price: "320,000 원",
            imageSrc: "7.png",
            description: "YAMAHA(야마하) PAC-112 퍼시피카 블루"
        },
        {
            id: 4,
            price: "520,000 원",
            imageSrc: "7.png",
            description: "YAMAHA(야마하) YBL-421G Bass Trombone"
        }
    ];

    const itemWishList = wishItems.map((item) => (
        <div className="wish-item">
            <div className="wish-item-box">
                <div className="">
                    이미지
                </div>
                <div className="w-i-title">
                    {item.description} 
                </div>
                <div className="w-i-proice">
                    {item.price}
                </div>
            </div>
        </div>
    ));

    return (
        <>
            {itemWishList} 
        </>
    );
}

export default MyWishList;