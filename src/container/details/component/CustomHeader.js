// Formik x React Native example
import React from 'react';
import { Alert, Button, TextInput, View, Text, StyleSheet,TouchableHighlight } from 'react-native';
import { Formik } from 'formik';
import DropdownComponent from './DropDown';
import * as Yup from 'yup';


export const MyReactNativeForm = props => (
  <>
    <Formik
      initialValues={{ type: '' }}
      onSubmit={values => {
        console.log("Values", values)
        props.onSubmit(values)
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
        <View style={{ margin: 5 }}>
          <DropdownComponent onChange={(item) => {
            console.log("item", item)
            setFieldValue("type", item)
          }} />

          {values?.type === 3 ?
            <TextInput
              onChangeText={handleChange('energy')}
              onBlur={handleBlur('energy')}
              value={values.distance}
              style={styles.textStyle}
              placeholder="energy consumed in kwh"
            />
            :
            <TextInput
              onChangeText={handleChange('distance')}
              onBlur={handleBlur('distance')}
              value={values.distance}
              style={styles.textStyle}
              placeholder="distance in kms"
            />
          }

          {/* <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          style={styles.textStyle}
          placeholder="Date"
        />
         <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          style={styles.textStyle}
          placeholder="Car"
        /> */}
          <TouchableHighlight style={{ height: 50, justifyContent: "center", margin: 5, backgroundColor: "#0fbcd6"}} onPress={handleSubmit}>
            <Text  style={{ alignSelf: "center", textAlign: "center", color: "white" }}>Submit</Text>
          </TouchableHighlight>
        </View>
      )}
    </Formik>
  </>
);

const styles = StyleSheet.create({
  textStyle: {
    borderBottomColor: "#a2a3a2", borderBottomWidth: 1, height: 40, margin: 13
  }

})