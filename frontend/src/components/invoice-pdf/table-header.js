import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#44a8be";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#44a8be",
    backgroundColor: "#44a8be",
    borderBottomWidth: 1,
    color: "white",
    alignItems: "center",
    height: 24,
    paddingTop: "3px",
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
  },
  description: {
    width: "60%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  qty: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  rate: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  amount: {
    width: "15%",
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.description}>Item Description</Text>
    <Text style={styles.qty}>Qty</Text>
    <Text style={styles.amount}>MRP</Text>
    <Text style={styles.rate}>Price (1pcs)</Text>
  </View>
);

export default InvoiceTableHeader;
