
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { data } from '@/data';

export default function DetalhesProduto() {
  const { id } = useLocalSearchParams();
  const produtoId = Number(id);
  const produto = data.products.find((p) => p.id === produtoId);

  if (!produto) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: produto.image }} style={styles.image} />
      <Text style={styles.title}>{produto.title}</Text>
      <Text style={styles.price}>R$ {produto.price.toFixed(2)}</Text>
      <Text style={styles.description}>{produto.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  price: { fontSize: 20, color: '#4CAF50', marginBottom: 12 },
  description: { fontSize: 16, lineHeight: 22, color: '#333' },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFound: {
    fontSize: 18,
    color: 'red',
  },
});

