import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    // flexDirection: "row",
    marginTop: 12,
    position: "absolute",
    bottom: 20,
    // margin: "auto",
    width: "125%",
  },
  reportTitle: {
    fontSize: 10,
    textAlign: "center",

    // margin: "auto",
    textTransform: "uppercase",
  },
});

const InvoiceThankYouMsg = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>Thank you for Shopping on TryNkart</Text>
  </View>
);

export default InvoiceThankYouMsg;
