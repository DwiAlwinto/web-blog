import Axios from "axios"

export const setForm = (formType, formValue) => {
    return {type : 'SET_FORM_DATA',  formType, formValue}
}


export const setImgPreview = (payload) => {
    return {type: 'SET_IMG_PREVIEW', payload}
}

export const postToAPI = (form) => {
     //membuat form data(untuk proses kirim ke API)
     const data = new FormData();
     data.append("title", form.title); //append menamabhakan object baru
     data.append("body", form.body);
     data.append("image", form.image);



    Axios.post('http://localhost:4000/v1/blog/post', data, {
        headers: {
          'content-type': "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("post succes :", res);
      })
      .catch((err) => {
        console.log("err : ", err);
      });
}

//ini untuk pengantiya setalah update 
export const updateToAPI = (form, id) => {
  //membuat form data(untuk proses kirim ke API)
     const data = new FormData();
     data.append("title", form.title); //append menamabhakan object baru
     data.append("body", form.body);
     data.append("image", form.image);

    Axios.put(`http://localhost:4000/v1/blog/post/${id}`, data, {
        headers: {
          'content-type': "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("update succes :", res);
      })
      .catch((err) => {
        console.log("err : ", err);
      });

}