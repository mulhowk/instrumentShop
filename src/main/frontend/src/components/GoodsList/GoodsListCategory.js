import React, {useEffect, useState} from 'react';
import '../../styles/GoodsList/GoodsListCategory.css'
import {useLocation} from "react-router-dom";
import axios from "axios";

function GoodsListCategory(props){

    const categoryId = props.categoryId;
    const [countCategory, setCountCategory] = useState([]);

    useEffect(() => {
        axios.get(`/goodsList/cate/${categoryId}`)
            .then(response => {
                setCountCategory(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const saxophone = ['소프라노색소폰', '알토색소폰', '테너색소폰', '바리톤색소폰', '악세사리'];
    const windInstrument = ['플룻', '클라리넷', '트럼펫', '트롬본', '관악기악세사리'];
    const percussion = ['드럼스틱', '드럼세트', '심벌', '전자드럼', '타악기악세사리/관리용품'];
    const stringInstrument = ['바이올린', '사일런트바이올린', '비올라', '첼로', '콘트라베이스', '현악기악세사리'];
    const guitar = ['어쿠스틱기타', '일렉기타', '클래식기타', '베이스기타', '우쿠렐레', '기타악세사리'];
    const keyboard = ['디지털피아노', '신디사이저', '스테이지피아노', '포터블키보드', '건반악기악세서리'];
    const textbook = ['하모니카', '오카리나', '교재용타악기', '피아니카', '리코더'];
    const etc = ['엠프', '마이크', '믹서', '반주기'];

    let categories = useState([]);

    if(categoryId === '색소폰'){
        categories = saxophone;
    } else if(categoryId === '관악기'){
        categories = windInstrument;
    } else if(categoryId === '타악기'){
        categories = percussion;
    } else if(categoryId === '현악기'){
        categories = stringInstrument;
    } else if(categoryId === '기타베이스'){
        categories = guitar;
    } else if(categoryId === '건반악기'){
        categories = keyboard;
    } else if(categoryId === '교재악기'){
        categories = textbook;
    } else if(categoryId === 'etc'){
        categories = etc;
    }

    return(
        <div className="goods-list-categories">
            <p className="goods-list-category-title">카테고리이름</p>
                <div className="goods-list-category">
                    {categories.map((category, index) => (
                        <a href={`/goodsList/category/${categoryId}/${categories[index]}`}>
                            <div
                                key={category.id}
                                className="categories">
                                {category}({countCategory[index]})
                            </div>
                        </a>
                    ))}
                </div>
        </div>
    );
}

export default GoodsListCategory;