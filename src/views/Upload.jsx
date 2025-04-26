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
            <h1 className="my-4 text-3xl font-bold">Upload</h1>
            <form className="p-2.5 bg-[#111738] rounded-md w-fit" onSubmit={handleSubmit}>
                <div className="p-1">
                    <label className="font-bold" htmlFor="title">Title</label>
                    <input
                        className="p-1.5 mb-2.5 rounded-sm border border-[#263277] w-full"
                        name="title"
                        type="text"
                        id="title"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="p-1">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="p-1.5 rounded-sm border border-[#263277] w-full"
                        name="description"
                        rows={5}
                        id="description"
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="p-1">
                    <label htmlFor="file">File</label>
                    <input
                        className="p-1.5 mb-2.5 rounded-sm border border-[#263277] w-full"
                        name="file"
                        type="file"
                        id="file"
                        accept="image/*, video/*"
                        onChange={handleFileChange}
                    />
                </div>
                <img
                    className="my-4 mx-auto"
                    src={
                        file
                        ? URL.createObjectURL(file)
                        : 'https://placehold.co/600x400?text=Choose+image'
                    }
                    alt="preview"
                    width="200"
                />
                <button
                    className="w-full px-2.5 py-1.5 rounded-sm bg-[#101345] cursor-pointer border border-white text-white transition duration-250 hover:bg-[#1a1e60] font-bold"
                    type="submit"
                    disabled={!(file && inputs?.title.length > 3)}
                >
                    Upload
                </button>
            </form>
        </>
    );
};

export default Upload;