import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import MenuPage from "./MenuPage";

// These props are provided when creating the component
interface OwnProps {
    // ...
    loggedIn: boolean
}

// These props are provided via connecting the component to the store
interface StateProps {
}

// These props are provided by the router
interface PathProps {
    // ...
}

class Tab1 extends React.Component<OwnProps & StateProps & RouteComponentProps<PathProps>> {

    constructor(props:OwnProps&StateProps&RouteComponentProps<PathProps>) {
        super(props);
    }

    render(): JSX.Element {

        if (!this.props.loggedIn) {
            return (<MenuPage/>);
        }

        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Tab 1</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <ExploreContainer name="Tab 1 page" />
                </IonContent>
            </IonPage>
        );
    }
}

export default withRouter(Tab1);
