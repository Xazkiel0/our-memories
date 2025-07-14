import confetti from "canvas-confetti";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface BirthdayCountdownProps {
  releaseDate: Date;
  callbackProcess?: (today: Date, releaseDate: Date) => void;
  callbackWhenDone?: (today: Date, releaseDate: Date) => void;
  executingTime?: number;
  intervalCheckTime?: number;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const birthdayCountdown = ({
  releaseDate,
  callbackProcess,
  callbackWhenDone,
  executingTime = 0,
  intervalCheckTime = 5,
}: BirthdayCountdownProps) => {
  const now = new Date();
  setTimeout(() => {
    console.log("Running interval...");
    let cdInterval = setInterval(() => {
      const today = new Date();
      console.log("Checking release date...");
      callbackProcess && callbackProcess(today, releaseDate);
      console.log(
        `Is released: ${today} ${releaseDate} : ${
          today >= releaseDate
        } ${today.getSeconds()}`,
      );
      if (today >= releaseDate) {
        console.log("Release date reached, clearing interval.");
        cdInterval && clearInterval(cdInterval);
        callbackWhenDone && callbackWhenDone(today, releaseDate);
      }
    }, 1000 * intervalCheckTime); // Check every minute
  }, (executingTime ? executingTime : 60 - now.getSeconds()) * 1000);
};

export const explodeConfetti = ({ duration = 5 }: { duration?: number }) => {
  duration = duration * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const interval = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
};
