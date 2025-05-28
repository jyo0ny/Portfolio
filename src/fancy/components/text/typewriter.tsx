import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils"; // utils 없으면 그냥 제거해도 무방

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  initialDelay?: number;
  waitTime?: number;
  deleteSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorOnType?: boolean;
  cursorChar?: string | React.ReactNode;
  cursorAnimationVariants?: {
    initial: Variants["initial"];
    animate: Variants["animate"];
  };
  cursorClassName?: string;
  onFirstTyped?: () => void;
  onTypingEnd?: () => void;
  onDeleteStart?: () => void;
}

const Typewriter = ({
  text,
  speed = 150,
  initialDelay = 0,
  waitTime = 2000,
  deleteSpeed = 30,
  loop = true,
  // className,
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = "|",
  cursorClassName = "ml-1",
  cursorAnimationVariants = {
    initial: { opacity: 1 },
    animate: {
      opacity: [1, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  },
  onFirstTyped,
  onTypingEnd,
  onDeleteStart,
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [hasTyped, setHasTyped] = useState(false);

  const texts = Array.isArray(text) ? text : [text];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = texts[currentTextIndex];

    const startTyping = () => {
      if (isDeleting) {
        if (displayText === "") {
          setIsDeleting(false);
          if (currentTextIndex === texts.length - 1 && !loop) return;
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          setCurrentIndex(0);
          timeout = setTimeout(() => {}, waitTime);
        } else {
          timeout = setTimeout(() => {
            setDisplayText((prev) => prev.slice(0, -1));
          }, deleteSpeed);
        }
      } else {
        if (currentIndex < currentText.length) {
          timeout = setTimeout(() => {
            const nextChar = currentText[currentIndex];
            setDisplayText((prev) => prev + nextChar);
            setCurrentIndex((prev) => prev + 1);

            if (!hasTyped) {
              setHasTyped(true);
              onFirstTyped?.();
            }
          }, speed);
        } else if (texts.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
            onDeleteStart?.();
          }, waitTime);
          onTypingEnd?.();
        }
      }
    };

    if (currentIndex === 0 && !isDeleting && displayText === "") {
      timeout = setTimeout(startTyping, initialDelay);
    } else {
      startTyping();
    }

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    displayText,
    isDeleting,
    speed,
    deleteSpeed,
    waitTime,
    texts,
    currentTextIndex,
    loop,
    hasTyped,
    onFirstTyped,
    onTypingEnd,
    onDeleteStart,
  ]);

  return (
    <div className="inline whitespace-pre-wrap tracking-tight">
      {displayText.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 1], scale: [0.6, 1.2, 1] }}
          transition={{ duration: 0.3 }}
          style={{
            background: "white",
            textShadow: "0 0 1px rgba(0,0,0,0.1)",
          }}
        >
          {char}
        </motion.span>
      ))}
      {showCursor && (
        <motion.span
          variants={cursorAnimationVariants}
          className={cn(
            cursorClassName,
            hideCursorOnType &&
              (currentIndex < texts[currentTextIndex].length || isDeleting)
              ? "hidden"
              : ""
          )}
          initial="initial"
          animate="animate"
        >
          {cursorChar}
        </motion.span>
      )}
    </div>
  );
};

export default Typewriter;
