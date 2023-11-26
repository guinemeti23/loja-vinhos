import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from "../estilos/Estilos";

const Pagamento = () => {
  return (
   <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Vinho Select</Text>
      </View>
      <View style={styles.optionsContainer}>
       
        <View style={styles.leftOptions}>
          <TouchableOpacity style={styles.paymentOption}>
            <MaterialIcons name="credit-card" size={30} color="#333" />
            <Text>Cartão de Crédito</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption}>
            <MaterialIcons name="credit-card" size={30} color="#333" />
            <Text>Cartão de Débito</Text>
          </TouchableOpacity>
        </View>
   
        <View style={styles.rightOptions}>
          <TouchableOpacity style={styles.paymentOption}>
            <MaterialIcons name="qr-code" size={30} color="#333" />
            <Text>PIX</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption}>
            <MaterialIcons name="description" size={30} color="#333" />
            <Text>Boleto</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.paymentInfo}>
        <Text>Dados de Pagamento:</Text>
        <TextInput placeholder="Nome no Cartão" style={styles.input} />
        <TextInput placeholder="Número do Cartão" style={styles.input} />
        <TextInput placeholder="Validade" style={styles.input} />
        <TextInput placeholder="CVV" style={styles.input} />
      </View>
      <TouchableOpacity style={styles.finalizarButton}>
        <Text style={styles.buttonTextFinalizar}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Pagamento;