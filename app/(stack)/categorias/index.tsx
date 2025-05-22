import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { data } from '../../../data';
import { useRouter } from 'expo-router';

export default function ListaCategorias() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={data.categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={styles.item}
            onPress={() => router.push(`/categorias/${item.id}`)}
          >
            
            <Text style={styles.itemText}>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  item: {
    backgroundColor: '#eee',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemText: { fontSize: 18 },
});
