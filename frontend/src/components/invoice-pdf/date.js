import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  invoiceNoContainer: {
    flexDirection: "row",
    // marginTop: 36,
    justifyContent: "flex-end",
  },
  invoiceDateContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  invoiceContainer: {
    flexDirection: "row",
    marginTop: 36,
    justifyContent: "flex-end",
  },
  invoiceDate: {
    width: "140px",
    marginLeft: 12,
    fontSize: 12,
    fontStyle: "bold",
  },

  label: {
    width: "60px",
  },
});

const InvoiceNo = ({ invoice }) => (
  <Fragment>
    <View style={styles.invoiceContainer}>
      <Text style={styles.label}>Date: </Text>
      <Text style={styles.invoiceDate}>{invoice.date}</Text>
    </View>
    <View style={styles.invoiceNoContainer}>
      <Text style={styles.label}>Order Id:</Text>
      {/* <Text style={styles.invoiceDate}>{invoice.invoice_no}</Text> */}
      <Text style={styles.invoiceDate}>{invoice.orderId}</Text>
    </View>
    <View style={styles.invoiceDateContainer}>
      <Text style={styles.label}>Payment Id: </Text>
      <Text style={styles.invoiceDate}>{invoice.paymentId}</Text>
    </View>
  </Fragment>
);

export default InvoiceNo;
