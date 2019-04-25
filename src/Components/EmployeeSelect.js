import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox, Avatar } from 'react-native-elements';
import TextCustom from './TextCustom';
import Colors from '../../constans/Colors';

export default class EmployeeSelect extends Component {
    state = {
        checked: false,
    };

    render() {
        return (
            <TouchableOpacity
                onPress={() => console.log('pressed')}
                style={styles.container}>
                <View style={styles.innerContainer}>
                    <Avatar
                        rounded
                        title="Dylan"
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                    <TextCustom
                        size={14}
                        title="Women's Designer"
                        color="#273d52"
                        styles={{ marginLeft: 8 }}
                    />
                </View>
                {this.props.noIcon ? (
                    <View />
                ) : (
                    <CheckBox
                        left
                        iconRight
                        containerStyle={{
                            backgroundColor: 'white',
                            borderColor: 'white',
                        }}
                        checkedIcon="check-circle"
                        uncheckedIcon="circle-thin"
                        uncheckedColor={Colors.purple}
                        checkedColor={Colors.purple}
                        checked={this.state.checked}
                        onPress={() =>
                            this.setState({ checked: !this.state.checked })
                        }
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
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
    },
    innerContainer: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        alignSelf: 'flex-start',
        flex: 1,
    },
});
