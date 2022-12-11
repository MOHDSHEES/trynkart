import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    // flexDirection: "row",
    marginTop: 24,
  },
  reportTitle: {
    color: "#44a8be",
    letterSpacing: 4,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: "10px",
  },
});

const InvoiceTitle = ({ title }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>{title}</Text>
  </View>
);

export default InvoiceTitle;
