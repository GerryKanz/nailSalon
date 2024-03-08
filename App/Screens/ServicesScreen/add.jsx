import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default Selected = (props) => {
    const [isSelected, setSelected] = useState(false)

    const handleRemove = () => {
        props.removeService(props.serviceId)
        setSelected(props.servicesList.some(dict => dict.id === props.serviceId))
    }

    const handleAdd = () => {
        props.addService(props.service)
    }
    console.log('___servLIst', props.servicesList.length)

    return (
        <View>

            {isSelected ?
                <TouchableOpacity onPress={() => handleRemove()}>
                    (<Text style={{ fontSize: 25, paddingVertical: 10, paddingRight: 10 }}>-</Text>)
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => handleAdd()}>
                    <Text style={{ fontSize: 25, paddingVertical: 10, paddingRight: 10 }}>+</Text>
                </TouchableOpacity>
            }

        </View>
    )
}