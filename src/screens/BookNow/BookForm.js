import React, {useState} from 'react';
import { Text, StyleSheet, View, Switch, TouchableHighlight, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { TextInput, Button } from 'react-native-paper';

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
        // display: 'flex',
        // flexDirection: 'row',
      //   backgroundColor: 'white',
    },
    name: {
        justifyContent: 'space-between',
    },
    repatriation:{
        fontFamily: 'sans-serif',
        color: 'rgba(112,112,112,.5)'
    },
  
});

const BookForm = () => {
  const [isOneWay, setIsOneWay] = useState(false);
  const [isReturn, setIsReturn] = useState(false);
  const [isMultipleDays, setIsMultipleDays] = useState(false);
  const [isDateVisible, setIsDateVisible] = useState(false);
  const [isRepatriation, setIsRepatriation] = useState(false);
  const [selDate, setSelDate] = useState('')

  const repatriation = () => setIsRepatriation(previousState => !previousState);
  const oneWay = () => setIsOneWay(previousState => !previousState);
  const returnTrip = () => setIsReturn(previousState => !previousState);
  const multipleDays = () => setIsMultipleDays(previousState => !previousState);
  const onChange = (event, selectedDate) => {
      let selectedate = new Date(selectedDate);
      let dateVal = selectedate.toLocaleString().split(',')[0];
      setSelDate(dateVal);
    // console.log("by default:", selectedate);
    // console.log("by UTCString:", selectedDate.toUTCString());
    // console.log("by LocaleString:", selectedate.toLocaleString());
    // console.log("by LocaleTimeString:", selectedate.toLocaleTimeString());
    // const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    // setDate(currentDate);
    setIsDateVisible(false)
  };
  const onTouch = (event) => {
      console.log("Touch triggere")
    setIsDateVisible(true)
  }
  return (
    <View style={styles.container}>
      <View >
        <View style={styles.row}>
            <Switch
                trackColor={{ false: "#767577", true: "#000" }}
                thumbColor={isOneWay ? "#fff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={oneWay}
                value={isOneWay}
            />
            <Text>One Way</Text>
        </View>
        <View style={styles.row}>
            <Switch
                trackColor={{ false: "#767577", true: "#000" }}
                thumbColor={isOneWay ? "#fff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={returnTrip}
                value={isReturn}
            />
            <Text>Return</Text>
        </View>
        <View style={styles.row}>
            <Switch
                trackColor={{ false: "#767577", true: "#000" }}
                thumbColor={isOneWay ? "#fff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={multipleDays}
                value={isMultipleDays}
            />
            <Text>Multiple Days</Text>
        </View>
        <View  style={[styles.inpt, styles.row, styles.name]}>
            <TextInput
            style={{width: '45%',backgroundColor:'#fff'}}
            
            label="First name" />

            <TextInput
            style={{width: '45%',marginRight: 2,backgroundColor:'#fff'}}
            
            label="Last Name"/>
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
        <View style={styles.inpt}>
            <TextInput
            style={{backgroundColor:'#fff'}} 
                label = "Departure"
                
            />
        </View>
        <View style={styles.inpt}>
            <TextInput 
            style={{backgroundColor:'#fff'}}
                
                label='Destination' />
        </View>
        
        {/* <TextInput 
            placeholder="Date" onFocus={onTouch}/> */}

        <TouchableOpacity style={{marginTop: 10}}> 
            {/* <Text style={{color: '#767577', textDecorationLine: 'underline', marginTop: 10}}>
                Select Date
            </Text> */}
            <Button icon="calendar" style={{display: 'flex',flexDirection: 'row'}} onPress={onTouch}>
                Select a date
             </Button>
        </TouchableOpacity >
        <Text>You selected Date: {selDate}</Text>
        </View>
            {
                isDateVisible && <DateTimePicker
                    testID="dateTimePicker"
                    value={Date.now()}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            }

        <View>
            <Text style={{marginTop: 25}}>EMERGENCY / REPATRIATION Flights</Text>
            <Text style={styles.repatriation}>Are you looking to book a Repatriation flight ?</Text>
        </View>

        <View style={[styles.row, {marginTop: 10, marginBottom: 10}]}>
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

export default BookForm;