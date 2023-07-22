import React from 'react'
import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom/cjs/react-router-dom.min'
import CreateBlog from "../CreateBlog"
import DetailBlog from '../DetailBlog'
import Home from '../Home'
import { Header } from '../../components'
import Footer from '../../components/molecul/Footer'
import './mainApp.scss'

function MainApp() {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className='content-wrapper'>
            <Router>
                <Switch>
                    <Route path="/create-blog/:id?"> <CreateBlog/> </Route> 
                    {/* agar menjadi opsional tambhkam tanda ?, agar tidak wajib */}
                    <Route path="/detail-blog/:id"> <DetailBlog/> </Route>
                    <Route path="/"> <Home/> </Route>
                </Switch>
            </Router>
      </div>
      <Footer />
    </div>
  )
}

export default MainApp