import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PdfContent from "./PdfContent";

const PdfGenerator = ({ content }) => {
  const pdfExportComponent = useRef(null);

  const handleExportClick = () => {
    const input = pdfExportComponent.current;
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("generated.pdf");
    });
  };

  return (
    <div>
      <button onClick={handleExportClick}>Export to PDF</button>
      <div ref={pdfExportComponent}>{<PdfContent />}</div>
    </div>
  );
};

export default PdfGenerator;
