import React, {useState} from 'react';
import { Text, StyleSheet, View, Switch, TouchableHighlight, TouchableOpacity} from 'react-native';
import { TextInput, Button } from 'react-native-paper';


const ContactForm = () => {
  const [isOneWay, setIsOneWay] = useState(false);
  const [isReturn, setIsReturn] = useState(false);
  const [isMultipleDays, setIsMultipleDays] = useState(false);
  const [isDateVisible, setIsDateVisible] = useState(false);
  const [isRepatriation, setIsRepatriation] = useState(false);
  const repatriation = () => setIsRepatriation(previousState => !previousState);
  const oneWay = () => setIsOneWay(previousState => !previousState);
  const returnTrip = () => setIsReturn(previousState => !previousState);
  const multipleDays = () => setIsMultipleDays(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View >
        <View  style={[styles.inpt, styles.row, styles.name]}>
            <TextInput
            style={{width: '45%',backgroundColor:'#fff' }}
        
            label="First name"/>

            <TextInput
            style={{width: '45%',marginRight: 2,backgroundColor: '#fff'}}
            
            label="Last Name" />
        </View>
        <View style={styles.inpt}>
            <TextInput
                style={{backgroundColor:'#fff'}} 
               
                label = "Contact Number"
            />
        </View>
        <View style={styles.inpt}>
            <TextInput 
                style={{backgroundColor:'#fff'}} 
                
                label="Email"
            />
        </View>

        <View style={styles.inpt}>
            <TextInput 
                style={{backgroundColor:'#fff'}} 
                label = "Message"
                
                
                multiline={true}
            />
        </View>
        
        </View>
    

        <View style={styles.btn}> 
            
            {/* <Button
            style={{backgroundColor: 'black'}}
            title="submit"
            onPress={() => console.log('Right button pressed')}
            /> */}
             <Button  mode="contained"  onPress={() => console.log('Pressed')}>
               Submit
            </Button>
    </View>   
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  inpt: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#fff'
  },
  row: {display: 'flex', flexDirection: 'row',fontFamily: 'Roboto'},
  btn: {
      marginTop: 15
  },
  name: {
      justifyContent: 'space-between',
  },
  repatriation:{
      fontFamily: 'sans-serif',
      color: 'rgba(112,112,112,.5)'
  },

});

export default ContactForm;