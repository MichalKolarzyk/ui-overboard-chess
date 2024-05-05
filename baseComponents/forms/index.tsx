import { View, Text } from "react-native";
import { TextControll } from "./FormControl";

const FormOv = (props: {children: any}) => {
    return <View>
        {props.children}
    </View>
}
FormOv.TextControll = TextControll;

const FormLabel = (props: {children: any}) => {
    return <Text>{props.children}</Text>
}
FormOv.Label = FormLabel;


export default FormOv;