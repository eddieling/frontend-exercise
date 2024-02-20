"use client";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styles from "../styles/Home.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { NewOfferDialog } from "../components/NewOfferDialog";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [existingOffers, setExistingOffers] = useState([]);

  useEffect(() => {
    const offers = JSON.parse(localStorage.getItem("offers"));
    if (!offers || offers.length === 0) {
      localStorage.setItem("offers", JSON.stringify(tempData));
      setExistingOffers(tempData);
    } else {
      setExistingOffers(offers);
    }
  }, [localStorage.getItem("offers")]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCopy = (row) => {
    let url = `${window.location.href}offer/${row.id}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>Offer of Employments</div>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Salary&nbsp;($)</TableCell>
            <TableCell>Bonus&nbsp;($)</TableCell>
            <TableCell>Equity&nbsp;(%)</TableCell>
            <TableCell>Share URL</TableCell>
          </TableRow>
        </TableHead>
        {existingOffers.length > 0 && (
          <TableBody>
            {existingOffers.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ textDecoration: "underline" }}
                >
                  <a target="_blank" href={`/offer/${row.id}`}>
                    {row.name}
                  </a>
                </TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.bonus}</TableCell>
                <TableCell>{row.equity}</TableCell>
                <TableCell>
                  <Tooltip title="Copy">
                    <IconButton
                      aria-label="copy"
                      onClick={() => handleCopy(row)}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>

      <Button
        style={{ marginTop: 100 }}
        variant="contained"
        component="label"
        onClick={handleClickOpen}
      >
        Create New Offer
      </Button>
      <NewOfferDialog open={open} onClose={handleClose} />
    </div>
  );
}
