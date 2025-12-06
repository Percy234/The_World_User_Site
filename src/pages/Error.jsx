import { useState, useEffect } from "react";


export default function ErrorPage() {
    const [errorData, setErrorData] = useState(null);
    const ERROR_API = "http://localhost:3000/"; 

    useEffect(() => {
        fetch(ERROR_API)
            .then(res => res.json())
            .then(errorJSON => {
                setErrorData(errorJSON);
                console.log("Error API:", errorJSON);
            })
            .catch(err => {
                setErrorData({
                    status: "failed",
                    statusCode: 500,
                    message: err.message
                });
            });
    }, []);

    if (!errorData) return <h2>Loading error...</h2>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Error Page</h1>

            <div>
                <p>{errorData.status}</p>
                <p>{errorData.statusCode}</p>
                <p>{errorData.message}</p>
            </div>

            <br />
            <a href="/">Quay lại trang chủ</a>
        </div>
    );
}
