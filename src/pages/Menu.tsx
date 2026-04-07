import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react";
import { Redirect, Route } from "react-router";
import { homeOutline, informationCircleOutline } from "ionicons/icons";
import Home from "./Home";

const Menu: React.FC = () => {

const path = [
    {name: 'Home', url: '/app/home',icon:homeOutline},
    {name: 'About', url: '/app/about',icon:informationCircleOutline}
]
    return(
        <IonPage>
            <IonSplitPane contentId="main">
                <IonMenu contentId="main">
                    {/*Header*/}
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    {/*Content*/}
                    <IonContent>

                       {path.map((item,index) => (
                        <IonMenuToggle key={index}>
                            <IonItem routerLink={item.url} routerDirection="forward">
                                <IonIcon icon={item.icon} slot="start"/>
                                <IonLabel>{item.name}</IonLabel>
                            </IonItem>

                        </IonMenuToggle>
                       ))}
                
                    </IonContent>
                </IonMenu>
                {/*Routing*/}
                <IonRouterOutlet id="main">

                    <Route exact path="/app" component={Home}/>
                    <Route exact path="/app">
                        <Redirect to="/app/home"/>
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>
        
    )
    };


export default Menu;