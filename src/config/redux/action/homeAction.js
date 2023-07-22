//import axios from "axios";
//const axios = require('axios').default; //axios versi 1.4.(belum support)

import Axios from "axios";

export const setDataBlog = (page) => (dispatch) => {
    //axios.get('http://localhost:4000/v1/blog/posts?page=2&perPage=2')
    Axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=2`)
    .then(result => {
      //looping data dari API
      const responseAPI = result.data;
      //console.log('data API: ', responseAPI);

      dispatch({type: 'UPDATE_DATA_BLOG', payload : responseAPI.data})
      dispatch({
        type: 'UPDATE_PAGE',
        payload: {
            currentPage: responseAPI.current_Page,
            totalPage: Math.ceil(responseAPI.total_Data / responseAPI.per_Page)
        }
      })
    })
    .catch(err => {
      console.log('error :', err);
    })
}
