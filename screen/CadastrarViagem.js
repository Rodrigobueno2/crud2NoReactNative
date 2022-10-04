import React from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import axios from 'axios'


const CadastrarViagem = ()=>{
    const[nome,setNome]=React.useState("");
    const[dataSaida,setDataSaida]=React.useState("");
    const[dataChegada,setDataChegada]=React.useState("");
    const[valor,setValor]=React.useState();

    const salvarViagem = (nome,dataChegada,dataSaida,valor) =>{
        axios.post("https://crudcrud.com/api/b8c429f7f51b40ab9b0916da42daf481/viagem",{
            nome:nome,
            dataChegada:dataChegada,
            dataSaida:dataSaida,
            valor:valor
          }).then(()=>{
            alert("cadastrado com sucesso");
          }).catch((error)=>{
            alert(error);
            console.log(error);
          })
    }


    return(
       <View>
           <Text style={styles.text}>Tela de Cadastro</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNome}
                value={nome}
                placeholder="digite o nome"
            />
            <TextInput
                style={styles.input}
                onChangeText={setDataSaida}
                value={dataSaida}
                placeholder="digite a data de saida"
            />
            <TextInput
                style={styles.input}
                onChangeText={setDataChegada}
                value={dataChegada}
                placeholder="digite a data de chegada"
            />
            <TextInput
                style={styles.input}
                onChangeText={setValor}
                value={valor}
                placeholder="digite o valor"
            />
            <Button
                title="Cadastrar viagem"
                color="green"
                accessibilityLabel="Learn more about this purple button"
                onPress={() =>
                    salvarViagem(nome,dataChegada,dataSaida,valor)
                }
            />
       </View>
    );
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
    },
    view:{
  
    }
  });
export default CadastrarViagem;