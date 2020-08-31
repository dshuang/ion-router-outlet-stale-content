import React from 'react';
import {Link} from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const MenuPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Menu Page</IonTitle>
          </IonToolbar>
        </IonHeader>
          <p>Note: this page's route is not in the IonTabBar</p>
          <Link to={"/signInPage"}>Go to /signInPage</Link>
      </IonContent>
    </IonPage>
  );
};

export default MenuPage;
