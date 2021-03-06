import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import {withRouter, RouteComponentProps} from 'react-router-dom';

// These props are provided when creating the component
interface OwnProps {
    // ...
}

// These props are provided via connecting the component to the store
interface StateProps {
    // ...
}

// These props are provided by the router
interface PathProps {
    // ...
}

class Tab2 extends React.Component<OwnProps & StateProps & RouteComponentProps<PathProps>> {

    gotoUrl:any = (pagePath:string)=>{
        console.log('gotoTab1 called');
        setTimeout(()=>{
            console.log('timeout fired');
            this.props.history.push(pagePath);
        }, 1000);
    }

    render(): JSX.Element {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Tab 2</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Tab 2</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <div>
                        <button onClick={(e)=>{e.stopPropagation();this.gotoUrl('/menuPage');}}>Go to /menuPage</button>
                    </div>
                </IonContent>
            </IonPage>
        );
    }
}

export default withRouter(Tab2);
