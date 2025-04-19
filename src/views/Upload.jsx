import { useState } from "react";
import { useFile, useMedia } from '../hooks/apiHooks.js';
import useForm from "../hooks/formHooks.js";
import { useNavigate } from "react-router";

// Upload.jsx
const Upload = () => {
    const [file, setFile] = useState(null);
    const { postFile } = useFile();
    const { postMedia } = useMedia();
    const navigate = useNavigate();

    const handleFileChange = (evt) => {
        if (evt.target.files) {
            console.log(evt.target.files[0]);
            // TODO: set the file to state
            setFile(evt.target.files[0]);
        }
    };

    const doUpload = async () => {
        try {
            const token = window.localStorage.getItem("token");

            // TODO: call postFile function
            const fileResult = await postFile(file, token);
            console.log("file result:", fileResult);

            // TODO: call postMedia function
            const mediaResult = await postMedia(fileResult.data, inputs, token);
            console.log("media result:", mediaResult);

            // TODO: redirect to Home
            navigate('/');
        } catch (e) {
            console.log(e.message);
        }
    };
    
    const { inputs, handleInputChange, handleSubmit } = useForm(doUpload);

    return (
        <>
            <h1>Upload</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        name="title"
                        type="text"
                        id="title"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        rows={5}
                        id="description"
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="file">File</label>
                    <input
                        name="file"
                        type="file"
                        id="file"
                        accept="image/*, video/*"
                    onChange={handleFileChange}
                    />
                </div>
                <img
                    src={
                        file
                        ? URL.createObjectURL(file)
                        : 'https://via.placeholder.com/200?text=Choose+image'
                    }
                    alt="preview"
                    width="200"
                />
                <button
                    type="submit"
                    disabled={file && inputs.title.length > 3 ? false : true}
                >
                    Upload
                </button>
            </form>
        </>
    );
};

export default Upload;