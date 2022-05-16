export const incrementAction = (value) => ({
  type: "incrementAction",
  payload: value,
});

export const decrementAction = (value) => ({
  type: "decrementAction",
  payload: value,
});

export const resetAction = () => ({
  type: "resetAction",
});
