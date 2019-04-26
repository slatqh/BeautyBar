import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TextCustom from './TextCustom';
import Colors from '../../constans/Colors';
import Shadows from '../../constans/Styles';

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
const hours = today.getHours();
const ampm = hours >= 12 ? 'PM' : 'AM';
const todayDay = `${mm}/${dd}/${yyyy}`;
const currentTime = `${today.getHours()}:${
    today.getMinutes() < 10 ? '0' : ''
}${today.getMinutes()}:${
    today.getSeconds() < 10 ? '0' : ''
}${today.getSeconds()} ${ampm}`;

export default class DateTime extends Component {
    state = {
        checked: true,
    };

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={[styles.container, Shadows]}>
                <TextCustom
                    size={12}
                    title={this.props.title}
                    styles={{
                        marginLeft: 8,
                        paddingVertical: 15,
                        color: Colors.darkBlue,
                    }}
                />
                {this.props.text ? (
                    <View />
                ) : (
                    <TextCustom
                        title={this.props.time ? currentTime : todayDay}
                        color={Colors.purple}
                        size={16}
                        styles={{ marginRight: 5 }}
                    />
                )}
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: Colors.lightgrey,
        borderLeftColor: Colors.purple,
        borderWidth: 1,
        borderLeftWidth: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
});
