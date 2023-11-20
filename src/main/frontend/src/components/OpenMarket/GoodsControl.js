import React, {useState} from "react";
import "../../styles/OpenMarket/GoodsControl.css"
import ReactQuill from "react-quill";


function GoodsControl() {

        const [selectedImage, setSelectedImage] = useState(null);
        const [previewImage, setPreviewImage] = useState(null);

        const handleImageChange = (e) => {
            const imageFile = e.target.files[0];

            if(imageFile) {
                if(!imageFile.type.startsWith('image/')){
                    alert('이미지 파일이 아닙니다.');
                    return;
                }

                setSelectedImage(imageFile);

                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewImage(reader.result);
                };

                reader.readAsDataURL(imageFile);
            }
        };

        const handleButtonClick = () => {
            document.getElementById('imageInput').click();
        }


        const [selectedCountry, setSelectedCountry] = useState('');

        const handleCountryChange = (e) => {
            setSelectedCountry(e.target.value);
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
        setContent(newContent);
    };

    const firstOptions = ['Option A', 'Option B', 'Option C']; // 추가된 첫 번째 옵션들
    const secondOptionsMap = {
        'Option A': ['Option A-1', 'Option A-2', 'Option A-3'],
        'Option B': ['Option B-1', 'Option B-2', 'Option B-3'],
        'Option C': ['Option C-1', 'Option C-2', 'Option C-3'],
    }; // 첫 번째 옵션에 따른 두 번째 옵션들의 매핑

    const [firstOption, setFirstOption] = useState('');
    const [secondOption, setSecondOption] = useState('');

    const handleFirstOptionChange = (event) => {
        const selectedOption = event.target.value;

        // 선택된 첫 번째 옵션에 따라 두 번째 옵션을 설정
        setSecondOption('');
        setFirstOption(selectedOption);
    };

    const handleSecondOptionChange = (event) => {
        const selectedOption = event.target.value;
        setSecondOption(selectedOption);
    };

    // 선택한 옵션을 저장하는 상태 변수
    const [selectedOption, setSelectedOption] = useState('');
    // 각 입력란의 값을 저장하는 상태 변수 배열
    const [inputValues, setInputValues] = useState(['', '', '', '', '']);

    // 옵션 선택 시 호출되는 함수
    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
    };

    // 입력란 값 변경 시 호출되는 함수
    const handleInputChange = (index, event) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);
    };

    return (
        <div className="open-market">
            <div className="open-market-header">
                <div className="open-market-header-title">
                    <p>오픈마켓</p>
                </div>
                <div className="open-market-header-logo">
                    <img src="../../logo0.png" alt="open-market-logo"/>
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
                            <input type="text"/>
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
                            <input type="text"/>&nbsp;원
                        </div>
                    </div>
                    <div className="goods-control-form-count">
                        <div className="goods-control-form-count-title">
                            <p>재고</p>
                        </div>
                        <div className="goods-control-form-count-input">
                            <input type="text"/>&nbsp;개
                        </div>
                    </div>
                    <div className="goods-control-form-category">
                        <div className="goods-control-form-category-title">
                            <p>카테고리</p>
                        </div>
                        <div className="goods-control-form-category-input">
                            <label>
                                <select value={firstOption} onChange={handleFirstOptionChange}>
                                    <option value="">선택하세요</option>
                                    {firstOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                <select
                                    value={secondOption}
                                    onChange={handleSecondOptionChange}
                                    hidden={firstOption === ''}
                                    style={{marginLeft : "10px"}}
                                >
                                    <option value="">선택하세요</option>
                                    {secondOptionsMap[firstOption]?.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="goods-control-form-option">
                        <div className="goods-control-form-option-title">
                            <p>옵션</p>
                        </div>
                        <div className="goods-control-form-option-input">
                            <select value={selectedOption} onChange={handleOptionChange}>
                                <option value="">미설정</option>
                                <option value="option1">옵션 1</option>
                                <option value="option2">옵션 2</option>
                                {/* 추가적인 옵션들을 필요에 따라 추가할 수 있습니다 */}
                            </select>

                            {/* 선택된 옵션에 따라 나타나는 입력란들 */}
                            {selectedOption && (
                                <div>
                                    {/* 5개의 입력란을 나타내는 맵 함수 */}
                                    {inputValues.map((value, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            placeholder={`입력란 ${index + 1}`}
                                            value={value}
                                            style={{width  : "100px", marginLeft : "10px"}}
                                            onChange={(event) => handleInputChange(index, event)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="goods-control-form-country">
                        <div className="goods-control-form-country-title">
                            <p>원산지</p>
                        </div>
                        <div className="goods-control-form-country-input">
                            <select id="country" value={selectedCountry} onChange={handleCountryChange}>
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
            <div className="goods-control-submit">
                <button>저장</button>
                <button style={{display : "none"}}>수정</button>
            </div>
        </div>
    );
}

export default GoodsControl;