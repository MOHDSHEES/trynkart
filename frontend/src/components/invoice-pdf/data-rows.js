import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    padding: "5px 5px 5px 0",

    // height: 24,
    fontStyle: "bold",
  },
  description: {
    width: "60%",
    // height: "60px",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  qty: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    // height: "100%",
    textAlign: "right",
    paddingRight: 8,
  },
  rate: {
    width: "15%",
    // borderRightColor: borderColor,
    // borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  amount: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
});

const InvoiceTableRow = ({ invoice, items }) => {
  const rows = (
    <Fragment>
      {items &&
        items.map((item, idx) => (
          <View style={styles.row} key={idx}>
            <Text style={styles.description}>{item.displayInfo}</Text>
            <Text style={styles.qty}>{item.qty}</Text>
            <Text style={styles.amount}>{item.mrp}</Text>
            <Text style={styles.rate}>{item.sellingPrice}</Text>
          </View>
        ))}
      <View style={styles.row}>
        <Text style={styles.description}>{invoice.displayInfo}</Text>
        <Text style={styles.qty}>{invoice.qty}</Text>
        <Text style={styles.amount}>{invoice.mrp}</Text>
        <Text style={styles.rate}>{invoice.sellingPrice}</Text>
      </View>
    </Fragment>
  );
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;
