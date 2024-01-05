import './adminProductCreate.css';
import ReactQuill from "react-quill";

const AdminProductCreate = () => {
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

    return (
        <div>
            <div className="create-goods-top">
                <div className="goods-top-img">
                    <div className="img-header">
                        <div className="header-in-font">
                            <span>이미지 등록</span>
                        </div>
                    </div>
                    <div className="img-content">
                        <div className="img-content-btn">
                            <button>이미지 등록</button>
                        </div>
                    </div>
                </div>
                <div className="goods-top-descriptrion">
                    <div className="img-header">
                        <div className="header-in-font">
                            <span>간단 설명</span>
                        </div>
                    </div>
                    <div className="img-content">
                        <div className="d-c-content">
                            <div className="d-c-tab">
                                <div>
                                    <span>상품명</span>
                                </div>
                                <div className="input">
                                    <input></input>
                                </div>
                            </div>
                            <div className="d-c-tab-input">
                                <div>
                                    <span>상품 간략 설명</span>
                                </div>
                                <div className="input">
                                    <input></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="create-goods-middle">
                <div className="goods-middle-info">
                        <div className="img-header">
                            <div className="img-header">
                                <div className="header-in-font">
                                    <span>상세 설명 등록</span>
                                </div>
                            </div>
                        </div>
                        <div className="img-content">
                            <div className="m-c-textarea">
                                <div className="goods-control-form-detail-input">
                                    <ReactQuill
                                        style={{
                                            color: "black", width: "800px"
                                            , height: "250px", marginTop: "-20px",
                                            marginBottom: "20px", backgroundColor: "white"
                                        }}
                                        module={modules}
                                        formats={formats}
                                    />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="create-goods-bottom">
                <div className="detail-info-set">
                    <div className="img-header">
                        <div className="header-in-font">
                            <span>상세 설정 등록 1</span>
                        </div>
                    </div>
                    <div className="img-content">
                        <div className="deatail-price">
                            <div>
                                <span>상품가격</span>
                            </div>
                            <div className="input">
                                <input></input>
                            </div>
                        </div>
                        <div className="deatail-price">
                            <div>
                                <span>재고</span>
                            </div>
                            <div className="input">
                                <input></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail-info-price">
                    <div className="img-header">
                        <div className="header-in-font">
                            <span>상세 설정 등록 2</span>
                        </div>
                    </div>
                    <div className="img-content">
                        <div className="deatail-setting">
                            <div>
                                <span>브랜드명</span>
                            </div>
                            <div className="input">
                                <input></input>
                            </div>
                        </div>
                        <div className="deatail-setting">
                            <div>
                                <span>카테고리</span>
                            </div>
                            <div className="input">
                                <input></input>
                            </div>
                        </div>
                        <div className="deatail-setting">
                            <div>
                                <span>옵션</span>
                            </div>
                            <div className="input">
                                <input></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProductCreate;