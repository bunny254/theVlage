import React, { useCallback, useState, useEffect } from 'react';
import NewListingQs from "../NewListingQs"
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const StepSix = (props) => {
    const { data, handleChange, next, back } = props;
    const [files, setFiles] = useState();
    const [filer, setFilers] = useState(null);

    const handleFiles = (fileItems) => {
        const filer = fileItems.map(fileItem => fileItem.file)
        handleChange(filer)
        setFiles({
            files: filer
        })
        // console.log(filer[0]);



    }
    // useEffect(() => {
    //     

    //     // console.log(filer);

    // }, [files])

    // const onDrop = ([acceptedFiles]) => {
    //     // setFiles(acceptedFiles.map(file => Object.assign(file, {
    //     //     preview: URL.createObjectURL(file)
    //     // })));
    //     handleChange('cover_image')
    // }
    // const {
    //     acceptedFiles,
    //     getRootProps,
    //     getInputProps,
    //     isDragActive,
    //     isDragAccept,
    //     isDragReject,
    //     fileRejections
    // } = useDropzone({
    //     onDrop,
    //     accept: "image/jpeg, image/png",
    //     multiple: false,
    //     minSize: 0,
    //     maxSize: 5242880,
    //     maxFiles: 1
    // });
    const thumbs = () => {
        return (
            <div className=" relative inline-flex rounded-md border border-yellow-400 mb-4 mr-4 w-[10rem] h-[10rem] p-4 box-border " key={file.name}>
                <div className="overflow-hidden flex min-w-0">
                    <img
                        src={data.cove_image.preview}
                        className="w-auto h-[10rem]"
                    />
                </div>
            </div>
        )
    }
    return (
        <NewListingQs title="Let your place standout, upload cover image" >
            <div className="container px-5 py-3 mx-auto">



                <FilePond
                    files={data.cove_image}
                    onupdatefiles={handleFiles}
                    allowMultiple={false}
                    storeAsFile={true}
                    maxFiles={1}
                    name="files"
                    labelIdle='Drag and Drop your files or <span className="filepond--label-action">Browse</span>'
                />


                <div className="mb-[10rem] flex justify-between  top-0 ">
                    <button onClick={back} className="text-white ml-5 flex-grow bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Previous</button>

                    <button onClick={next} className="text-white ml-5 flex-grow bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button>

                </div>

            </div>
        </NewListingQs>
    )
}

export default StepSix
