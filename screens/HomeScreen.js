import { Text, View, StyleSheet} from 'react-native'

export function HomeScreen( props ) {
    return (
    <View style={styles.homeView}>
        <Text>Home Screen</Text>
    </View>
    );
}

const styles = StyleSheet.create( {
    homeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});