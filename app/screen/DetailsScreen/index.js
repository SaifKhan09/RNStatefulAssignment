/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default class DetailsScreen extends React.Component {
      constructor(props) {
          super(props);
      }
      render(){
          const {Name} = this.props.navigation.getParam('name');
          const {Age} = this.props.navigation.getParam('age');
          const {Dob} = this.props.navigation.getParam('dob');
          const {Occupation} = this.props.navigation.getParam('occupation');
          return (
            <View style={styles.DetailsContainer}>
            <Text style={styles.outputComponent}>Name : {Name}</Text>
            <Text style={styles.outputComponent}>Age : {Age}</Text>
            <Text style={styles.outputComponent}>DOB : {Dob}</Text>
            <Text style={styles.outputComponent}>Occupation : {Occupation}</Text>
        </View>
          );
      }

}



const styles = StyleSheet.create({
    DetailsContainer: {
        marginTop: 180,
        padding: 5,
        alignItems: 'center',
        justifyContent : 'space-evenly',
        backgroundColor: '#ed931c',
        borderColor: 'black',
    },
    outputComponent: {
        fontSize:14,
        margin: 20,
        padding: 15,
        fontWeight: 'bold',
        color:'black',
        borderRadius: 1,
        borderColor:'black',
    }
});