import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
           <IonTitle>Practice Run</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      This is sweet.
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
