import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}) {
  const [present, setPresent] = useState(false);

  return (
    <Pressable onPress={() => setPresent(!present)}>
      <View style={styles.card}>
        <Text style={styles.name}>
          {name} {present ? "✓" : ""}
        </Text>
        <Text>{course}</Text>
        <Text>{units} units</Text>
        {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
  },
  name: { fontSize: 16, fontWeight: "bold" },
  fullLoad: { marginTop: 4, fontWeight: "600", color: "#0a7d32" },
});
