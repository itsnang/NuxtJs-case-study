import { ref, onMounted } from '@nuxtjs/composition-api';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Use ref to store our value
  const storedValue = ref<T>(initialValue);

  // On component mount, fetch the value from localStorage
  onMounted(() => {
    if (process.client) {
      try {
        const item = window.localStorage.getItem(key);
        const parsedValue = item ? JSON.parse(item) : initialValue;
        storedValue.value = parsedValue;
      } catch (error) {
        console.log(error);
      }
    }
  });

  // Return a function to update the value and persist it to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue.value as any) : value;

      // Update the stored value
      storedValue.value = valueToStore as any;

      // Save to local storage
      if (process.client) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}
