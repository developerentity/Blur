import loadingSlice, { setLoading } from "../slices/loadingSlice";

const initialStateMock = {
  mainLoading: false,
}; 

describe("loading slice", () => {
  it("should return default state when passed an empty action", () => {
    const result = loadingSlice(undefined, { type: "" });

    expect(result.mainLoading).toBeFalsy();
  });

  it("should turn on loading flag", () => {
    const action = { type: setLoading.type, payload: true };
    const result = loadingSlice(initialStateMock, action);

    expect(result.mainLoading).toBeTruthy();
  });

  it("should turn off loading flag", () => {
    const action = { type: setLoading.type, payload: false };
    const result = loadingSlice(initialStateMock, action);

    expect(result.mainLoading).toBeFalsy()
  })
});
