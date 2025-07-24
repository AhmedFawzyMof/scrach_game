import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <iframe
          src="/fox_game.html"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Custom HTML"
        ></iframe>
      </IonContent>
    </IonPage>
  );
};

export default Home;
