export const createLocalStorageForFirstRun = () => {
  if (!localStorage.getItem("users"))
    localStorage.setItem("users", JSON.stringify([]));
};
