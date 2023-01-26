import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

function DropzoneComponent(props) {
    const [files, setFiles] = useState([]);
    // const onDrop = useCallback(acceptedFiles => {
    //     console.log(acceptedFiles);
    // }, []);
    const onDrop = acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }
    // const onDrop = useCallback(acceptedFiles => {
    //     setFiles(acceptedFiles.map(file => Object.assign(file, {
    //         preview: URL.createObjectURL(file)
    //     })));
    //     console.log(acceptedFiles);
    // }, []);

    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        fileRejections
    } = useDropzone({
        onDrop,
        accept: "image/jpeg, image/png",
        minSize: 0,
        maxSize: 5242880,
        maxFiles: 5
    });
    const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));
    const fileRejectionItems = fileRejections.map(({ file, errors }) => {
        return (
            <li key={file.path}>
                {file.path} - {file.size} bytes
                <ul>
                    {errors.map(e => <li key={e.code}>{e.message}</li>)}
                </ul>

            </li>
        )
    });
    const thumbs = files.map(file => (
        <div className=" relative inline-flex rounded-md border border-yellow-400 mb-4 mr-4 w-[10rem] h-[10rem] p-4 box-border " key={file.name}>
            <div className="overflow-hidden flex min-w-0">
                <img
                    src={file.preview}
                    className="w-auto h-[10rem]"
                />
            </div>
        </div>
    ));
    // clean up
    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);


    return (
        <>
            <section className="p-20 border-2 rounded-lg border-gray-300 border-dashed transition ease-in  bg-gray-500 ">
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div>
                        {isDragActive ? "Drop it like it's hot!" : 'Click me or drag a file to upload!'}
                        {isDragActive && !isDragReject && "Drop it like it's hot!"}
                        {isDragReject && "File type not accepted, sorry!"}

                    </div>
                </div>

            </section>
            <div className="mb-5 pb-10"></div>
            <div className="flex flex-wrap -m-5">

                <ul>{thumbs}</ul>
                <br />
                <button onClick={props.save}>Save</button>
                {/* <h4>Rejected files</h4>
                <ul>{fileRejectionItems}</ul> */}
            </div>
        </>
    )
}
export default DropzoneComponent;

