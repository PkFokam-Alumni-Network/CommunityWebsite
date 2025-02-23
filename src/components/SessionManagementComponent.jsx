import React, { useEffect, useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useMediaQuery,
  useTheme,
  DialogContentText,
} from "@mui/material";
import { logout } from "../features/authSlice";
import config from "../config";

const timeout = config.token_ttl;
const promptBeforeIdle = 10_000;
// const promptBeforeIdle = 60_000;

const SessionManager = () => {
  const [state, setState] = useState("Active");
  const [remainingTime, setRemainingTime] = useState(timeout);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  console.log("+++ timeout: ", remainingTime);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const onIdle = () => {
    setState("Idle");
    setOpen(false);
    handleLogout();
  };

  const onActive = () => {
    setState("Active");
    setOpen(false);
  };

  const onPrompt = () => {
    setState("Prompted");
    setOpen(true);
  };

  const { getRemainingTime, activate } = useIdleTimer({
    onIdle,
    onActive,
    onPrompt,
    timeout,
    promptBeforeIdle,
    throttle: 500,
    crossTab: true,
    leaderElection: true,
    syncTimers: 200,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(Math.ceil(getRemainingTime() / 1000));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

  const handleClose = () => {
    activate();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullScreen={fullScreen}
    >
      <DialogTitle id="alert-dialog-title">
        {"Still There? Your Session is Expiring"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Your session will expire in {remainingTime} seconds. Do you want to
          stay signed in?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Stay Signed In
        </Button>
        <Button onClick={handleLogout}>Logout</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SessionManager;
