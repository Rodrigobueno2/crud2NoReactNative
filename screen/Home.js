import React from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import axios from 'axios'


const Home = ({navigation}) =>{
    return(
      <View>
         <Button
            title="Cadastrar"
            color="green"
            accessibilityLabel="Learn more about this purple button"
            onPress={() =>
                navigation.navigate('CadastrarViagem')
            }
         />
         <Button
            title="Listar Viagens"
            color="blue"
            accessibilityLabel="Learn more about this purple button"
            onPress={() =>
                navigation.navigate('ListarViagens')
            }
         />
      </View>
    );
}

export default Home;