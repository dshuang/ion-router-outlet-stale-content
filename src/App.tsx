import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
    IonButton
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import MenuPage from './pages/MenuPage';
import SignInPage from './pages/SignInPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

class App extends React.Component<{}, {loggedIn:boolean}> {

  constructor() {
    super({});
    this.state = {loggedIn:false};
    this.afterLogin = this.afterLogin.bind(this);
  }

  // called after a successful login
  afterLogin() {
    // Note: if setState is commented out, navigation works as expected after signing in on SignInPage
    this.setState({loggedIn:true});
  }

  render(): JSX.Element {
    console.log('state=',this.state);
    return (
        <IonApp>
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/tab1" render={()=> <Tab1 loggedIn={this.state.loggedIn}/>} exact={true}/>
                <Route path="/tab2" component={Tab2} exact={true}/>
                <Route path="/tab3" component={Tab3}/>
                <Route path="/" render={() => <Redirect to="/tab1"/>} exact={true}/>
                <Route path="/menuPage" component={MenuPage} />
                <Route path="/signInPage" render={()=> <SignInPage afterLogin={this.afterLogin}/>} />
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                {/*
          // doesn't open a new tab
          <IonTabButton tab="tab1" href="/tab1" target="_blank" rel="noreferrer noopener" onClick={(e)=>{e.stopPropagation();window.open("http://github.com");}}>
          */}
                <IonTabButton tab="tab1" href="/tab1">
                  <IonIcon icon={triangle}/>
                  <IonLabel>Tab 1</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                  <IonIcon icon={ellipse}/>
                  <IonLabel>Tab 2</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                  <IonIcon icon={square}/>
                  <IonLabel>Tab 3</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        </IonApp>
    );
  }
}
export default App;
