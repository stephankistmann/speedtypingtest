import { useEffect, useState } from "react";

export const useCountdown = (start: boolean) => {
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [countdown, start]);

  useEffect(() => {
    if (countdown <= 0) {
      setCountdown(60);
    }
  }, [countdown]);

  return countdown;
};
