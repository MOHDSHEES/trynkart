import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import InvoiceTableHeader from "./table-header";
import InvoiceTableRow from "./data-rows";
import InvoiceTableFooter from "./table-footer";
import InvoiceTableBlankSpace from "./empty-rows";

const tableRowsCount = 4;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#bff0fd",
  },
});

const InvoiceItemsTable = ({ invoice, together, payment }) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader />
    <InvoiceTableRow invoice={invoice} items={together} payment={payment} />
    <InvoiceTableBlankSpace rowsCount={1} />
    {/* <InvoiceTableBlankSpace rowsCount={tableRowsCount - together.length + 1} /> */}
    <InvoiceTableFooter payment={payment} />
  </View>
);

export default InvoiceItemsTable;
