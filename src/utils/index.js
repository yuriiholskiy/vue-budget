export const uuid = () => '_' + Math.random().toString(16).slice(2);

export const setToStorage = (key, value) => window.localStorage.setItem(key, value);
export const getFromStorage = (key) => window.localStorage.getItem(key);
export const removeFromStorage = (key) => window.localStorage.removeItem(key);