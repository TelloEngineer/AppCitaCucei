/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView } from "react-native-safe-area-context";
import Navegacion from "./Navegacion";

function App(): JSX.Element {
  
  return (
    <SafeAreaView style = {{flex: 1,}}>
      <Navegacion />
    </SafeAreaView>
  );
}

export default App;