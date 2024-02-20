import React, { useState } from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import styles from "../styles/Components.module.css";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";

export function NewOfferDialog(props) {
  const { onClose, open } = props;
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    const offers = JSON.parse(localStorage.getItem("offers"));
    const newOffer = {
      id: offers.length + 1,
      ...formData,
    };
    offers.push(newOffer);

    localStorage.setItem("offers", JSON.stringify(offers));
    onClose();
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Create New Offer </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className={styles.inputContainer}>
              <div className={styles.text}>Name:</div>
              <TextField
                className={styles.longTextField}
                id="outlined-basic"
                variant="outlined"
                size="small"
                name="name"
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.inputContainer}>
              <div className={styles.text}>Role:</div>
              <TextField
                className={styles.longTextField}
                id="outlined-basic"
                variant="outlined"
                size="small"
                name="role"
                onChange={handleChange}
              />
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className={styles.inputContainer}>
              <div className={styles.text}>Salary:</div>
              <TextField
                className={styles.textField}
                id="outlined-basic"
                variant="outlined"
                size="small"
                name="salary"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.inputContainer}>
              <div className={styles.text}>Equity:</div>
              <TextField
                className={styles.textField}
                id="outlined-basic"
                variant="outlined"
                size="small"
                name="equity"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                }}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.inputContainer}>
              <div className={styles.text}>Bonus:</div>
              <TextField
                className={styles.textField}
                id="outlined-basic"
                variant="outlined"
                size="small"
                name="bonus"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </div>
          </Grid>

          <Grid item xs={12} style={{ marginTop: 20 }}>
            <div className={styles.inputContainer}>
              <div className={styles.longText}>Culture:</div>
              <TextField
                className={styles.multilineText}
                id="outlined-basic"
                variant="outlined"
                size="small"
                name="culture"
                onChange={handleChange}
                multiline
                rows={4}
              />
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <div className={styles.inputContainer}>
            <div className={styles.longText}>Learning Opportunities:</div>
            <TextField
              className={styles.multilineText}
              id="outlined-basic"
              variant="outlined"
              size="small"
              name="learningOpportunities"
              onChange={handleChange}
              multiline
              rows={4}
            />
          </div>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Cancel
        </Button>
        <Button autoFocus onClick={onSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
