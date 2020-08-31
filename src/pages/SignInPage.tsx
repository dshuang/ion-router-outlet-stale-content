import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {withRouter, RouteComponentProps} from 'react-router-dom';

// These props are provided when creating the component
interface OwnProps {
    // ...
    afterLogin: ()=>void
}

// These props are provided via connecting the component to the store
interface StateProps {
    // ...
}

// These props are provided by the router
interface PathProps {
    // ...
}

class SignInPage extends React.Component<OwnProps & StateProps & RouteComponentProps<PathProps>> {

    logInWithRedirect:any = (pagePath:string)=>{
        console.log('logInWithRedirect called');
        // simulate async request
        setTimeout(()=>{
            console.log('timeout fired, now calling history.push(+'+ pagePath +')');
            this.props.afterLogin();
            this.props.history.push(pagePath);
        }, 1000);
    }

    render(): JSX.Element {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Sign In Page</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Sign In Page</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <div>
                        <button onClick={(e)=>{e.stopPropagation();this.logInWithRedirect('/tab1');}}>Log in test user</button>
                    </div>
                </IonContent>
            </IonPage>
        );
    }
}

export default withRouter(SignInPage);
