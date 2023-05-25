import { useState, useCallback } from "react";
import { authErrorHandler } from "../utils/authErrorHandler";

export interface IRequestConfig {
  url: string;
  method?: "POST" | "PUT" | "GET" | "DELETE";
  headers?: { [key: string]: string };
  body?: any;
}

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const sendRequest = useCallback(
    async (
      requestConfig: IRequestConfig,
      applyData: <Type>(data: Type) => void
    ) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        const data = await response.json();

        if (!response.ok) {
          const errorMessage = authErrorHandler(data.error.message);
          throw new Error(errorMessage);
        }

        applyData(data);
      } catch (error: any) {
        setError(error);
      }
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
