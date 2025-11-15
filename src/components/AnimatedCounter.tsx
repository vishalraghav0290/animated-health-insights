import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export const AnimatedCounter = ({
  value,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const spring = useSpring(0, {
    damping: 20,
    stiffness: 100,
  });

  const display = useTransform(spring, (current) =>
    current.toFixed(decimals)
  );

  useEffect(() => {
    spring.set(value);
    
    const unsubscribe = display.on("change", (latest) => {
      setDisplayValue(parseFloat(latest));
    });

    return () => unsubscribe();
  }, [value, spring, display]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {displayValue.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </motion.span>
  );
};
