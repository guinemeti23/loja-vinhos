import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 20,
  backgroundColor: '#663399', 
},
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF', 
  },
  cartIcon: {
    fontSize: 24,
    color: '#FFF',
  },
  welcomeContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  welcomeDescription: {
    fontSize: 16,
  },
  offerContainer: {
    backgroundColor: '#663399', 
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  offerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF',
  },
  offerImage: {
    width: 200,
    height: 150,
    marginBottom: 10,
  },
  offerButton: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#663399', 
  },
  buttonTextFinalizar: {
    fontWeight: 'bold',
    color: '#FFF', 
  },
  
  wineImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
  wineName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  winePrice: {
    fontSize: 12,
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#FFF', 
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: '#FFF', 
    borderRadius: 5,
  },
  cartButton: {
    padding: 5,
    backgroundColor: '#663399', 
    borderRadius: 5,
  },
cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#663399', 
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  checkoutButton: {
    backgroundColor: '#663399', 
    padding: 15,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    backgroundColor: '#663399', 
    padding: 15,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
  },
  backText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  paymentInfo: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20, 
    marginTop: 20, 
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  finalizarButton: {
    backgroundColor: '#663399',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20, 
    marginTop: 20, 
  },
  
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
 
  filterOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#D8BFD8',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  leftOptions: {
    width: '48%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  rightOptions: {
    width: '48%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  paymentOption: {
    alignItems: 'center',
  },
  
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 30,
    marginBottom: 20,
  },
  wineOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  wineOption: {
    width: '48%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    backgroundColor: '#D8BFD8', 
  },
  rightWineOption: {
    marginLeft: '2%',
    backgroundColor: '#D8BFD8', 
  },

});