import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Estilos from "../estilos/Estilos";

const Carrinho = ({ navigation }) => {
  const [items, setItems] = useState([
    { id: 1, nome: 'Bosco Del Grillo', quantidade: 2, preco: 80.00, imagem: require('../imagens/vinhoTinto.jpg') },
    { id: 2, nome: 'Aroma Português', quantidade: 1, preco: 55.00, imagem: require('../imagens/vinhoPortugues.jpg') },
  ]);

  const increaseQuantity = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    setItems(updatedItems);
  };

  const decreaseQuantity = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id && item.quantidade > 0 ? { ...item, quantidade: item.quantidade - 1 } : item
    );
    setItems(updatedItems);
  };


  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.quantidade * item.preco, 0);
  };

  const handleCheckout = () => {
    
  };

  return (
    <ScrollView>
     <View style={Estilos.container}>
        <View style={Estilos.header}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaInicio')}>
            <Text style={Estilos.headerText}>vinjo-select</Text>
          </TouchableOpacity>
          <View style={Estilos.headerButtons}>
            <TouchableOpacity onPress={() => navigation.navigate('Vinhos')}>
              <Text style={Estilos.headerText}>Vinhos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Carrinho')}>
              <MaterialIcons name="shopping-cart" style={Estilos.cartIcon} />
            </TouchableOpacity>
          </View>
        </View>
       <View style={{ marginTop: 40 }} />

        
        {items.map((item) => (
          <View key={item.id} style={{ ...Estilos.cartItem, backgroundColor: '#D8BFD8' }}>
            <Image source={item.imagem} style={{ width: 50, height: 50, marginRight: 10 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.nome}</Text>
              <Text>Preço Unitário: R${item.preco}</Text>
              <Text>Preço Total: R${item.quantidade * item.preco}</Text>
            </View>
            <View style={Estilos.quantityContainer}>
            <TouchableOpacity style={Estilos.quantityButton} onPress={() => decreaseQuantity(item.id)}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text>{item.quantidade}</Text>
            <TouchableOpacity style={Estilos.quantityButton} onPress={() => increaseQuantity(item.id)}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
         <View style={{ marginTop: 40 }} />

        <TouchableOpacity style={Estilos.checkoutButton} onPress={handleCheckout}>
          <Text style={Estilos.checkoutText}>Finalizar Compra</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Estilos.backButton}
          onPress={() => navigation.navigate('TelaInicio')}
        >
          <Text style={Estilos.backText}>Escolher Mais Produtos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Carrinho;