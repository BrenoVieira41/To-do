import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#B0C4DE',
    },
    title:{
      marginTop: 10,
      paddingBottom: 10,
      fontSize: 23,
      textAlign: 'center',
      color: '#8B4513'
    },
    fab:{
      position: 'absolute',
      width: 60,
      height: 60,
      backgroundColor: '#EE82EE',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      right: 25,
      bottom: 25,
      elevation: 2,
      zIndex: 9,
      shadowOffset:{
        width: 1,
        height: 3,
      }
    },
    modal:{
      flex: 1,
      backgroundColor: '#B0C4DE'
    },
    modalHeader:{
      marginLeft: 10,
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center'
    },
    modalTitle:{
      marginLeft: 15,
      fontSize: 23,
      color:'#FFF',
    },
    modalBody:{
      marginTop: 15,
    },
    input:{
     fontSize: 15,
     marginLeft: 10,
     marginRight: 10,
     marginTop: 30,
     backgroundColor: '#FFF',
     padding: 9,
     height: 85,
     textAlignVertical: 'top',
     color: '#000',
     borderRadius: 5,
    },
    handleAdd:{
      backgroundColor: '#FFF',
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
      marginRight: 10,
      height: 40,
      borderRadius: 5
    },
    handleAddText: {
      fontSize: 20,
    }
  })

  export default styles ;