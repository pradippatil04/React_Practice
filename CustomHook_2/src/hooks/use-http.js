import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig,applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        //'https://reacthooks-e5508-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'
        requestConfig.URL,
        {
          method:  requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  },[]);
  return { isLoading, error, sendRequest };
};

export default useHttp;
