"use client";

import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Star } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
  type SpringOptions,
} from "motion/react";

import { SlidingNumber } from "../sliding-number";
import { cn } from "@/lib/utils";

type FormatNumberResult = {
  number: string[];
  unit: string;
};

function formatNumber(
  num: number,
  formatted: boolean
): FormatNumberResult {
  if (!formatted) {
    return {
      number: num.toLocaleString("en-US").split(","),
      unit: "",
    };
  }

  if (num < 1000) {
    return {
      number: [num.toString()],
      unit: "",
    };
  }

  const units = ["k", "M", "B", "T"];

  let value = num;
  let unitIndex = 0;

  while (value >= 1000 && unitIndex < units.length - 1) {
    value /= 1000;
    unitIndex++;
  }

  return {
    number: [Math.floor(value).toString()],
    unit: units[unitIndex],
  };
}

type GitHubStarsButtonProps = Omit<
  HTMLMotionProps<"a">,
  "ref"
> & {
  username: string;
  repo: string;
  transition?: SpringOptions;
  formatted?: boolean;
};

function GitHubStarsButton({
  username,
  repo,
  transition = {
    stiffness: 90,
    damping: 50,
  },
  formatted = false,
  className,
  ...props
}: GitHubStarsButtonProps) {
  const motionValue = useMotionValue(0);

  const springValue = useSpring(
    motionValue,
    transition
  );

  const numberRef = useRef(0);
  const completedRef = useRef(false);

  const [stars, setStars] = useState(0);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [particles, setParticles] = useState(false);
  const [, forceRender] = useState(0);

  const repoUrl = useMemo(
    () => `https://github.com/${username}/${repo}`,
    [username, repo]
  );

  useEffect(() => {
    let cancelled = false;

    async function loadStars() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${username}/${repo}`
        );

        if (!response.ok) {
          if (!cancelled) {
            setStars(0);
          }
          return;
        }

        const data = await response.json();

        if (
          !cancelled &&
          typeof data.stargazers_count === "number"
        ) {
          setStars(data.stargazers_count);
        }
      } catch {
        if (!cancelled) {
          setStars(0);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadStars();

    return () => {
      cancelled = true;
    };
  }, [username, repo]);

  const showParticles = useCallback(() => {
    setParticles(true);

    window.setTimeout(() => {
      setParticles(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const unsubscribe = springValue.on(
      "change",
      (latest: number) => {
        const value = Math.round(latest);

        if (numberRef.current !== value) {
          numberRef.current = value;
          forceRender((current) => current + 1);
        }

        if (
          stars > 0 &&
          value >= stars &&
          !completedRef.current
        ) {
          completedRef.current = true;
          setCompleted(true);
          showParticles();
        }
      }
    );

    return unsubscribe;
  }, [springValue, stars, showParticles]);

  useEffect(() => {
    if (stars > 0) {
      motionValue.set(stars);
    }
  }, [motionValue, stars]);

  const fillPercentage =
    stars > 0
      ? Math.min(
          100,
          (numberRef.current / stars) * 100
        )
      : 0;

  const currentNumber = formatNumber(
    numberRef.current,
    formatted
  );

  const ghostNumber = formatNumber(
    stars,
    formatted
  );

  const renderNumber = (
    segments: string[],
    unit: string,
    ghost: boolean
  ) => {
    return (
      <span
        className={cn(
          "flex items-center gap-px",
          ghost
            ? "invisible"
            : "absolute left-0 top-0"
        )}
      >
        {segments.map((segment, segmentIndex) => (
          <Fragment key={segmentIndex}>
            {Array.from(segment).map(
              (digit, digitIndex) => (
                <SlidingNumber
                  key={`${segmentIndex}-${digitIndex}`}
                  number={Number(digit)}
                />
              )
            )}
          </Fragment>
        ))}

        {formatted && unit && (
          <span className="leading-[1]">
            {unit}
          </span>
        )}
      </span>
    );
  };

  const handleClick = useCallback(
    (
      event: React.MouseEvent<HTMLAnchorElement>
    ) => {
      event.preventDefault();

      showParticles();

      window.setTimeout(() => {
        window.open(
          repoUrl,
          "_blank",
          "noopener,noreferrer"
        );
      }, 500);
    },
    [repoUrl, showParticles]
  );

  if (loading) {
    return null;
  }

  return (
    <motion.a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        "relative cursor-pointer whitespace-nowrap rounded-lg border-2 border-black/30 text-sm font-medium transition-colors dark:border-white/30",
        className
      )}
      {...props}
    >
      <div className="flex h-10 items-center gap-2 px-4">
        <svg
          role="img"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="size-[18px] shrink-0"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>

        <span className="relative inline-flex">
          {renderNumber(
            ghostNumber.number,
            ghostNumber.unit,
            true
          )}

          {renderNumber(
            currentNumber.number,
            currentNumber.unit,
            false
          )}
        </span>

        <div className="relative size-[18px] shrink-0">
          <Star
            size={18}
            aria-hidden="true"
            className="fill-muted-foreground text-muted-foreground"
          />

          <Star
            size={18}
            aria-hidden="true"
            className="absolute left-0 top-0 fill-yellow-500 text-yellow-500"
            style={{
              clipPath: `inset(${
                100 -
                (completed
                  ? fillPercentage
                  : Math.max(
                      0,
                      fillPercentage - 10
                    ))
              }% 0 0 0)`,
            }}
          />

          <AnimatePresence>
            {particles && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{
                    scale: 1.2,
                    opacity: 0,
                  }}
                  animate={{
                    scale: [1.2, 1.8, 1.2],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{
                    scale: 1,
                    opacity: 0,
                  }}
                  animate={{
                    scale: [1, 1.5],
                    opacity: [0.8, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />

                {Array.from({
                  length: 6,
                }).map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute size-1 rounded-full bg-yellow-500"
                    initial={{
                      x: "50%",
                      y: "50%",
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: `calc(50% + ${
                        Math.cos(
                          (index * Math.PI) / 3
                        ) * 30
                      }px)`,
                      y: `calc(50% + ${
                        Math.sin(
                          (index * Math.PI) / 3
                        ) * 30
                      }px)`,
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.a>
  );
}

export {
  GitHubStarsButton,
  type GitHubStarsButtonProps,
};