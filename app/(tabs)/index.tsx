import { Link, router } from 'expo-router';
import { Button, Text, View, StyleSheet } from 'react-native';

export default function Index() {


  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style={styles.title}>Seja Bem Vindo</Text>
      <Button title='Ir para Categorias' onPress={() => router.push('/categorias')}/>
      
    </View>
  );

}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
})
