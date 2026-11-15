import { StyleSheet, Text } from 'react-native';

type HeadingProps = {
  children: string;
  level: 'title' | 'section';
};

export default function Heading({ children, level }: HeadingProps) {
  return (
    <Text
      accessibilityRole="header"
      style={level === 'title' ? styles.title : styles.section}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#16181d',
    marginBottom: 12,
  },
  section: {
    fontSize: 20,
    fontWeight: '700',
    color: '#16181d',
    marginBottom: 12,
  },
});
