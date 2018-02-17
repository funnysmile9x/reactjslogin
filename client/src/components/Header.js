import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return ( 
  // dung willmount-> router
  // <body class="hold-transition skin-blue sidebar-mini">
   <header className="main-header">
    <a href="index2.html" className="logo">
      <span className="logo-mini"><b>A</b>LT</span>
      <span className="logo-lg"><b>Admin</b>LTE</span>
    </a>

    <nav className="navbar navbar-static-top">
      <a  className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
         
          <li className="dropdown user user-menu">
            <a  className="dropdown-toggle" data-toggle="dropdown">
              <img src="img/user2-160x160.jpg" className="user-image" alt="UserImage"/>
              <span className="hidden-xs">Alexander Pierce</span>
            </a>
            <ul className="dropdown-menu">
              <li className="user-header">
                <img src="img/user2-160x160.jpg" className="img-circle" alt="UserImage"/>

                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              <li className="user-body">
                <div className="row">
                  <div className="col-xs-4 text-center">
                    <a >Followers</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a >Sales</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a >Friends</a>
                  </div>
                </div>
              </li>
              <li className="user-footer">
                <div className="pull-left">
                  <a  className="btn btn-default btn-flat">Profile</a>
                </div>
                <div className="pull-right">
                  <a  className="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
     
          <li>
            <a  data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>

    </nav>
  </header>
        )
    }
}