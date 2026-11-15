import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import type { Topic } from '../data/landing';
import { LANDING_URL } from '../data/landing';

type TopicRowProps = {
  topic: Topic;
  index: number;
};

export default function TopicRow({ topic, index }: TopicRowProps) {
  const handlePress = () => {
    Linking.openURL(`${LANDING_URL}#/topics/${topic.code}`);
  };

  return (
    <Pressable
      style={styles.row}
      onPress={handlePress}
      accessibilityRole="link"
      accessibilityLabel={`${topic.title}, ${topic.postsCount}`}
    >
      <View style={styles.num}>
        <Text style={styles.numText}>{index + 1}</Text>
      </View>
      <View style={styles.texts}>
        <Text style={styles.title}>{topic.title}</Text>
        <Text style={styles.meta}>{topic.postsCount}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
  },
  num: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#f5f6f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numText: {
    color: '#2f6bff',
    fontWeight: '700',
    fontSize: 14,
  },
  texts: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#16181d',
  },
  meta: {
    fontSize: 13,
    color: '#646b78',
    marginTop: 2,
  },
  chevron: {
    color: '#646b78',
    fontSize: 20,
  },
});
