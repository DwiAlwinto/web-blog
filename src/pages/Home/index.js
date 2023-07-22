import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components';
import './home.scss'

//untuk pindaha halaman
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';
//import { Axios } from 'axios';
//const axios = require('axios').default; //axios versi 1.4.(belum support)
//const axios = require('axios').default;

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Axios from 'axios';


const Home = () => {
  const [counter, setCounter] = useState(1); //ini untuk set next dan previous
  const {dataBlog, page} = useSelector(state => state.homeReducer) //ini untuk membantu menjalankan reducer (state global)
  const dispatch = useDispatch();
  //console.log('page :', page);

  

  useEffect(() => { //ini contoh state secara local untuk contoh
      dispatch(setDataBlog(counter))
  }, [counter, dispatch])

  const history = useHistory()

  const previous = () => {
      setCounter(counter <= 1 ? 1 : counter - 1) //logic artinya = (jika counter kurang dari = 1  maka? yang merubah counter ya 1, dan tapi lebih counter lebih dari 1 counter - 1) 
      //console.log(counter);
    }
    
  const next = () => {
    //setCounter(counter + 1)
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1) //logic ya(jika counter sekrang === totalPage maka? yang dikrim di set counter adalah page.totalPage :kalau beda  counter + 1)
    //console.log(counter);
  }

  const confirmDelete = (id) => {
    confirmAlert({
         title: 'Confirm to delete',
         message: 'Apakah yakin Anda akan menghapus post ini?',
         buttons: [
           {
             label: 'Yes',
             onClick: () => {
              //console.log('user setuju')
              ///console.log(id);
              Axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
              .then((result) => {
                console.log(`Succes delete data :`, result);
                dispatch(setDataBlog(counter)) //ini posisi yang sekerang ketika udah di delete
              }).catch((err) => {
                console.log(`Delete Error :`, err);
              });
            }
           },
           {
             label: 'No',
             onClick: () => console.log('user tidak setuju')
           }
         ]
       });
  }
  return (
    <div className='home-page-wrapper'> 
      <div className='create-wrapper'>
        <Button title="Create Blog"  onClick={() => history.push('/create-blog')} />
      </div>
      
      <Gap height={20} />
      <div className='content-wrapper'>
      
        {dataBlog.map(blog => {
          return (
              <BlogItem 
                  key={blog._id} 
                  image={`http://localhost:4000/${blog.image}`} 
                  title={blog.title}
                  name={blog.author.name}
                  date={blog.createdAt}
                  body={blog.body}
                  _id={blog._id}
                  onDelete={confirmDelete}
              /> 
          )//kita tambahkan key untuk error( rning: Each child in a list should have a u unique key prop)
        
        })}
      
      </div>
    
    <div className='pagination'>
        <Button title='Previous' onClick={previous} /> 
        <Gap width={20} />
        <p className='text-page'> {page.currentPage} / {page.totalPage}</p>
        <Gap width={20} />
        <Button title='Next' onClick={next} /> 
    </div>
      <Gap height={20}/>
    </div>
  )
}

export default Home;