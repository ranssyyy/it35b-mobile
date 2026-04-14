import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar } from "@ionic/react";

const Search:React.FC = () => {
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

            <IonContent fullscreen>
                <h1>Search</h1>
            </IonContent>
        </IonPage>

    );

};

export default Search;