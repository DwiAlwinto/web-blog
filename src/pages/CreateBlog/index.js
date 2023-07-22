import React from "react";
import { Button, Gap, Input, Link, TextArea, Upload } from "../../components";
import "./createBlog.scss";

//untuk pindaha halaman
import { useHistory , withRouter } from "react-router-dom/cjs/react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { postToAPI, setForm, setImgPreview, updateToAPI } from "../../config/redux/action";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

function CreateBlog(props) {
  const {form, imgPreview} = useSelector(state => state.createBlogReducer) //Form ini memiliki 2 value
  const {title, body} = form
  const [isUpdate, setIsUpdate] = useState(false); //(simpan ini untuk proses createBlog)
  const dispatch = useDispatch();


  //untuk kirim data ke rest API
  //const [title, setTitle] = useState("");
  //const [body, setBody] = useState("");
  //untuk upload image
  //const [image, setImage] = useState("");
  //const [imagePreview, setImagePreview] = useState(null); //ini untuk menampilkan image yang di upload
  const history = useHistory();

  //untuk edit dan delete
  useEffect(() => { 
    console.log('params : ', props);
    const id = props.match.params.id
    if(props.match.params.id){ //jika ada ID ya dia akan update, kalau tidak aka tetap simpan
      setIsUpdate(true) //kalau params id bersifat undifined tidak akan masuk ke update

      //kita panggil API
      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((result) => {
        const data = result.data.data
        console.log(`succes : `, data);
        dispatch(setForm('title', data.title))
        dispatch(setForm('body', data.body))
        dispatch(setImgPreview(`http://localhost:4000/${data.image}`))
      }).catch((err) => {
        console.log(`error :`, err);
      });
    }
  }, [dispatch ,props])

  //untuk save
  const onSubmit = () => { //ada 2 opsi disini
    const id = props.match.params.id
    if(isUpdate){ //jika isUpdate bernila true maka di akan ke updateTo API
      console.log(`Ini Update Data : `);
      updateToAPI(form, id)

    } else{
      console.log(`Ini Create Data : `);
      postToAPI(form) //kalau false dia akan masuk ke postToAPI
    }
    //console.log("title :", title);
    //console.log("body : ", body);
    //console.log("image : ", image);  
  };

  //function untuk image upload
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm('image',file));
    dispatch(setImgPreview(URL.createObjectURL(file))); //URL.createObjectURL = ini nilai yang semetara kalau ditampilkan akan hilang
  };

  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => history.push("/")} />
      <p className="title">{isUpdate ? 'Update' : 'Create New'} Blog Post</p>
      <Input
        label="Post Title"
        value={title}
        onChange={(e) => dispatch(setForm('title', e.target.value))}
      />
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
      <Gap height={20} />
      <div className="button-action">
        <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit} />
      </div>
    </div>
  );
}

export default withRouter (CreateBlog);
