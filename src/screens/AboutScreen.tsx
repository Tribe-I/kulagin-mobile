import { StyleSheet, Text, View } from 'react-native';
import Heading from '../components/Heading';

const commitHash = process.env.EXPO_PUBLIC_COMMIT ?? 'dev';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Heading level="title">Сообщество инвесторов</Heading>
      <Text style={styles.lead}>
        Мобильное приложение сообщества инвесторов: сводка по рынку, темы дня, идеи и авторы в
        одном месте.
      </Text>
      <Text style={styles.commit}>Версия сборки: {commitHash}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f8',
    padding: 16,
    paddingTop: 24,
  },
  lead: {
    color: '#646b78',
    marginBottom: 20,
    lineHeight: 20,
  },
  commit: {
    fontSize: 13,
    color: '#646b78',
  },
});
