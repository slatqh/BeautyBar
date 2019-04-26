import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TextInput } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
    FeedHeader,
    // ServicePicker,
    ServiceTitle,
    // EmployeeSelect,
    CardPrice,
    DateTime,
    CustomButton,
} from '../../Components';
import Colors from '../../../constans/Colors';

export default class BookingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isDateTimePickerVisible: false,
            isTimePickerVisible: false,
            date: null,
            time: null,
            notes: '',
        };
    }
    // select date
    _showDateTimePicker = () =>
        this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () =>
        this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = date => {
        this.setState({ date });
        this._hideDateTimePicker();
    };
    //  select Time
    _showTimePicker = () => this.setState({ isTimePickerVisible: true });

    _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

    _handlePicked = date => {
        this.setState({ time: date });
        this._hideTimePicker();
    };
    render() {
        return (
            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                bounces={false}>
                <FeedHeader navigation={this.props.navigation} />
                <View style={{ paddingHorizontal: 15 }}>
                    <ServiceTitle title="Services" />
                    <ServiceTitle
                        title="Hair"
                        size={12}
                        styles={{ marginTop: 0 }}
                    />
                    <CardPrice />
                </View>
                <View style={styles.divider} />
                <View style={styles.wraper}>
                    <ServiceTitle title="Data & Time" />
                    <DateTime
                        title="Select date"
                        onPress={this._showDateTimePicker}
                    />
                    <DateTime
                        title="Select time"
                        time
                        onPress={this._showTimePicker}
                    />
                    <View>
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />
                    </View>
                    <View>
                        <DateTimePicker
                            mode="time"
                            isVisible={this.state.isTimePickerVisible}
                            onConfirm={this._handlePicked}
                            onCancel={this._hideTimePicker}
                        />
                    </View>
                    <ServiceTitle title="Any special requirements?" />
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder={`${' '} Type something...`}
                            multiline
                            onTextChange={e => this.setState({ notes: e })}
                        />
                    </View>
                    <ServiceTitle title="Payments" />
                    <DateTime title="Payment required at the venue" text />
                    <View style={{ paddingVertical: 15 }}>
                        <CustomButton
                            gradient
                            title="GO TO CHECKOUT"
                            onPress={() =>
                                this.props.navigation.navigate('BookingDetails')
                            }
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    divider: {
        width: '100%',
        borderTopWidth: 2,
        borderTopColor: Colors.grey,
        marginTop: 10,
    },
    wraper: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 15,
    },
    modal: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 5,
    },
    textInput: {
        borderColor: Colors.lightgrey,
        borderWidth: 0.5,
        borderRadius: 5,
        height: 100,
    },
});
