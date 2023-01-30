import MasterLayout from "./layouts/MasterLayout/MasterLayout";
import { useContext, useEffect } from "react";
import { AuthContext, FirebaseContext } from "./store/Context";
import ContextTrip from "./store/TripContext";


function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div className="App">
          {/* <ContextTrip> */}
          <MasterLayout />
          {/* </ContextTrip> */}
    </div>
  );
}

export default App;
