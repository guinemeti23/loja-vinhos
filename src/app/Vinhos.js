import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from "../estilos/Estilos";


const vinhos = [
  { id: 1, nome: 'Bosco Del Grillo', tipo: 'Tinto', regiao: 'Italia', preco: 'R$ 80,00', imagem: require('../imagens/vinhoTinto.jpg') },
  { id: 2, nome: 'Chateau Marjosse', tipo: 'Branco', regiao: 'França', preco: 'R$ 165,00', imagem: require('../imagens/vinhoBranco.jpg') },
   { id: 3, nome: 'Aroma Português', tipo: 'Tinto', regiao: 'Portugal', preco: 'R$ 55,00', imagem: require('../imagens/vinhoPortugues.jpg') },
  
];

const OpcoesVinho = () => {
  const navigation = useNavigation();
  
  const [filtroTipo, setFiltroTipo] = useState(null);
  const [filtroRegiao, setFiltroRegiao] = useState(null);
  const [exibirOpcoesTipo, setExibirOpcoesTipo] = useState(false);
  const [exibirOpcoesRegiao, setExibirOpcoesRegiao] = useState(false);
  const [vinhosFiltrados, setVinhosFiltrados] = useState(vinhos);

  const filtrarPorTipo = (tipo) => {
    setFiltroTipo(tipo);
    const vinhosFiltradosPorTipo = vinhos.filter((vinho) => vinho.tipo === tipo);
    setVinhosFiltrados(vinhosFiltradosPorTipo);
    setExibirOpcoesTipo(false);
  };

  const filtrarPorRegiao = (regiao) => {
    setFiltroRegiao(regiao);
    const vinhosFiltradosPorRegiao = vinhos.filter((vinho) => vinho.regiao === regiao);
    setVinhosFiltrados(vinhosFiltradosPorRegiao);
    setExibirOpcoesRegiao(false);
  };

  const verTodosVinhos = () => {
    setFiltroTipo(null);
    setFiltroRegiao(null);
    setVinhosFiltrados(vinhos);
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaInicio')}>
            <Text style={styles.headerText}>vinjo-select</Text>
          </TouchableOpacity>
          <View style={styles.headerButtons}>
            <TouchableOpacity onPress={() => navigation.navigate('Vinhos')}>
              <Text style={styles.headerText}>Vinhos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Carrinho')}>
              <MaterialIcons name="shopping-cart" style={styles.cartIcon} />
            </TouchableOpacity>
          </View>
        </View>

      <View style={{ marginTop: 30 }} />

      <TouchableOpacity style={styles.filterButton} onPress={verTodosVinhos}>
        <Text style={styles.buttonText}>Ver Todos os Vinhos</Text>
      </TouchableOpacity>
      <View style={styles.filterOptions}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setExibirOpcoesTipo(!exibirOpcoesTipo)}
        >
          <Text style={styles.buttonText}>Filtrar por Tipo</Text>
        </TouchableOpacity>
        {exibirOpcoesTipo && (
          <View>
            <TouchableOpacity style={styles.option} onPress={() => filtrarPorTipo('Tinto')}>
              <Text style={styles.optionText}>Tinto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => filtrarPorTipo('Branco')}>
              <Text style={styles.optionText}>Branco</Text>
            </TouchableOpacity>
  
          </View>
        )}

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setExibirOpcoesRegiao(!exibirOpcoesRegiao)}
        >
          <Text style={styles.buttonText}>Filtrar por Região</Text>
        </TouchableOpacity>
        {exibirOpcoesRegiao && (
          <View>
            <TouchableOpacity style={styles.option} onPress={() => filtrarPorRegiao('Portugal')}>
              <Text style={styles.optionText}>Portugal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => filtrarPorRegiao('França')}>
              <Text style={styles.optionText}>França</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => filtrarPorRegiao('Italia')}>
              <Text style={styles.optionText}>Italia</Text>
            </TouchableOpacity>
         
          </View>
        )}
      </View>
      <View style={styles.wineOptionsContainer}>
        {vinhosFiltrados.map((vinho, index) => (
          <TouchableOpacity
            key={vinho.id}
            style={[styles.wineOption, index % 2 === 1 && styles.rightWineOption]}
            onPress={() => navigation.navigate('DetalhesVinho', { vinhoId: vinho.id })}
          >
            <Image source={vinho.imagem} style={styles.wineImage} />
            <Text style={styles.wineName}>{vinho.nome}</Text>
            <Text style={styles.winePrice}>{vinho.preco}</Text>
            <Text style={styles.wineType}>Tipo: {vinho.tipo}</Text>
            <Text style={styles.wineRegion}>Região: {vinho.regiao}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default OpcoesVinho;