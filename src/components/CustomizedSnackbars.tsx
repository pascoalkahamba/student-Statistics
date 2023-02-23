import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import useGlobalStarage from "../hooks/useGlobalStarage";
import Slide, { SlideProps } from "@mui/material/Slide";

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleClick =
    (Transition: React.ComponentType<TransitionProps>) => () => {
      setTransition(() => Transition);
      setOpen(true);
    };

  const {
    global: { open, setOpen },
  } = useGlobalStarage();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={transition}
        key={transition ? transition.name : ""}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          O numero de disciplinas tem de ser maior ou igual a 2
        </Alert>
      </Snackbar>
    </Stack>
  );
}
