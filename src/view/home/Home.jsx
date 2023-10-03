import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Home() {
    const [text, setText] = useState("Alunos de React Native teste.");

    useEffect(()=>{
        Alert.alert("Valor de text mudou", "Valor de text mudou")
    },[text]);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Image /> */}
      <TouchableOpacity>
        <TextInput style={{borderWidth: 1, borderColor: 'black'}} onChangeText={(e)=>setText(e)}/>
        <Text>{text}</Text>
      </TouchableOpacity>
      <Button title="Botão feito" color={'red'} onPress={()=>Alert.alert("Titulo do botão", "Messagem menor")}/>
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0c0c0",
    alignItems: "center",
    justifyContent: "center",
  },
});