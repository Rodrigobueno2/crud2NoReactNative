import React from 'react'
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import axios from 'axios'


const DeletarViagem = ({navigation,route})=>{

    const deletarViagem = (id)=>{
        axios.delete("https://crudcrud.com/api/b8c429f7f51b40ab9b0916da42daf481/viagem/"+id).then(()=>{
            alert("Deletado com Sucesso");
            navigation.navigate('Home')
        })
    }
 


    return(
       <View>
          <Text>Tem certeza que deseja deletar a viagem com os dados abaixo? </Text>
          <Text>Id: {route.params?.id}</Text>
          <Text>Nome: {route.params?.nome}</Text>
          <Text>DATASAIDA: {route.params?.dataSaida}</Text>
          <Text>DATACHEGADA: {route.params?.dataChegada}</Text>
          <Text>VALOR: {route.params?.valor}</Text>
          <Button
              title="SIM"
              color="green"
              accessibilityLabel="Learn more about this purple button"
              onPress={() =>
                  deletarViagem(route.params?.id)
              }
          />
          <Button
              title="NÃO"
              color="red"
              accessibilityLabel="Learn more about this purple button"
              onPress={() =>
                  navigation.navigate('ListarViagens')
              }
          />
       </View>
    )
}

export default DeletarViagem