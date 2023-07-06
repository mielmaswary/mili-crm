import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Container from "../assets/Container";

const PdfContent = ({ invitationDetails }) => {
  const styles = {
    container: {
      padding: 10,
      width: "100%",

      textAlign: "center",
    },
    img: {
      margin: "auto",
      width: 300,
    },
    h1: {
      fontSize: 30,
      color: "#ccc",
    },
    p: {
      margin: "10px 0",
    },
    div: {
      width: "80%",
      height: 30,
      backgroundColor: "darkBlue",
    },
  };

  const handleExportClick = () => {
    const input = document.getElementById("pdf-content");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const marginTop = 0;
      const marginRight = 0;
      const paddingTop = 0;
      const paddingRight = 0;

      pdf.addImage(
        imgData,
        "PNG",
        (pdfWidth - imgWidth) / 2,
        marginTop,
        imgWidth,
        imgHeight,
        marginRight,
        paddingTop,
        paddingRight
      );
      pdf.save("generated.pdf");
    });
  };

  return (
    <div style={styles.container} id="pdf-content">
      <img
        style={styles.img}
        src={"/invitationHeaderImage.png"}
        alt="React Icon"
      />
      <h1 style={styles.h1}>הזמנה</h1>

      <div style={styles.div}></div>
      <button onClick={handleExportClick}>Export to PDF</button>
    </div>
  );
};

export default PdfContent;
