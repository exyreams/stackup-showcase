import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const COUNTDOWN_FROM = "12/31/2024";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Countdown = () => {
  const intervalRef = useRef(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  return (
    <div className="rounded-md bg-stackup-gray p-4 dark:bg-stackup-gray-text/80">
      <div className="mx-auto flex w-full max-w-5xl items-center divide-x-2">
        <CountdownItem num={remaining.days} text="days" />
        <CountdownItem num={remaining.hours} text="hours" />
        <CountdownItem num={remaining.minutes} text="minutes" />
        <CountdownItem num={remaining.seconds} text="seconds" />
      </div>
    </div>
  );
};

const CountdownItem = ({ num, text }) => (
  <div className="flex h-24 w-1/4 flex-col items-center justify-center gap-1 border-stackup-gray-text/80 md:h-36 md:gap-2">
    <div className="relative w-full overflow-hidden text-center">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={num}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ ease: "backIn", duration: 0.75 }}
          className="xl:text-7xl block text-2xl font-medium text-black lg:text-6xl md:text-4xl"
        >
          {num}
        </motion.span>
      </AnimatePresence>
    </div>
    <span className="text-xs font-light text-black lg:text-base md:text-sm">
      {text}
    </span>
  </div>
);

export default Countdown;
