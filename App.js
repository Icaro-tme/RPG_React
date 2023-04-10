import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TradeCard from './src/components/TradeCard';

export default function App() {
  const weapons = [
    { key:1, title: 'Axe', att: 10, def: 2, wt: 7 },
    { key:2, title: 'Sword', att: 8, def: 4, wt: 5 },
    { key:3, title: 'Bow', att: 6, def: 1, wt: 3 }
  ];

  return (
    <View style={styles.container}>
      {weapons.map((weapon, index) => (
        <View style={styles.column}>
          <TradeCard key={index} weapon={weapon} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flex: 0.5,
    margin:'2vw',
  }
});
