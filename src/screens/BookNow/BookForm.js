import React, {useState} from 'react';
import { Text, StyleSheet, View, Switch, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { TextInput } from 'react-native-paper';

const BookForm = () => {
  const [isOneWay, setIsOneWay] = useState(false);
  const [isReturn, setIsReturn] = useState(false);
  const [isMultipleDays, setIsMultipleDays] = useState(false);
  const [isDateVisible, setIsDateVisible] = useState(false);
  const [isRepatriation, setIsRepatriation] = useState(false);
  const repatriation = () => setIsRepatriation(previousState => !previousState);
  const oneWay = () => setIsOneWay(previousState => !previousState);
  const returnTrip = () => setIsReturn(previousState => !previousState);
  const multipleDays = () => setIsMultipleDays(previousState => !previousState);
  const onChange = (event, selectedDate) => {
      console.log(selectedDate)
    // const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    // setDate(currentDate);
    setIsDateVisible(false)
  };
  const onTouch = (event) => {
    setIsDateVisible(true)
  }
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isOneWay ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={oneWay}
                value={isOneWay}
            />
            <Text>One Way</Text>
        </View>
        <View style={styles.row}>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isReturn ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={returnTrip}
                value={isReturn}
            />
            <Text>Return</Text>
        </View>
        <View style={styles.row}>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isMultipleDays ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={multipleDays}
                value={isMultipleDays}
            />
            <Text>Multiple Days</Text>
        </View>
        <View  style={[styles.inpt, styles.row, styles.name]}>
            <TextInput
            style={{width: '45%'}}
            mode='outlined'
            label="first name"
            placeholder="First Name" />

            <TextInput
            style={{width: '45%',marginRight: 2}}
            mode='outlined'
            label="Last Name"
            placeholder="Last Name" />
        </View>
        <View style={styles.inpt}>
            <TextInput 
                mode='outlined'
                label="Email"
                placeholder="Email" 
            />
        </View>
        <View style={styles.inpt}>
            <TextInput
                mode='outlined'
                label = "Contact Number"
                placeholder="Contact Number" 
            />
        </View>
        <View style={styles.inpt}>
            <TextInput 
                label = "Departure"
                mode='outlined'
                placeholder="Departure" 
            />
        </View>
        <View style={styles.inpt}>
            <TextInput 
                mode='outlined'
                label='Destination'
                placeholder="Destination" />
        </View>
        
        {/* <TextInput 
            placeholder="Date" onFocus={onTouch}/> */}
        </View>
        {isDateVisible && <DateTimePicker
            testID="dateTimePicker"
            value={Date.now()}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange}
        />}

        <View>
            <Text>EMERGENCY / REPATRIATION Flights</Text>
            <Text>Are you looking to book a Repatriation flight ?</Text>
        </View>

        <View style={styles.row}>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isRepatriation ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={repatriation}
                value={isRepatriation}
            />
            <Text>Yes</Text>
        </View>    

        <View style={styles.btn}> 
            <Button
            
                title="submit"
                onPress={() => console.log('Right button pressed')}
                />
        </View>    
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20
    
    
  },
  inpt: {
    marginTop: 5,
    marginBottom: 5,
  },
  row: {display: 'flex', flexDirection: 'row',fontFamily: 'Roboto'},
  btn: {
      display: 'flex',
      flexDirection: 'row'
  },
  name: {
      justifyContent: 'space-between',
  }
});

export default BookForm;