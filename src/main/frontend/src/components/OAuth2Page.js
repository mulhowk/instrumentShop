import React, {useEffect} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {setAuthToken, tokenUserInfo} from "../global/auth";

function OAuth2Page(){

    const parseTokenInfo = (tokenInfo) => {
        const [accessToken, refreshToken] = tokenInfo.split('&').map(pair => pair.split('=')[1]);

        return [accessToken, refreshToken];
    }

    const navigate = useNavigate();

    const {tokenInfo} = useParams();

    const [accessToken,refreshToken] = parseTokenInfo(tokenInfo);


    const decodedToken = tokenUserInfo(accessToken);
    {console.log(accessToken)}
    {console.log(refreshToken)}
    {console.log(decodedToken)}
    useEffect(() => {

        setAuthToken(accessToken, decodedToken.exp, refreshToken);

        alert("간편 로그인 완료!");

        navigate('/');

    }, []);


    return(
        <>
            <p>loading...</p>
        </>
    );
}

export default OAuth2Page;