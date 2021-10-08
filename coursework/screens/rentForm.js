import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { Icon, Input, Text, ThemeProvider } from "react-native-elements";
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Heading from '../layout/header';
import * as yup from 'yup';

const rentSchema = yup.object({
    type: yup.string().required(),
    bedrooms: yup.string().required(),
    myDate: yup.date().required(),
    price: yup.number().required(),
    furniture: yup.string(),
    notes: yup.string(),
    reporter: yup.string().required(),
});

export default function RentForm() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    return (
        <ThemeProvider >
            <Heading />
            <ScrollView style={styles.scrollviewStyle}>
                <View style={styles.container}>
                    <Formik
                        initialValues={{ type: "", bedrooms: "", myDate: moment().format('YYYY-MM-DD'), price: "", furniture: "", notes: "", reporter: "" }}
                        validationSchema={rentSchema}
                        onSubmit={values => console.log(values)}
                    >
                        {({ handleSubmit, values, setFieldValue, errors, handleChange }) => (
                            <View style={styles.safeContainerStyle}>
                                <Picker
                                    style={{ height: 50 }}
                                    mode="dropdown"
                                    selectedValue={values.type}
                                    onValueChange={handleChange("type")}
                                >
                                    <Picker.Item label="Property Type" value="" enabled={false} />
                                    <Picker.Item label="Flat" value="Flat" />
                                    <Picker.Item label="House" value="House" />
                                    <Picker.Item label="Bungalow" value="Bungalow" />
                                </Picker>
                                <Text style={styles.errorText}>{errors.type}</Text>

                                <Picker 
                                    style={{ height: 50 }}
                                    mode="dropdown"
                                    selectedValue={values.bedrooms}
                                    onValueChange={handleChange("bedrooms")}
                                >
                                    <Picker.Item label="Bedrooms" value="" enabled={false} />
                                    <Picker.Item label="Studio" value="Studio" />
                                    <Picker.Item label="One" value="One" />
                                    <Picker.Item label="Two" value="Two" />
                                </Picker>
                                <Text style={styles.errorText}>{errors.bedrooms}</Text>

                                <Input
                                    disabled
                                    title="Show Date Picker"
                                    rightIcon={
                                        <Icon
                                            name='calendar'
                                            type="antdesign"
                                            size={20}
                                            onPress={showDatePicker}
                                        />
                                    }
                                >{moment(values.myDate).format('YYYY-MM-DD')}</Input>

                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={date => {
                                        setFieldValue('myDate', moment(date).format('YYYY-MM-DD'))
                                        setDatePickerVisibility(false)
                                    }}
                                    onCancel={hideDatePicker}
                                />
                                <Text style={styles.errorText}>{errors.myDate}</Text>
                                <Input
                                    placeholder="Monthly price"
                                    onChangeText={handleChange("price")}
                                />
                                <Text style={styles.errorText}>{errors.price}</Text>
                                <Input
                                    placeholder="Furniture"
                                    onChangeText={handleChange("furniture")}
                                />
                                <Text style={styles.errorText}>{errors.furniture}</Text>
                                <Input
                                    placeholder="Notes"
                                    onChangeText={handleChange("notes")}
                                />
                                <Text style={styles.errorText}>{errors.notes}</Text>
                                <Input
                                    placeholder="Reporter"
                                    onChangeText={handleChange("reporter")}
                                />
                                <Text style={styles.errorText}>{errors.reporter}</Text>
                                <Button title="Submit" onPress={handleSubmit} />
                            </View>
                        )}
                    </Formik>
                </View>
            </ScrollView>
        </ThemeProvider>
    );
}


const styles = StyleSheet.create({
    safeContainerStyle: {
        flex: 1,
        margin: 10,
        justifyContent: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
    },
    errorText: {
        color: "red"
    },
    scrollviewStyle: {
        width: "100%",
    }
});