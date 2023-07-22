import React, { useState } from 'react'
import './detailblog.scss'
//import { RegisterBg } from '../../assets';
import { Gap, Link } from '../../components';
//untuk pindaha halaman
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';
import Axios from 'axios';


const DetailBlog = (props) => {
  const [data, setData] = useState({});


  useEffect(() => {
      //console.log(`PARAMAS :`, props.match.params.id); //yang kita perlukan adalah match
      const id = props.match.params.id;
      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((result) => {
         console.log(`Sukses :`, result);
         setData(result.data.data)
      }).catch((err) => {
        console.log(`error :`, err);
      });
  }, [props])
  const history = useHistory();
  if(data.author) {
    return (
      <div className='detail-blog-wrapper'>
        <img className='img-cover' src={`http://localhost:4000/${data.image}`} alt='bg' />
        <p className='blog-title'>{data.title}</p>
        <p className='blog-author'>{data.author.name} - {data.createdAt}</p>
        <p className='blog-body'>{data.body}</p>
        <Gap height={20} />
        <Link title='Kembali ke Home' onClick={() => history.push('/')} />
      </div>
    )
  }
  return <p>Loading data dulu tunggu API </p>
}

export default withRouter(DetailBlog); //withRouter ini dipasang untuk menampilkan halaman detail blog
