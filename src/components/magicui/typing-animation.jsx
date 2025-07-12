"use client";
import { cn } from "@/lib/utils";
import { useStoryStore } from "@/store";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function TypingAnimation({
  children,
  className,
  duration = 100,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  ...props
}) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const { typing, setTyping, currStory } = useStoryStore();
  let typingEffect = null;
  const elementRef = useRef(null);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started) return;

    setTyping(true);
    let i = 0;
    typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        setTyping(false);
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      setTyping(false);
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  useEffect(() => {
    if (!typing) {
      if (typingEffect) clearInterval(typingEffect);
      setStarted(false);
      setDisplayedText(children);
      setTyping(false);
    }
  }, [typing]);

  useEffect(() => {
    setStarted(true);
  }, [children]);

  return (
    <MotionComponent ref={elementRef} className={cn("", className)} {...props}>
      {displayedText}
    </MotionComponent>
  );
}
