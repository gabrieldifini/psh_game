import React, { useEffect, useState, useRef } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import moment from "moment";

import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function DownloadButton({ stats }) {

  const formatData = (data) => {
    return data.map((item, i) => ( [i+1, Object.keys(item).map(el => ( item[el] ))].flat() ))
  }

  const csvColumns = ["Position", "Player", "Image URL", "Score"];

  const [formattedData, setFormattedData] = useState([csvColumns, ...formatData(stats)]);

  const csvLink = useRef();

  useEffect(() => {
    setFormattedData([csvColumns, ...formatData(stats)]);
  }, [stats]);

  return (
    <div>
      <Button
      variant="contained"
      onClick={() => {
        csvLink.current.link.click()
      }}
      style={{
        fontFamily: "Montserrat",
        backgroundColor: "red",
        fontWeight: "bold",
      }}
    >
      <FileDownloadIcon /> Download CSV
    </Button>
      <CSVLink
        data={formattedData}
        filename={`${moment().format('YYYYMMDDHHmmss')}-PSH-GAME-TOP-STATS`}
        style={{ display: 'none' }}
        ref={csvLink}
        target='_blank'
      />
    </div>
  );
}
