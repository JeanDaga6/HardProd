
import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.text}>Nome: Jean Schorr Daga</Text>
      <Text style={styles.text}>Curso: Engenharia de Software</Text>
      <Text style={styles.text}>Semestre: 7º Período</Text>
      <Text style={styles.text}>Objetivo: Ser um ótimo desenvolvedor!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems:'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  text: { fontSize: 16, marginBottom: 6 },
});
