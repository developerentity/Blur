import { INotification } from "../../interface/interface";
import notifierSlice, {
  enqueueSnackbar,
  closeSnackbar,
  removeSnackbar,
} from "../slices/notifierSlice";

const initialStateMock = {
  notifications: [],
};

describe("notifier slice", () => {
  it("should return return default state when passed an empty action", () => {
    const result = notifierSlice(initialStateMock, { type: "" });

    expect(result.notifications).toHaveLength(0);
  });

  it("should add one unique item to notification array", () => {
    const result = notifierSlice(initialStateMock, {
      type: enqueueSnackbar.type,
      payload: { message: "add test" },
    });

    expect(result.notifications).toHaveLength(1);
  });

  it("should remove one exact item from notification array", () => {
    const result1 = notifierSlice(initialStateMock, {
      type: enqueueSnackbar.type,
      payload: { message: "remove test" },
    });

    const key = result1.notifications[0].key;

    const result2 = notifierSlice(result1, {
      type: removeSnackbar.type,
      payload: { key },
    });

    expect(
      result2.notifications.some((el: INotification) => el.key === key)
    ).toBeFalsy();
  });

  it("should close snackbar", () => {
    const result1 = notifierSlice(initialStateMock, {
      type: enqueueSnackbar.type,
      payload: { message: "close test" },
    });

    const key = result1.notifications[0].key;

    const result2 = notifierSlice(result1, {
      type: closeSnackbar.type,
      payload: { key },
    });

    expect(
      result2.notifications.find((el: INotification) => el.key === key)
        ?.dismissed
    ).toBeTruthy();
  });
});
