import {useSearchParams} from "react-router-dom";


export function FailPage() {
    const [searchParams] = useSearchParams();

    return(
        <div>
            <h1>결제 실패..</h1>
            <div>
                <p>사유 : {`${searchParams.get("message")}`}</p>
            </div>
        </div>
    );
}