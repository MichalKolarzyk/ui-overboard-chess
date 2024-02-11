import { Button, View } from "react-native";
import { useSession } from "../../hooks/sessionHooks"
import { PageStyles } from "../../styles";

const SettingsPage = () => {
    const session = useSession();

    return<View style={PageStyles.default}>
        <Button onPress={() => session.logout()} title="sing out"/>
    </View>
}

export default SettingsPage;