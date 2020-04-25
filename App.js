import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Function Component
// As propriedades são passadas através da palavra "props"
function RebelAlliance(props) {
  return (
    <View>
      <Text style={{fontWeight: "bold"}}>Aliança Rebelde</Text>
      <Text>{props.member1}</Text>
      <Text>{props.member2}</Text>
      <Text>{props.member3}</Text>
    </View>
  );
}

// Function Component
function GalactcEmpire(props) {
  // realiza a desestruturação da props
  const {darthVader, palpatine} = props;
  return (
    <View>
      <Text style={{fontWeight: "bold"}}>Império Galático (Fundação: {props.founded})</Text>
      <Text>{darthVader}</Text>
      <Text>{palpatine}</Text>
    </View>
  );
}

// Function Component
// A desestruturação é feita na declaração da função
function JediOrder({ members }) {
  return (
    <View>
      <Text style={{fontWeight: "bold"}}>Ordem Jedi</Text>
      {members.map(member => <Text key={member}>{member}</Text>)}
    </View>
  );
}

// Function Component principal
export default function App() {
  return (
    <View style={styles.container}>
      <RebelAlliance member1="Princess Leia Organa" member2="Luke Skywalker" member3="Han Solo" />
      <GalactcEmpire founded={19} darthVader="Darth Vader" palpatine="Palpatine" />
      <JediOrder members={["Yoda", "Qui-Gon Jinn", "Obi-Wan Kenobi"]} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingTop: 38,
    backgroundColor: "#fff",
  }
});