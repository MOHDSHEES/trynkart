import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 36,
  },
  billTo: {
    marginTop: 20,
    paddingBottom: 3,
    fontFamily: "Helvetica-Oblique",
  },
});

const BillTo = ({ invoice }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.billTo}>Bill To:</Text>
    <Text>{invoice.address.name}</Text>
    <Text>{invoice.address.address}</Text>
    <Text>
      {invoice.address.district}, {invoice.address.state},{" "}
      {invoice.address.pincode}
    </Text>
    <Text>{invoice.address.mobileno}</Text>
    <Text>Id: {invoice.address._id}</Text>
  </View>
);

export default BillTo;
