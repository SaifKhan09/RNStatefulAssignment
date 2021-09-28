/* eslint-disable prettier/prettier */
import React from "react";
import { View, Button, StyleSheet } from 'react-native';
import InputField from './components/InputField';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            age:'',
            dob:'',
            occupation:'',
        };
    }

    render(){
        return (
            <View style={styles.HomeContainer}>
            <InputField title= "Name : "  onChangeText = {() =>{this.setState({name:this.state.name})}}/>
            <InputField title= "DOB : "  onChangeText = {() =>{this.setState({dob:this.state.dob})}}/>
            <InputField title= "Age : "  onChangeText = {() =>{this.setState({age:this.state.age})}}/>
            <InputField title= "Occupation : " onChangeText = {() =>{this.setState({occupation:this.state.occupation})}}/>
            <Button color = "#ed931c" style= {styles.Button} title="Go to Details" onPress={() => {this.props.navigation.navigate('Details', { Name:this.state.name , Age: this.state.age , Dob:this.state.dob , Occupation:this.state.occupation }); }} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    HomeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'black',
    },
});