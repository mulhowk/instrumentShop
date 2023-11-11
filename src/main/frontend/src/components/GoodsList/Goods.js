import React, {useState} from 'react';
import "../../styles/GoodsList/Goods.css"

function Goods(){

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('최신순');

    const options = ['최신순', '낮은가격순', '높은가격순', '리뷰많은순', '판매순'];

    const goodsList =[
        {
            id : 1,
            img : '/Goods/goods1.jpeg',
            title : 'selmer(셀마) Soprano SA80 II JUBILEE1',
            price : 6300000,
            score : 4.5,
            amount : 10,
            count : 1
        },
        {
            id : 2,
            img : '/Goods/goods2.jpeg',
            title : 'selmer(셀마) Soprano SA80 II JUBILEE2',
            price : 6300000,
            amount : 10,
            score : 0,
            count : 0
        },
        {
            id : 3,
            img : '/Goods/goods3.jpeg',
            title : 'selmer(셀마) Soprano SA80 II JUBILEE3',
            price : 0,
            amount : 10,
            score : 4.5,
            count : 1
        },
        {
            id : 4,
            img : '/Goods/goods4.jpeg',
            title : 'selmer(셀마) Soprano SA80 II JUBILEE4',
            price : 5100000,
            amount : 10,
            score : 4.2,
            count : 6
        },
        {
            id : 5,
            img : '/Goods/goods5.jpeg',
            title : 'selmer(셀마) Soprano SA80 II JUBILEE5',
            price : 16300000,
            amount : 0,
            score : 2.7,
            count : 13
        },
        {
            id : 6,
            img : '/Goods/goods6.jpeg',
            title : 'selmer(셀마) Soprano SA80 II JUBILEE6',
            price : 6300000,
            amount : 10,
            score : 4.5,
            count : 1
        },
        {
            id : 7,
            img : '/Goods/goods7.jpeg',
            title : 'selmer(셀마) Soprano SA80 II JUBILEE7',
            price : 6300000,
            amount : 10,
            score : 4.5,
            count : 1
        },
        {
            id : 8,
            img : '/Goods/goods7.jpeg',
            title : 'selmer(셀마) Soprano SA80 II JUBILEE7',
            price : 6300000,
            score : 4.5,
            count : 1
        },
        {
            id : 9,
            img : '/Goods/goods7.jpeg',
            title : 'selmer(셀마) Soprano SA80 II JUBILEE7',
            price : 6300000,
            amount : 10,
            score : 4.5,
            count : 1
        },
        {
            id : 10,
            img : '/Goods/goods7.jpeg',
            title : 'selmer(셀마) Soprano SA80 II JUBILEE7',
            price : 6300000,
            amount : 10,
            score : 4.5,
            count : 1
        },
        {
            id : 11,
            img : '/Goods/goods7.jpeg',
            title : 'selmer(셀마) Soprano SA80 II JUBILEE7',
            price : 6300000,
            amount : 10,
            score : 4.5,
            count : 1
        }
    ];

    const itemPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPageCount = Math.ceil(goodsList.length / itemPerPage);

    const startIndex = (currentPage -1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const currentData = goodsList.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        if(newPage >= 1 && newPage <= totalPageCount){
            setCurrentPage(newPage);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPageCount; i++){
            pageNumbers.push(
                <span
                    key={i}
                    className={i === currentPage ? 'active' : ''}
                    onClick={() => handlePageChange(i)}
                    style={{margin : '10px'}}
                >
                    {i}
                </span>
            );
        }
        return pageNumbers;
    };

    const showPreviouButton = currentPage > 1 ;
    const showNextButton = currentPage < totalPageCount;

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) =>{
        setSelectedOption(option);
        setIsOpen(false);
    };

    return(
        <div className="goods-list">
           <div className="goods-list-header">
            <div className="goods-list-count">
                TOTAL &nbsp; <span style={{color : "white"}}>{goodsList.length}</span> &nbsp; ITEMS
            </div>
            <div className="goods-list-dropdown">
                <button onClick={toggleDropdown} className="dropdown-btn">
                    {selectedOption} ▼
                </button>
                {isOpen && (
                    <div className="dropdown-option">
                        {options.map((option, index) => (
                            <a key={index} onClick={() => handleOptionClick(option)}>{option}</a>
                        ))}
                    </div>
                )}
            </div>
           </div>
            <div className="goods">
                {currentData.map((goods) => (
                        <div className="product">
                       <div className="product-img">
                           <a href="#">
                               <img src={goods.img} alt={goods.id}/>
                           </a>
                       </div>
                        <div className="product-title">
                            <a href="#">{goods.title}</a>
                        </div>
                        <div className="product-footer">
                          <div className="product-price">
                           <a>{goods.amount === 0 ?
                               (<span style={{color : "red"}}>Sold Out</span>) : goods.price === 0 ?
                                   (<span style={{color : "red"}}>전화문의</span>) : goods.price.toLocaleString()}</a>
                          </div>
                          <div className="product-review">
                            <a>{goods.count === 0 ?
                            "" : "★" + goods.score + "(" + goods.count + ")"}</a>
                          </div>
                        </div>

                    </div>
                ))}
            </div>
            <div className="page-nav">
                {showPreviouButton && (<button onClick={() => handlePageChange(currentPage - 1)}
                    className="goods-list-prev">
                        《
                </button>
                    )}
                <span style={{margin: '15px', color : "#AAAAAA"}}>{renderPageNumbers()}</span>
                {showNextButton && (<button onClick={() => handlePageChange(currentPage + 1)}
                    className="goods-list-next">
                        》
                </button>
                    )}
            </div>
        </div>
    );
}

export default Goods;