import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Estilos from "../estilos/Estilos";

const vinhos = [
  { id: 1, nome: 'Bosco Del Grillo', tipo: 'Tinto', regiao: 'Italia', preco: 'R$ 80,00', imagem: require('../imagens/vinhoTinto.jpg') },
  { id: 2, nome: 'Chateau Marjosse', tipo: 'Branco', regiao: 'França', preco: 'R$ 165,00', imagem: require('../imagens/vinhoBranco.jpg') },
   { id: 3, nome: 'Aroma Português', tipo: 'Tinto', regiao: 'Portugal', preco: 'R$ 55,00', imagem: require('../imagens/vinhoPortugues.jpg') },
  
];

const TelaInicio = () => {
  const navigation = useNavigation();

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

        <View style={Estilos.welcomeContainer}>
          <Text style={Estilos.welcomeText}>Bem-vindo à nossa loja de vinhos!</Text>
          <Text style={Estilos.welcomeDescription}>
            Somos especializados em oferecer os melhores vinhos para apreciadores como você.
          </Text>
        </View>

        <View style={Estilos.offerContainer}>
          <Text style={Estilos.offerText}>Oferta por tempo limitado</Text>
          <Image
            source={require('../imagens/vinhos.jpg')}
            style={Estilos.offerImage}
          />
          <Text style={{ color: '#FFF', marginBottom: 10 }}>
            Aproveite esta oferta especial em vinhos selecionados!
          </Text>
          <TouchableOpacity style={Estilos.offerButton}>
            <Text style={Estilos.buttonText}>Ir para a oferta</Text>
          </TouchableOpacity>
        </View>

        <View style={Estilos.wineOptionsContainer}>
          {vinhos.map((vinho) => (
            <TouchableOpacity
              key={vinho.id}
              style={Estilos.wineOption}
              onPress={() => navigation.navigate('DetalhesVinho', { vinho })}
            >
              <Image source={vinho.imagem} style={Estilos.wineImage} />
              <Text style={Estilos.wineName}>{vinho.nome}</Text>
              <Text style={Estilos.winePrice}>{vinho.preco}</Text>
              <Text style={Estilos.wineType}>Tipo: {vinho.tipo}</Text>
              <Text style={Estilos.wineRegion}>Região: {vinho.regiao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default TelaInicio;