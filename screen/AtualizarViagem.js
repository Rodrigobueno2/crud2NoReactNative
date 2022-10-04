import React from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import axios from 'axios'


const AtualizarViagem = ({navigation,route})=>{

   const atualizarViagem = (nome,dataSaida,dataChegada,valor)=>{
        axios.put("https://crudcrud.com/api/b8c429f7f51b40ab9b0916da42daf481/viagem/"+route.params?.id,{
            id:route.params?.id,
            nome:nome,
            dataSaida:dataSaida,
            dataChegada:dataChegada,
            valor:valor
        }).then((response)=>{
            alert("atualizado com sucesso");
            navigation.navigate('Home');
        })
   }
   

   const[nome,setNome]=React.useState(route.params?.nome);
   const[dataSaida,setDataSaida]=React.useState(route.params?.dataSaida);
   const[dataChegada,setDataChegada]=React.useState(route.params?.dataChegada);
   const[valor,setValor]=React.useState(route.params?.valor);
   return(
      <View>
        <Text>Atualizar Pessoa</Text>
        <TextInput
            style={styles.input}
            onChangeText={setNome}
            value={nome}
            placeholder="digite seu nome"
        />
        <TextInput
            style={styles.input}
            onChangeText={setDataSaida}
            value={dataSaida}
            placeholder="digite data saida"
        />
        <TextInput
            style={styles.input}
            onChangeText={setDataChegada}
            value={dataChegada}
            placeholder="digite data de chegada"
        />
        <TextInput
            style={styles.input}
            onChangeText={setValor}
            value={valor}
            placeholder="digite o valor"
        />
        <Button
        title="Atualizar Viagem"
        color="green"
        accessibilityLabel="Learn more about this purple button"
        onPress={() =>
            atualizarViagem(nome,dataSaida,dataChegada,valor)
        }
        />
      </View> 
   )

}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginHorizontal:20,
    },
    text:{
        paddingHorizontal:100,
        paddingVertical:10
    }
  });
export default AtualizarViagem;