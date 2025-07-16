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
import React, { useEffect, useMemo, useRef, useState } from "react";
import StoriesJson from "@/story.json" assert { type: "json" };
import { useStoryStore } from "@/store";
import useSound from "use-sound";
import { toast } from "sonner";
import { explodeConfetti } from "@/lib/utils";
import ReactPlayer from "react-player";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Italianno, Oooh_Baby } from 'next/font/google'



const envelopeFont = Italianno({
  weight: '400',
  subsets: ['latin'],
})


const Intro = () => {
  const { theme, setTheme } = useTheme();
  const [giftime, setGiftime] = useState(false);
  const [sharkGif, setSharkGif] = useState(false);
  const [cakeGif, setCakeGif] = useState(false);

  const [openEnvelope, setOpenEnvelope] = useState(false);
  const [musicLoaded, setMusicLoaded] = useState([
    {
      name: "lightOn",
      loaded: false,
    },
    {
      name: "birthdayMusic",
      loaded: false,
    },
  ]);

  const allMusicLoaded = useMemo(() => {
    return musicLoaded.every((music) => music.loaded);
  }, [musicLoaded]);

  const [lightOn] = useSound("/sfx/light-switch-on.mp3", {
    soundEnabled: true,
    onload() {
      setMusicLoaded((prev) => prev.map((music) => {
        if (music.name === "lightOn") {
          return {
            ...music,
            loaded: true,
          };
        }
        return music;
      }));
    },
  });
  const [birthdayMusic] = useSound("/sfx/birthday-background-music-low.mp3", {
    soundEnabled: true,
    onload() {
      setMusicLoaded((prev) => prev.map((music) => {
        if (music.name === "birthdayMusic") {
          return {
            ...music,
            loaded: true,
          };
        }
        return music;
      }));
    },
    volume: 1
  });
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
    } else if (storyIndex == stories.length - 1) {
      setStoryIndex((prev) => prev + 1);

    }
  };

  useEffect(() => {
    setTheme("dark");
    setCurrStory(stories[0]);
  }, []);

  const listTaskHandler = {
    "11": () => {
      setTheme("light");
      lightOn();
      if (isLightOn < 1) {
        birthdayMusic();
        setIsLightOn((prev) => prev + 1);
        toast("Task completed!", {
          description: "Selamat Ulang Tahun🎉🎉",
        });
        setTaskIsCompleted(currStory?.id);
      }
      explodeConfetti({ duration: 10 });
    },
    "41": () => {
      setGiftime(true);
      setSharkGif(true);
    }
  }


  return (
    <>
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 z-0">
        <Dialog
          open={openEnvelope}
          onOpenChange={setOpenEnvelope}
        >
          <DialogContent className="sm:max-w-[825px] max-h-[90dvh] overflow-y-scroll bg-[url('/paper.jpg')] bg-repeat-space" style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255, 255, 255, 0.1) transparent"
          }}>
            <DialogHeader>
              <DialogTitle className={`text-center text-3xl font-bold ${envelopeFont.className}`}>To My Love Melinda (Unutt)</DialogTitle>
              <DialogDescription className={`text-3xl font-semibold ${envelopeFont.className}`}>
                <TextAnimate animation="blurInUp" by="word" className="text-left tracking-wider mt-6" duration={10} as={"p"} once>
                  Hari ini adalah hari yang begitu berarti karena dunia pernah menghadiahkan seseorang sebaik dan setulus dirimu untuk hadir di dunia ini. Dan aku adalah orang yang paling beruntung karena bisa menemani langkahmu, walau tidak selalu seperti yang kamu inginkan.
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="word" className="text-left tracking-wider mt-6" duration={10} as={"p"} once>
                  Di hari ulang tahunmu ini, aku ingin kamu tahu satu hal yang paling penting:aku sayang bukan hanya karena siapa dirimu, tapi juga karena siapa aku saat bersamamu.
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="word" className="text-left tracking-wider mt-6" duration={10} as={"p"} once>
                  Aku sadar, selama ini mungkin aku tidak selalu seperti yang kamu harapkan untuk menjadi pasangan yang ideal. Ada banyak hal yang aku belum bisa penuhi. Kadang caraku mencintaimu masih belum cukup memuaskan keinginganmu. Kadang aku terlalu sibuk mengatasi diriku sendiri sampai lupa bahwa kamu juga perlu ditenangkan. Maaf jika ada sikapku, kata-kataku, atau bahkan diamku yang membuatmu jengkel, lelah, atau bertanya-tanya.
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="word" className="text-left tracking-wider mt-6" duration={10} as={"p"} once>
                  Tapi percayalah, aku sedang berusaha. Aku sedang berjuang satu per satu menghadapi semua kekacauan yang ada di dalam diriku, agar suatu hari aku bisa berjuang demi dirimu dan mungkin bukan hanya kamu akan tetapi keluargaku nantinya. Bukan hanya untuk hari ini, tapi hari-hari yang akan kita lalui.
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="word" className="text-left tracking-wider mt-6" duration={10} as={"p"} once>
                  Terima kasih karena sudah bertahan. Terima kasih karena terus memilihku, walau aku masih penuh kekurangan dan belum sepenuhnya selesai dengan masalahku.Terima kasih karena kamu tetap jadi tempat pulang.
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="word" className="text-left tracking-wider mt-6" duration={10} as={"p"} once>
                  Hari ini, aku tidak hanya merayakan ulang tahunmu. Aku juga merayakan harapan harapan bahwa ke depan, kita bisa lebih baik lagi, untukmu, dan demi kita.
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="word" className="text-left tracking-wider mt-20" duration={2} as={"p"}>
                  Selamat ulang tahun, Unut.
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="word" className="text-left tracking-wider mt-6" duration={14} as={"p"} once>
                  Semoga kamu mendapatkan kebahagiaanmu dan jika suatu saat ada kondisi yang tidak kamu harapkan, aku ingin kamu sukses dengan masa depan yang kamu capai dengan semangat dan kerja kerasmu. Terima Kasih banyak yaaa dan maaf selama ini aku sibuk juga karna ngerjain hadiah ini karena aku perbarui terus tampilan sama animasinya.
                </TextAnimate>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {giftime && (
          <div className="absolute w-full h-full z-[2] overflow-hidden">
            <div className="flex h-full w-full max-h-dvh max-w-[100dvw] justify-center items-center">
              <AnimatePresence>
                {sharkGif && (
                  <motion.div
                    initial={{ opacity: 0, y: 80, scale: 0 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -800, y: 0 }}
                    transition={{ duration: 1 }}
                    onAnimationStart={() => {
                      setTimeout(() => {
                        setSharkGif(false);
                        setCakeGif(true);
                      }, 4000);
                    }}
                  >
                    <ReactPlayer
                      src="/video/hbd.mp4"
                      className="w-[900px] object-contain"
                      height={400}
                      loop={true}
                      autoPlay={true}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {(cakeGif && !openEnvelope) && (
                  <motion.div
                    className={`relative`}
                    initial={{ x: 800, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ x: -800, opacity: 0 }}
                  >
                    <img src="/cake.svg"
                      className={`h-[500px] object-contain`} />
                    <motion.img
                      src="/envelope.svg"
                      className="h-[90px] object-contain absolute bottom-24 sm:bottom-12 right-[20%]"
                      initial={{ scale: 1, rotateX: 30, rotateY: -20 }}
                      whileHover={{ scale: 1.2, rotateX: 0, rotateY: -5 }}
                      onClick={() => setOpenEnvelope(true)}
                    />
                    <motion.img
                      src="/knife.png"
                      className="h-[90px] object-contain absolute bottom-24 sm:bottom-0 left-[21%]"
                      initial={{ scale: 1, rotateZ: -70 }}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => {
                        setGiftime(false);
                        setTaskIsCompleted(currStory?.id);
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
        <div className="absolute z-[1] w-full px-8 sm:px-12">
          <Card className="mx-auto max-w-[800px] max-h-96 p-6">
            <div className="flex flex-col gap-4">
              <TypingAnimation className="text-lg">
                {currStory?.text}
              </TypingAnimation>
              <div className="flex flex-row justify-end">
                {storyIndex <= stories.length && (
                  <Button onClick={handleNextStory} disabled={(() => {
                    let onTask = getTaskById(currStory?.id)
                    let taskNotCompleted = true

                    if (onTask) {
                      taskNotCompleted = !getTaskIsCompleted(currStory?.id)
                      if (typing || taskNotCompleted) {
                        return true
                      } else {
                        return false
                      }
                    } else {
                      if (typing) return true
                    }

                    return false
                  })()}>
                    Next
                  </Button>
                )}
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
                          disabled={!allMusicLoaded}
                          onClick={listTaskHandler[`${currStory?.id}${act.id}`]}
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
