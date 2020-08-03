import React, {useState} from 'react';
import { Text, StyleSheet, View, Switch, TouchableHighlight, TouchableOpacity} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';



const TourForm = () => {
  const [isOneWay, setIsOneWay] = useState(false);
  const [isReturn, setIsReturn] = useState(false);
  const [isMultipleDays, setIsMultipleDays] = useState(false);
  const [isDateVisible, setIsDateVisible] = useState(false);
  const [isRepatriation, setIsRepatriation] = useState(false);
  const repatriation = () => setIsRepatriation(previousState => !previousState);
  const oneWay = () => setIsOneWay(previousState => !previousState);
  const returnTrip = () => setIsReturn(previousState => !previousState);
  const multipleDays = () => setIsMultipleDays(previousState => !previousState);
  const onTouch = (event) => {
    setIsDateVisible(true)
  }
  const onChange = (event, selectedDate) => {
    console.log(selectedDate)
  // const currentDate = selectedDate || date;
  // setShow(Platform.OS === 'ios');
  // setDate(currentDate);
  setIsDateVisible(false)
};

  return (
    <View style={styles.container}>

        
      <View >

        <TouchableOpacity style={{marginTop: 10, marginBottom: 15}}> 
            {/* <Text style={{color: '#767577', textDecorationLine: 'underline', marginTop: 10}}>
                Select Date
            </Text> */}
            <Button icon="calendar" style={{display: 'flex',flexDirection: 'row'}} onPress={onTouch}>
                Select a date
             </Button>
        </TouchableOpacity >
        {isDateVisible && <DateTimePicker
            testID="dateTimePicker"
            value={Date.now()}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange}
        />}

        <View style={{marginBottom: 15}}>
            <Text>Preferred Option*</Text>
            <Picker
                selectedValue={'Option One'}
                style={{height: 50, width: 150}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
                }>
                <Picker.Item label="Option One" value="Option One" />
                <Picker.Item label="Option Two" value="Option Two" />
                <Picker.Item label="Option Three" value="Option Three" />
                <Picker.Item label="Option Four" value="Option Four" />
                <Picker.Item label="Option Five" value="Option Five" />
          </Picker>
        </View>

        <View>
            <Text>No. of Passengers*</Text>
            <Picker
                selectedValue={'1'}
                style={{height: 50, width: 150}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
                }>
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
          </Picker>
        </View>


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
                
                label="Email"
            />
        </View>
        <View style={styles.inpt}>
            <TextInput
                style={{backgroundColor:'#fff'}} 
               
                label = "Contact Number"
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
               REQUEST QUOTE
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

export default TourForm;