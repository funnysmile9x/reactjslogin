import React, { Component } from 'react'
import {
//   BrowserRouter as Router,
  Switch,
  Route,
//   Link
} from 'react-router-dom'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import dashBoard from './components/dashBoard';

class RouterPage extends Component {
    previousLocation = this.props.location
    componentWillUpdate(nextProps) {
  
      const { location } = this.props
      // set previousLocation if props.location is not modal
      if (
        nextProps.history.action !== 'POP' &&
        (!location.state || !location.state.modal)
      ) {
        this.previousLocation = this.props.location
      }
    }
    
    componentWillMount(){
      document.body.className= "hold-transition skin-blue sidebar-mini"
    }

    render() {
      const { location } = this.props
      const isModal = !!(
        location.state &&
        location.state.modal &&
        this.previousLocation !== location
      )
      // console.log('!!!!!!',this.props.location,":")
      return (
          <Switch location={isModal ? this.previousLocation : location}>
             <Route exact path='/' component={SignIn}/>
             <Route path='/sign-in' component={SignIn}/>
             <Route path='/sign-up' component={SignUp}/>
             <Route path='/dashboard' component={dashBoard}/>
             
          </Switch>
      );
    }
  }
  export default RouterPage