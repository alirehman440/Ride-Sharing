const LOGIN_CHECK = "user_login_status";

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem(LOGIN_CHECK, value);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem(LOGIN_CHECK);
    if (value !== null) {
      // console.log("value is there" + value);
      return "value is there" + value;
    } else {
      // console.log("value is null");
      return "value is null";
    }
  } catch (e) {
    // error reading value
  }
};

const removeData = async () => {
  try {
    await AsyncStorage.removeItem(LOGIN_CHECK);
  } catch (e) {
    // saving error
  }
};
export { removeData, getData, storeData };
