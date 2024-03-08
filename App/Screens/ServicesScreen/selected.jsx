import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default Selected = (props) => {
    const [isSelected, setSelected] = useState(false)



    const handleRemove = () => {
        props.removeService(props.serviceId)
        setSelected(false)
    }




    const handleAdd = () => {
        props.addService(props.service)
        setSelected(true)
        console.log(props.service)
    }



    console.log('___servLIst', props.servicesList.length)

    return (
        <View>
            <TouchableOpacity onPress={isSelected ? handleRemove : handleAdd}>
                {isSelected ?

                    (<Text style={{ fontSize: 16, color: 'red', paddingVertical: 10, paddingRight: 10 }}>
                        remove
                    </Text>) :
                    <Text style={{ fontSize: 25, paddingVertical: 15, paddingRight: 10 }}>
                        <AntDesign name="pluscircleo" size={20} color="green" />
                    </Text>
                }
            </TouchableOpacity>

        </View>
    )
}