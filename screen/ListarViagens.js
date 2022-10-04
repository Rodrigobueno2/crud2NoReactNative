import React, { useEffect } from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import axios from 'axios'


const ListarViagens = ({navigation})=>{

    
    const listarViagem = () => {
        axios.get("https://crudcrud.com/api/b8c429f7f51b40ab9b0916da42daf481/viagem").then((response)=>{
            console.log(response.data)
            setViagem(response.data)
            
        })
    }

    useEffect(()=>{
      listarViagem();
    },[])
    
    const[viagem,setViagem] = React.useState([]);


    return(
        <View>
            <Text>Lista de Pessoas</Text>
            <Text>__________________________</Text>
            {viagem.map((element)=>{
              return(
                 <View>
                    <Text> Nome: {element.nome}</Text>
                    <Text> dataSaida: {element.dataSaida}</Text>
                    <Text> dataChegada: {element.dataChegada}</Text>
                    <Text> valor: {element.valor}</Text>
                    <Button
                        onPress={()=>navigation.navigate('DeletarViagem',{id:element._id,nome:element.nome,dataSaida:element.dataSaida,dataChegada:element.dataChegada,valor:element.valor})}
                        title="Deletar"
                        color="red"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <Button
                        onPress={()=>navigation.navigate('AtualizarViagem',{id:element._id,nome:element.nome,dataSaida:element.dataSaida,dataChegada:element.dataChegada,valor:element.valor})}
                        title="Atualizar"
                        color="green"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <Text>____________________________</Text>
                  </View>
                
               );
            })}
        </View>
    )
}

export default ListarViagens;