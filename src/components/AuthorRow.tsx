import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import type { Author } from '../data/landing';
import { LANDING_URL } from '../data/landing';

type AuthorRowProps = {
  author: Author;
};

export default function AuthorRow({ author }: AuthorRowProps) {
  const handlePress = () => {
    Linking.openURL(`${LANDING_URL}#/authors/${author.code}`);
  };

  return (
    <Pressable
      style={styles.row}
      onPress={handlePress}
      accessibilityRole="link"
      accessibilityLabel={`${author.name}, ${author.yield}`}
    >
      <View style={[styles.avatar, { backgroundColor: author.color }]}>
        <Text style={styles.avatarText}>{author.initials}</Text>
      </View>
      <Text style={styles.name}>{author.name}</Text>
      <Text style={styles.yield}>{author.yield}</Text>
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
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: '700',
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#16181d',
  },
  yield: {
    fontSize: 15,
    fontWeight: '700',
    color: '#12a150',
  },
  chevron: {
    color: '#646b78',
    fontSize: 20,
  },
});
