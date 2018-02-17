import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import SideBar from './SideBar';

class dashBoard extends Component {
    render() {
        return (

            <div>
               <Header /> 
               <Content/>
               <SideBar/>
            </div>

        );
    }
}

export default dashBoard;





