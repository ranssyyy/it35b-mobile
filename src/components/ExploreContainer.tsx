import React from 'react';
import './ExploreContainer.css';
import { IonButton, IonPopover, IonContent } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
     <div id="container">
      <IonButton id="click-trigger">Left-Click Me</IonButton>
      <IonPopover trigger="click-trigger" triggerAction="click">
        <IonContent class="ion-padding">Yaay!</IonContent>
      </IonPopover>

      <IonButton id="context-menu-trigger">Right-Click Me</IonButton>
      <IonPopover trigger="context-menu-trigger" triggerAction="context-menu">
        <IonContent class="ion-padding">Hooray!</IonContent>
      </IonPopover>

      <IonButton id="hover-trigger">Hover Over Me</IonButton>
      <IonPopover trigger="hover-trigger" triggerAction="hover">
        <IonContent class="ion-padding">Hi I'm Rhics!!!</IonContent>
      </IonPopover>
    </div>
  );
};

export default ExploreContainer;
