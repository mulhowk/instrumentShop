import React, {useState} from "react";
import "../../styles/OpenMarket/GoodsControl.css"
import ReactQuill from "react-quill";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function GoodsControl() {

        const [goodsName, setGoodsName] = useState('');
        const [goodsPrice, setGoodsPrice] = useState(0);
        const [goodsImg, setGoodsImg] = useState(null);
        const [parentCategory, setParentCategory] = useState('');
        const [childCategory, setChildCategory] = useState('');
        const [goodsDetail, setGoodsDetail] = useState('');
        const [goodsOption, setGoodsOption] = useState('');
        const [goodsBrand, setGoodsBrand] = useState('');
        const [goodsQuantity, setGoodsQuantity] = useState(0);
        const [goodsCountry, setGoodsCountry] = useState('');
        const [options, setOptions] = useState(['','','','','']);
        const [goodsDate, setGoodsDate] = useState(null);
        const [goodsDetailImg, setGoodsDetailImg] = useState(null);

        const navigate = useNavigate();

        const handlePriceChange = (e) => {
            const price = parseInt(e.target.value, 10);
            setGoodsPrice(price);
        }

        const handleQuantityChange = (e) => {
            const quantity = parseInt(e.target.value, 10);
            setGoodsQuantity(quantity);
        }

        const handleCreate = () => {

            const isConfirmed = window.confirm('상품을 만드시겠습니까?');

            if(isConfirmed) {
                if(!goodsName) {
                    alert('상품명을 입력해주세요');
                    return;
                }
                if(!goodsPrice) {
                    alert('상품 가격을 입력해주세요');
                    return;
                }
                if(!goodsImg) {
                    alert('상품 이미지를 선택해주세요');
                    return;
                }
                if(!parentCategory) {
                    alert('상품 카테고리를 선택해주세요');
                    return;
                }
                if(!childCategory) {
                    alert('상품 소카테고리를 선택해주세요');
                    return;
                }
                if(!goodsDetail) {
                    alert('상품 설명을 입력해주세요');
                    return;
                }
                if(!goodsBrand) {
                    alert('상품 브랜드를 입력해주세요');
                    return;
                }
                if(!goodsQuantity) {
                    alert('상품 재고량을 입력해주세요');
                    return;
                }
                if(!goodsCountry) {
                    alert('상품 원산지를 입력해주세요');
                    return;
                }
                if(!goodsDetailImg){
                    alert('상품 상세설명에 들어갈 이미지를 선택해주세요.');
                    return;
                }
            }

            // 각 상태값을 사용해 서버에 상품 생성 요청을 보냄
            const formGoodsData = new FormData();
            formGoodsData.append('goodsImg', goodsImg);
            formGoodsData.append('parentCategory', parentCategory);
            formGoodsData.append('childCategory', childCategory);
            formGoodsData.append('goodsName', goodsName);
            formGoodsData.append('goodsPrice', goodsPrice);
            formGoodsData.append('goodsDetail', goodsDetail);
            formGoodsData.append('goodsQuantity', goodsQuantity);
            formGoodsData.append('goodsCountry', goodsCountry);
            formGoodsData.append('goodsBrand', goodsBrand);
            formGoodsData.append('goodsOption', goodsOption);
            formGoodsData.append('options', options);
            formGoodsData.append('goodsDetailImg', goodsDetailImg);

            // 서버에 상품 생성 요청
            axios.post('/openMarket/goodsControl', formGoodsData, {
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                }
            })
                .then(createdGoods => {
                    alert('상품이 등록되었습니다!');
                    navigate('/openMarket');
                })
                .then(data => console.log(data))
                .catch(error => console.error('Error creating goods: ', error));
        };

        const [selectedImage, setSelectedImage] = useState(null);
        const [previewImage, setPreviewImage] = useState(null);

        const handleImageChange = (e) => {
            const imageFile = e.target.files[0];

            setGoodsImg(imageFile);

            setSelectedImage(imageFile);

                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewImage(reader.result);
                };

                reader.readAsDataURL(imageFile);
            }

    const [selectedDetailImage, setSelectedDetailImage] = useState(null);
    const [previewDetailImage, setPreviewDetailImage] = useState(null);
    const handleDetailImageChange = (e) => {
        const imageFile = e.target.files[0];

        setGoodsDetailImg(imageFile);

        setSelectedDetailImage(imageFile);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewDetailImage(reader.result);
        };

        reader.readAsDataURL(imageFile);
    }


        const handleButtonClick = () => {
            document.getElementById('imageInput').click();
        }

    const handleDetailButtonClick = () => {
        document.getElementById('detailImageInput').click();
    }

        const [selectedCountry, setSelectedCountry] = useState('');

        const handleCountryChange = (e) => {
            const country = e.target.value;
            setSelectedCountry(country);
            setGoodsCountry(country);
        };

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            ['link'],
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet', 'indent',
        'link',
    ];

    const [content, setContent] = useState('');

    const handleChange = (newContent) => {
        const noHtmlContent = stripHtmlTags(newContent);
        setContent(newContent);
        setGoodsDetail(noHtmlContent);
    };

    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    const firstCategorys = ['색소폰', '관악기', '타악기/드럼', '현악기',
        '기타/베이스', '건반악기', '교제악기', 'etc']; // 추가된 첫 번째 옵션들
    const secondCategorys = {
        '색소폰': ['소프라노색소폰', '알토색소폰', '테너색소폰', '바리톤색소폰', '악세사리관리용품'],
        '관악기': ['플룻피콜로', '클라리넷오보에', '트럼펫', '트롬본', '관악기악세사리'],
        '타악기드럼': ['드럼스틱', '드럼세트', '심벌', '전자드럼', '타악기악세사리'],
        '현악기': ['바이올린', '사일런트바이올린', '비올라', '첼로', '콘트라베이스', '현악기악세사리'],
        '기타베이스': ['어쿠스틱기타', '일렉기타', '클래식기타', '베이스기타', '우쿠렐레', '기타악세사리'],
        '건반악기': ['디지털피아노', '신디사이저', '스테이지피아노', '포터블키보드', '건반악기악세서리'],
        '교재악기': ['하모니카', '오카리나', '교재용타악기', '피아니카', '리코더'],
        'etc': ['엠프', '마이크', '믹서', '반주기']
    }; // 첫 번째 옵션에 따른 두 번째 옵션들의 매핑

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        setParentCategory(category);
    };

    const handleSubCategoryChange = (e) => {
        const subCategory = e.target.value;
        setSelectedSubCategory(subCategory);
        setChildCategory(subCategory);
    }


    const [firstOption, setFirstOption] = useState('');
    const [showBoxes, setShowBoxes] = useState(false);

    const handleFirstOptionChange = (event) => {
        const text = event.target.value;
        setFirstOption(text);
        setGoodsOption(text);

        // 문장이 입력되면 인풋 박스를 표시
        if (text.trim() !== ''){
            setShowBoxes(true);
        }else {
            setShowBoxes(false);
            setOptions(['','','','','']);
        }
    };

    const handleOptionsChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    }

    return (
        <div className="open-market">
            <div className="open-market-header">
                <div className="open-market-header-title">
                    <p>오픈마켓</p>
                </div>
                <div className="open-market-header-logo">
                    <a href="/">
                        <img src="../../logo0.png" alt="open-market-logo"/>
                    </a>
                </div>
                <div className="open-market-header-member">
                    <p><span>YAMAHA</span> 님 안녕하세요. 좋은 하루 되세요!</p>
                </div>
            </div>
            <div className="goods-control">
                <div className="goods-control-title">
                    <p>상품등록</p>
                    <p style={{display:"none"}}>상품수정</p>
                </div>
                <div className="goods-control-form">
                    <div className="goods-control-form-name">
                        <div className="goods-control-form-name-title">
                            <p>상품명</p>
                        </div>
                        <div className="goods-control-form-name-input">
                            <input type="text" value={goodsName}
                                   onChange={e => setGoodsName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="goods-control-form-img">
                        <div className="goods-control-form-img-title">
                            <p>상품이미지</p>
                        </div>
                        <div className="goods-control-form-img-img">
                            {previewImage && (
                                <div>
                                    <img src={previewImage} alt="Preview"/>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                id="imageInput"
                                style={{display : 'none'}}
                            />
                            <button onClick={handleButtonClick}>이미지등록</button>
                        </div>
                    </div>
                    <div className="goods-control-form-price">
                        <div className="goods-control-form-price-title">
                            <p>상품가격</p>
                        </div>
                        <div className="goods-control-form-price-input">
                            <input type="number" value={goodsPrice}
                            onChange={handlePriceChange}/>&nbsp;원
                        </div>
                    </div>
                    <div className="goods-control-form-count">
                        <div className="goods-control-form-count-title">
                            <p>재고</p>
                        </div>
                        <div className="goods-control-form-count-input">
                            <input type="number" value={goodsQuantity}
                            onChange={handleQuantityChange}/>&nbsp;개
                        </div>
                    </div>
                    <div className="goods-control-form-category">
                        <div className="goods-control-form-category-title">
                            <p>카테고리</p>
                        </div>
                        <div className="goods-control-form-category-input">
                            <label>
                                <select value={parentCategory} onChange={handleCategoryChange}>
                                    <option value="">선택하세요</option>
                                    {firstCategorys.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                <select
                                    value={childCategory}
                                    onChange={handleSubCategoryChange}
                                    hidden={parentCategory === ''}
                                    style={{marginLeft : "10px"}}
                                >
                                    <option value="">선택하세요</option>
                                    {secondCategorys[parentCategory]?.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="goods-control-form-brand">
                        <div className="goods-control-form-brand-title">
                            <p>브랜드명</p>
                        </div>
                        <div className="goods-control-form-brand-input">
                            <input type="text" value={goodsBrand}
                                   onChange={e => setGoodsBrand(e.target.value)}/>
                        </div>
                    </div>
                    <div className="goods-control-form-option">
                        <div className="goods-control-form-option-title">
                            <p>옵션</p>
                        </div>
                        <div className="goods-control-form-option-input">
                            <input type="text"
                                   placeholder="옵션 사용시 옵션명 입력"
                                   value={firstOption}
                                   onChange={handleFirstOptionChange}
                                   />
                            {showBoxes && (
                                <div>
                                    {options
                                        .map((option,index) =>
                                            (<input key={index} type="text"
                                                   placeholder={option} value={option}
                                            onChange={
                                                (e) =>
                                                    handleOptionsChange(index, e.target.value)}/>
                                            )
                                        )
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="goods-control-form-country">
                        <div className="goods-control-form-country-title">
                            <p>원산지</p>
                        </div>
                        <div className="goods-control-form-country-input">
                            <select id="country" value={goodsCountry} onChange={handleCountryChange}>
                                <option value="">-- 선택하세요 --</option>
                                <option value="Korea">대한민국</option>
                                <option value="USA">미국</option>
                                <option value="Italia">이탈리아</option>
                                <option value="France">프랑스</option>
                                <option value="Germany">독일</option>
                                <option value="UK">영국</option>
                                <option value="China">중국</option>
                            </select>
                        </div>
                    </div>
                    <div className="goods-control-form-detail">
                        <div className="goods-control-form-detail-title">
                            <p>상품설명</p>
                        </div>
                        <div className="display-block">
                        <div className="goods-control-form-img-img">
                            {previewDetailImage && (
                                <div>
                                    <img src={previewDetailImage} alt="PreviewDetail"/>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleDetailImageChange}
                                id="detailImageInput"
                                style={{display : 'none'}}
                            />
                            <button onClick={handleDetailButtonClick}>상세 이미지등록</button>
                        </div>
                        <div className="goods-control-form-detail-input">
                            <ReactQuill
                                style={{color : "black", width : "800px"
                                    , height : "250px", marginTop : "-20px",
                            marginBottom : "20px", backgroundColor : "white"}}
                                value = {content}
                                onChange = {handleChange}
                                module = {modules}
                                formats={formats}
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="goods-control-submit">
                <button onClick={handleCreate}>저장</button>
                <button style={{display : "none"}}>수정</button>
            </div>
        </div>
    );
}

export default GoodsControl;