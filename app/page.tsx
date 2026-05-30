"use client";
import Link from "next/link";
import nextConfig from "../next.config";
import useragents from "@/app/age";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { TiltCard } from "@/components/tilt-card";
import { SpecialText } from "@/components/special-text";
import Rays from "@/components/light-rays";
import { RandomizedText } from "@/components/randomized-text";
import { Signature } from "@/components/signature";
import GradientWaveText from "@/components/gradient-wave-text";

export default function Home() {
    const BASE_PATH = nextConfig.basePath || "";
    const ispc = useragents();

    if (!ispc) {
        return (
            <div className="flex justify-center items-center h-screen text-center text-lg">
                <p>Only Desktop</p>
            </div>
        );
    }

    return (
        <div className="h-full w-full">

            <Rays backgroundColor="var(--background)" style={{ zIndex: 0 }} reach={30} raysColor={{ mode: "multi", color1: "#FFFFFF", color2: "#000000" }} />

            <div className="min-h-[150px] flex flex-col items-center justify-center relative pt-16">

                <div className="flex text-primary">

                    <SpecialText speed={15} className="text-5xl font-geistMono">HI, Im sigma</SpecialText>

                </div>

                <div className="flex flex-col text-primary relative  mt-2 ml-[-48px]">

                    <div className="flex justify-center">

                        <Signature text="Who am I?" color="white" />

                    </div>

                    <div className="flex flex-col">

                        <RandomizedText split="words" className="text-2xl top-4 font-geistMono">17 yo japanese stupid student who loves</RandomizedText>

                        <RandomizedText split="words" className="text-2xl font-geistMono">cars(especially drift machine) & pc.</RandomizedText>

                    </div>

                    <div className="flex flex-col text-3xl font-geistMono gap-10 mt-6">
                        
                        <p className="text-3xl">Games I’m into lately</p>

                    </div>

                    <div className="flex flex-row mt-6 gap-2">

                        <TiltCard
                            tiltLimit={10}
                            scale={1.05}
                            perspective={1200}
                            className="w-[150px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
                        >

                            <div className="flex justify-center items-center">

                                <img
                                    src={`https://images.igdb.com/igdb/image/upload/t_cover_big/co8fu7.webp`}
                                    className="w-full h-full object-cover"
                                ></img>

                                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">

                                    <p className="text-white font-bold">Minecraft</p>

                                </div>

                            </div>

                        </TiltCard>

                        <TiltCard
                            tiltLimit={10}
                            scale={1.05}
                            perspective={1200}
                            className="w-[150px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <div className="flex justify-center items-center">

                                <img
                                    src={`https://images.igdb.com/igdb/image/upload/t_cover_big/co90je.webp`}
                                    className="w-full h-full object-cover"
                                ></img>

                                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">

                                    <p className="text-white font-bold">Zenless Zone Zero</p>

                                </div>

                            </div>

                        </TiltCard>

                        <TiltCard
                            tiltLimit={10}
                            scale={1.05}
                            perspective={1200}
                            className="w-[150px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
                        >

                            <div className="flex justify-center items-center">

                                <img
                                    src={`https://images.igdb.com/igdb/image/upload/t_cover_big/cobzsp.webp`}
                                    className="w-full h-full object-cover"
                                ></img>

                                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">

                                    <p className="text-white font-bold">Neverness to Everness</p>

                                </div>

                            </div>

                        </TiltCard>

                    </div>

                </div>

            </div>

            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4">

                <div className="flex justify-center items-center rounded-lg border backdrop-blur-sm overflow-hidden px-4 py-2 gap-4">

                    <Link href={"https://spell.sh/"}>

                        <GradientWaveText className="font-geistMono">Made with spell ui</GradientWaveText>

                    </Link>

                    <Link href={"https://github.com/519m4/519m4.github.io"}>

                        <SiGithub color='#ffffff' size={24} className="w-[15px]" />

                    </Link>


                </div>

            </div>

        </div>

    );
}