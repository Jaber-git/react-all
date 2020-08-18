import React,{Component} from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/Sidedrawer/SideDrawer'
import BackDrop from './components/Backdrop/BackDrop'

class App extends Component {
  state = {
     sideDrawerOpen:false,
      };

      backdropClickHandler = () => {
        this.setState({sideDrawerOpen:false})
      };


      drawerTogglecClickHandler = () => {
       this.setState((prevState) => {
         return {
           sideDrawerOpen:!prevState.sideDrawerOpen
         };
       });
      };

  render() {

    let backdrop;
    if(this.state.sideDrawerOpen){
      backdrop=  <BackDrop click={this.backdropClickHandler} />
    }

  return (
  <div className="App" style={{height:'100%'}}>
    <Toolbar drawerClickHandler={this.drawerTogglecClickHandler} />
    <SideDrawer show = {this.state.sideDrawerOpen} />
    {backdrop}

    <main style={{marginTop:'64px'}}>
    
       <p>This is page content </p>
    </main>

</div>
  );
 }
}


export default App;
