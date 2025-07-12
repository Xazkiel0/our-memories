"use client";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import StoriesJson from "@/story.json" assert { type: "json" };
import { useStoryStore } from "@/store";
import useSound from "use-sound";
import { toast } from "sonner";

const Intro = () => {
  const { theme, setTheme } = useTheme();
  const [lightOn] = useSound("/sfx/light-switch-on.mp3");
  //   const [lightOff] = useSound("/sfx/light-switch-off.mp3");
  const [isLightOn, setIsLightOn] = useState(0);
  const stories = StoriesJson.stories;
  const {
    typing,
    setTyping,
    currStory,
    setCurrStory,
    getTaskById,
    getTaskIsCompleted,
    setTaskIsCompleted,
  } = useStoryStore();

  const [storyIndex, setStoryIndex] = useState(1);

  const handleNextStory = () => {
    if (storyIndex < stories.length - 1) {
      setStoryIndex((prev) => prev + 1);
      setCurrStory(stories[storyIndex]);
    }
  };

  useEffect(() => {
    setTheme("dark");
    setCurrStory(stories[0]);
  }, []);

  return (
    <>
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 z-0">
        <div className="absolute z-1 w-full px-8 sm:px-12">
          <Card className="mx-auto max-w-[800px] max-h-96 p-6">
            <div className="flex flex-col gap-4">
              <TypingAnimation className="text-lg">
                {currStory?.text}
              </TypingAnimation>
              <div className="flex flex-row justify-end">
                <Button onClick={handleNextStory} disabled={typing}>
                  Next
                </Button>
                {typing && (
                  <Button onClick={() => setTyping(false)} className="ml-2">
                    Skip
                  </Button>
                )}
              </div>
            </div>
          </Card>
          <div className="flex flex-col items-center justify-center text-primary mt-8">
            {!typing && (
              <>
                <span className="text-lg text-primary font-bold text-center mb-4">
                  {getTaskById(currStory?.id)?.text}
                </span>
                <div className="flex flex-col">
                  {getTaskById(currStory?.id)?.actions.map((act, optIdx) => {
                    if (act.type == "button") {
                      return (
                        <Button
                          className="z-10"
                          onClick={() => {
                            setTheme("light");
                            lightOn();
                            if (isLightOn < 1) {
                              setIsLightOn((prev) => prev + 1);
                              toast("Task completed!", {
                                description: "Selamat Ulang Tahun🎉🎉",
                              });
                            }
                          }}
                          key={optIdx}
                        >
                          {act.text}
                        </Button>
                      );
                    }
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
