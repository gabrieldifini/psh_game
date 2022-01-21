import React from "react";

import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function DownloadButton() {
  return (
    <Button
      variant="contained"
      size="small"
      onClick={() => {
        console.log("Download button clicked.");
      }}
      style={{
        fontFamily: "Montserrat",
        backgroundColor: "red",
        fontWeight: "bold",
      }}
    >
      <FileDownloadIcon /> Download CSV
    </Button>
  );
}
