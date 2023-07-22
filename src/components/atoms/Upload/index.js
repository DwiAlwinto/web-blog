import React from 'react'
//import { LoginBg } from '../../../assets'
import './upload.scss'

const Upload = ({img, ...rest}) => {
  return (
    <div className='upload'>
      {img && <img className='preview' src={img} alt='preview' />}
        {/* kalau img ya engga ada &&baru tampilkan <img..... */}
      <input type='file' {...rest}/>
    </div>
  )
}

export default Upload