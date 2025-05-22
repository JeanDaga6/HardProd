

import { Stack } from 'expo-router';

export default function CategoriasLayout() {
  return <Stack screenOptions={
    {headerStyle: {backgroundColor: 'blue'}, 
    headerTitleStyle:{color: 'white'}
    }}>
    
    <Stack.Screen name="categorias/index" options={{title: 'Categorias'}}/>
    <Stack.Screen name="categorias/[id]" options={{title: 'Produtos'}}/>
    <Stack.Screen name="produto/[id]" options={{title: 'Produto'}}/>

</Stack>;
}

