import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonToolbar } from "@ionic/react";
import { thumbsUpOutline, chatboxOutline, shareOutline } from "ionicons/icons";

const Feed:React.FC = () => {


    const games = [
        {name: 'Pokemon Yellow'},
        {name: 'Mega Man X'},
        {name: 'The Legend of Zelda'},
        {name: 'Pac-Man'},
        {name: 'Super Mario World'}
    ]
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton>

                        </IonMenuButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>


             <IonContent className="ion-padding">
                <IonList>
                    {games.map((item,index) => (
                <IonCard key={index}>
                <img alt="Silhouette of mountains" src="https://media.wired.com/photos/633c95ef85e7a4cc2f802256/3:2/w_1920,c_limit/Breath-of-the-Wild-Casual-Gamer-Culture.jpg" />
                <IonCardHeader>
                    <IonCardTitle>{item.name}</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>



                <IonCardContent>
                    Here's a small text description for the card content. Nothing more, nothing less.
                </IonCardContent>
                <IonGrid>
                    <IonRow>
                    <IonCol>
                        <IonButton fill="clear" expand="full">
                            <IonIcon icon={thumbsUpOutline}></IonIcon>
                            <IonLabel style={{ marginLeft: '5px' }}>Like</IonLabel>
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton fill="clear" expand="full">
                            <IonIcon icon={chatboxOutline}></IonIcon>
                            <IonLabel style={{ marginLeft: '5px' }}>Comment</IonLabel>
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton fill="clear" expand="full">
                            <IonIcon icon={shareOutline}></IonIcon>
                            <IonLabel style={{ marginLeft: '5px' }}>Share</IonLabel>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>

            ))}

                
                 </IonList>
                
            </IonContent>
        </IonPage>

    );

};

export default Feed;