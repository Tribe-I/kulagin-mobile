import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Heading from '../components/Heading';
import TopicRow from '../components/TopicRow';
import AuthorRow from '../components/AuthorRow';
import {
  authors,
  authorsNote,
  footerText,
  hero,
  ideas,
  marketSummary,
  topics,
} from '../data/landing';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>{hero.eyebrow}</Text>
      <Heading level="title">{hero.title}</Heading>
      <Text style={styles.lead}>{hero.lead}</Text>

      <View style={styles.section}>
        <Heading level="section">Саммари по рынку</Heading>
        <View style={styles.indexCard}>
          <Text style={styles.tickerCode}>{marketSummary.code}</Text>
          <Text style={styles.indexLabel}>{marketSummary.label}</Text>
          <Text style={styles.indexValue}>
            {marketSummary.value} <Text style={styles.indexUnit}>{marketSummary.unit}</Text>
          </Text>
          <Text style={[styles.chip, marketSummary.isUp ? styles.up : styles.down]}>
            {marketSummary.change}
          </Text>
          <Text style={styles.muted}>{marketSummary.period}</Text>
        </View>
        {marketSummary.notes.map((note) => (
          <Text key={note} style={styles.noteLine}>
            {'•'} {note}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Heading level="section">Топ-5 тем для обсуждения</Heading>
        {topics.map((topic, index) => (
          <TopicRow key={topic.code} topic={topic} index={index} />
        ))}
      </View>

      <View style={styles.section}>
        <Heading level="section">Актуальные идеи</Heading>
        {ideas.map((idea) => (
          <View key={idea.title} style={styles.idea}>
            <View style={styles.ideaTexts}>
              <Text style={styles.ideaTitle}>{idea.title}</Text>
              <Text style={styles.tag}>{idea.tag}</Text>
            </View>
            <View style={styles.potential}>
              <Text style={styles.potentialValue}>{idea.potential}</Text>
              <Text style={styles.muted}>потенциал</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Heading level="section">Самые зарабатывающие авторы</Heading>
        {authors.map((author) => (
          <AuthorRow key={author.code} author={author} />
        ))}
        <Text style={styles.authorsNote}>{authorsNote}</Text>
      </View>

      <Text style={styles.footer}>{footerText}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f8',
  },
  content: {
    padding: 16,
    paddingTop: 24,
  },
  eyebrow: {
    color: '#2f6bff',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 8,
  },
  lead: {
    color: '#646b78',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e3e6eb',
    padding: 20,
    marginBottom: 16,
  },
  indexCard: {
    backgroundColor: '#eaf0ff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  tickerCode: {
    fontWeight: '700',
    fontSize: 12,
    color: '#2f6bff',
    marginBottom: 4,
  },
  indexLabel: {
    fontSize: 13,
    color: '#646b78',
  },
  indexValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#16181d',
    marginVertical: 4,
  },
  indexUnit: {
    fontSize: 16,
    fontWeight: '500',
    color: '#646b78',
  },
  chip: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  up: {
    color: '#12a150',
  },
  down: {
    color: '#d93a3a',
  },
  muted: {
    fontSize: 13,
    color: '#646b78',
  },
  noteLine: {
    color: '#16181d',
    marginTop: 8,
    lineHeight: 20,
  },
  idea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e3e6eb',
  },
  ideaTexts: {
    flex: 1,
  },
  ideaTitle: {
    fontSize: 15,
    color: '#16181d',
    marginBottom: 6,
  },
  tag: {
    fontSize: 12,
    color: '#646b78',
    backgroundColor: '#f5f6f8',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  potential: {
    alignItems: 'flex-end',
  },
  potentialValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#12a150',
  },
  authorsNote: {
    fontSize: 13,
    color: '#646b78',
    marginTop: 8,
  },
  footer: {
    fontSize: 13,
    color: '#646b78',
    textAlign: 'center',
    marginVertical: 24,
  },
});
