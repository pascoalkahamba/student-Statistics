import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import useGlobalStarage from "../hooks/useGlobalStarage";

interface SnackbarsProps {
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
  setNameError,
  setNumberError,
}: SnackbarsProps) {
  const {
    global: { open, setOpen, errorMessage },
  } = useGlobalStarage();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    if (setNameError) setNameError(false);

    if (setNumberError) setNumberError(false);

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
