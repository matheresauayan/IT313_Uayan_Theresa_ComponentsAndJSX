import { View } from "react-native";
import StudentRoster from "../components/StudentRoster";

export default function Index() {
  return (
    <View style={{ flex: 1, paddingTop: 60, backgroundColor: "#fff" }}>
      <StudentRoster />
    </View>
  );
}
