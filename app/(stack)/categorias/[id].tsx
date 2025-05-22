
import { View, Text, StyleSheet, FlatList, Pressable, Image } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { data } from '../../../data';

export default function ProdutosDaCategoria() {
  const { id } = useLocalSearchParams();
  const categoriaId = Number(id);

  const produtosFiltrados = data.products.filter(
    (produto) => produto.idCategory === categoriaId
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos - {data.products?.title}</Text>

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => router.push(`/produto/${item.id}`)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginBottom: 12,
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 8,
      elevation: 2,
    },
    image: { width: 80, height: 80, borderRadius: 8 },
    name: { fontSize: 16, fontWeight: 'bold' },
    price: { fontSize: 14, color: '#555' },
  });

