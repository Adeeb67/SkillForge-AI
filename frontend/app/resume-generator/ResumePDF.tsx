import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Times-Roman",
    lineHeight: 1.5,
  },
  header: {
    textAlign: "center",
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contact: {
    marginTop: 6,
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    borderBottom: "1 solid black",
    marginBottom: 6,
  },
  bold: {
    fontWeight: "bold",
  },
  bullet: {
    marginLeft: 10,
  },
});

export default function ResumePDF({ data }: any) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.contact}>
            {data.location} • {data.phone} • {data.email}
          </Text>
          <Text>
            <Link src={data.linkedin}>LinkedIn</Link> •{" "}
            <Link src={data.github}>GitHub</Link> •{" "}
            <Link src={data.leetcode}>LeetCode</Link>
          </Text>
        </View>

        {/* EDUCATION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          <Text style={styles.bold}>
            {data.university}, {data.eduLocation}
          </Text>
          <Text>
            {data.degree} ({data.eduStart} – {data.eduEnd})
          </Text>
          <Text>Relevant Coursework: {data.coursework}</Text>
        </View>

        {/* SKILLS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
          <Text>Programming: {data.programming}</Text>
          <Text>Frameworks: {data.frameworks}</Text>
          <Text>Databases: {data.databases}</Text>
          <Text>Tools: {data.tools}</Text>
          <Text>Languages: {data.languages}</Text>
        </View>

        {/* EXPERIENCE */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
          <Text style={styles.bold}>
            {data.experienceCompany} — {data.experienceRole}
          </Text>
          <Text>
            {data.experienceType} | {data.experienceStart} – {data.experienceEnd}
          </Text>
          {data.experiencePoints.split("\n").map((point: string, i: number) => (
            <Text key={i} style={styles.bullet}>• {point}</Text>
          ))}
        </View>

        {/* PROJECTS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROJECTS</Text>
          {data.projects.split("\n").map((proj: string, i: number) => (
            <Text key={i} style={styles.bullet}>• {proj}</Text>
          ))}
        </View>

        {/* LEADERSHIP */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>LEADERSHIP & ACTIVITIES</Text>
          <Text>{data.leadership}</Text>
        </View>

      </Page>
    </Document>
  );
}
