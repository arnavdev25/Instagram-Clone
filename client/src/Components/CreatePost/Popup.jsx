import styles from "../../Styles/CreatePost.module.css";
import CustomPopup from "./CustomPopUp";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from "react-dropzone";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};
const Popup = () => {
  const [drop,setDrop]=useState(false)
   const [body,setBody]=useState("")
  const [files, setFiles] = useState([]);
  const [file,setFile]=useState({})
  const [url,seturl]=useState("")
  const navigate=useNavigate()
 
  const post=()=>{
    const config = {
      headers:{
        Authorization:"Bearer "+localStorage.getItem("jwt")
      }
    };
   
    axios
    .post("http://localhost:8080/post/createpost", {description:body,photo:url},config)
    .then((data) => {
      alert("Posted Successfully")
      navigate("/feed");
      // console.log(data)
      
    })
    .catch((e) => alert(e.response.data.error));
  }
  const onDrop = useCallback(acceptedFiles => {
    setDrop(true)
    // console.log(acceptedFiles[0])
    setFile(acceptedFiles[0])
    // console.log(file)
    
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
    // CLOUDINARY_URL=cloudinary://961533929291198:ocTP1be7-8xVz3_0Yp8dmzS4F8c@muskan2507
    const data=new FormData();
    data.append("file",file);
    data.append("upload_preset","insta-clone")
    data.append("cloud_name","muskan2507")
    axios.post("https://api.cloudinary.com/v1_1/muskan2507/image/upload",data)
    .then(({data})=>{
      // console.log(data)
      seturl(data.url)
    })
    .catch((e)=>console.log(e))
   
    // console.log("url"+url)
  }, []);
function handleSubmit(){
  // console.log(body,files)
  post()
}
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png'
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  const thumbs = files.map(file => (
    <div key={file.name}>
      <img
        src={file.preview}
        alt={file.name}
        height="250px"
        width="250px"
      />
    </div>
  ));

  // clean up
  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = (e) => {
    setVisibility(e);
    setDrop(false)
  };

  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setVisibility(!visibility)}
      >
        <MdOutlineAddCircleOutline />
      </div>

      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        className={styles.main}
      >
      
        <div className={styles.popupDiv}>
          <h3>Create new post</h3>
          <br/>
          {drop?(<div className={styles.form}>
          
          <aside>
        {thumbs}
      </aside>
      <form onSubmit={handleSubmit} >
      <label>Enter Description</label> <br/>
        <textarea className={styles.input} onChange={(e)=>setBody(e.target.value)} ></textarea>
        <br/>
        <input className={styles.btn1} type="submit"/>
      </form>
      </div>):(  <>
        <svg
            aria-label="Icon to represent media such as images or videos"
            className="_ab6-"
            color="#262626"
            fill="#262626"
            height="77"
            role="img"
            viewBox="0 0 97.6 77.3"
            width="96"
          >
            <path
              d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
              fill="currentColor"
            ></path>
            <path
              d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
              fill="currentColor"
            ></path>
            <path
              d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
              fill="currentColor"
            ></path>
          </svg>

          <br />
          <div>
          <div {...getRootProps({style})}>            <input {...getInputProps()} />
            <div style={{ cursor: "pointer" }}>
              Drag and drop your Post here.
            </div>
            <button className={styles.btn}>Select from computer</button>
          </div>
        </div></>)}
       
      </div>  
      </CustomPopup>
    </>
  );
};

export default Popup;
