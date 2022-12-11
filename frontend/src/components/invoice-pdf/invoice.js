import React from "react";
import { Page, Document, Image, StyleSheet, Text } from "@react-pdf/renderer";
import InvoiceTitle from "./title";
import InvoiceNo from "./date";
import BillTo from "./biil-to";
import InvoiceItemsTable from "./item-table";
import InvoiceThankYouMsg from "./message";

// import InvoiceThankYouMsg from "./InvoiceThankYouMsg";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 74,
    height: 76,
    marginLeft: "auto",
    marginRight: "auto",
  },
  payment: {
    // color: "grey",
    fontWeight: 100,
    fontSize: 10,
    marginTop: 10,
    marginLeft: 5,
  },
});

const Invoice = ({ invoice, together, payment }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.logo} src={"/logo.jpeg"} />
      <InvoiceTitle title="Invoice" />
      <InvoiceNo invoice={invoice} payment={payment} />
      <BillTo invoice={invoice} />
      <InvoiceItemsTable
        style={{ marginTop: "20px" }}
        invoice={invoice}
        together={together}
        payment={payment}
      />
      <Text style={styles.payment}>
        Payment is done through "{payment && payment.method}{" "}
        {payment && payment.wallet && payment.wallet}".
      </Text>
      <InvoiceThankYouMsg />
    </Page>
  </Document>
);

export default Invoice;
