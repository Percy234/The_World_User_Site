import axios from "axios";
import { useState } from "react";

const api = `http://localhost:3000/kingdoms/upload`;

const ApiTest = () => {

    const [file, setFile] = useState(null);

    const fileChange = (e) => {
        setFile(e.target.files[0]);
    }
    
    const uploadFile = async () => {
        if (!file) {
            alert("Chưa chọn file");
            return;
        }

        const formData = new FormData();
        formData.append("kingdom-img", file);

        try {
            const response = await axios.post(api, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (response.status === 200) {
                alert("Upload thành công");
            } else {
                alert("Upload thất bại");
            }
        } catch (error) {
            console.error("Lỗi khi upload file:", error);
        }
    }
    return (
        <div>
            <input type="file" onChange={fileChange} />
            <button onClick={uploadFile}>Upload File</button>
        </div>
    )
};

export default ApiTest;
