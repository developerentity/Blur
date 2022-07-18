import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { removeSnackbar } from "../app/slices/notifierSlice";
import { INotification } from "../interface/interface";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { DEFAULT_MESSAGE_TEXTS } from "../constants /constants";

let displayed: Array<number | string> = [];

const Notifier = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector((store) => store.notifier.notifications);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id: string | number) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: string | number) => {
    displayed = [...displayed.filter((key) => id !== key)];
  };

  useEffect(() => {
    notifications?.forEach(
      ({
        message,
        messageType,
        key,
        options = {},
        dismissed = false,
      }: INotification) => {
        if (dismissed) {
          closeSnackbar(key);
          return;
        }

        if (key && displayed.includes(key)) return;

        message = messageType
          ? DEFAULT_MESSAGE_TEXTS[messageType]
          : message || "";

        enqueueSnackbar(message, {
          key: key,
          ...options,
          onClose: (event, reason, thisKey) => {
            if (options.onClose) {
              options.onClose(event, reason, thisKey);
            }
          },
          onExited: (event, thisKey) => {
            // remove this notification from redux store
            dispatch(removeSnackbar({ key: thisKey }));
            removeDisplayed(thisKey);
          },
        });

        // keep track of notifications that we've displayed
        key && storeDisplayed(key);
      }
    );
    console.log(displayed);
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);

  return null;
};

export default Notifier;
