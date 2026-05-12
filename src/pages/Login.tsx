import { IonButton, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { logoGoogle } from 'ionicons/icons';
import { supabase } from '../components/lib/supabaseClient';

const Login:React.FC = () => {
    const navigation = useIonRouter();
    const doLogin = () => {
        navigation.push('/app','forward','replace');
    }


    const signInWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/app`
            }
        });
        
    }

    return (
        <IonPage>
            <IonHeader>
                    <IonToolbar>
                        <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonButton expand="full" onClick={signInWithGoogle} fill='outline'>
                    <IonIcon icon={logoGoogle} />
                    Continue with Google
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Login;