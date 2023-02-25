import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import useGlobalStarage from "../hooks/useGlobalStarage";
import { useNavigate } from "react-router-dom";

interface SnackbarsProps {
  nameError?: boolean;
  numberError?: boolean;
  setNumberError?: React.Dispatch<React.SetStateAction<boolean>>;
  setNameError?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({
  nameError,
  numberError,
  setNameError,
  setNumberError,
}: SnackbarsProps) {
  const {
    global: { open, setOpen, feedBack },
  } = useGlobalStarage();

  const navigate = useNavigate();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    if (setNameError) setNameError(false);
    if (setNumberError) setNumberError(false);
    if (feedBack.kind === "success") navigate("/final-results");

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={feedBack.kind}
          sx={{ width: "100%" }}
        >
          {feedBack.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
