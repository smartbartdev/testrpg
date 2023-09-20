import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {useStore} from "@/components/rpg/store";
import {ProgressBar} from "@/components/rpg/progress-bar";

export interface CharacterProps {
    name: string;
    level: number;
    build: Build;
}

interface CharacterStatsProps {
    level: number;
    build: Build;
}

function CharacterImage({src, alt}: {src: string, alt: string}) {
    return (
        <Image src={src} alt={alt} width={240} height={320} className={"absolute"} />
    )
}

function CharacterImageContainer({level, build}: CharacterStatsProps) {
    return (
        <div className={"relative h-[180px] w-[240px]"}>
            <CharacterImage src={"/sprites/base_scaled_2x.png"} alt={"The base character image"} />
            {level > 1 && level <= 3 && <CharacterImage src={`/sprites/${build.weapon}_scaled_2x.png`} alt={"The characters' base weapon"} />}
            {level > 2 && level <= 4 && <CharacterImage src={`/sprites/${build.armor}_scaled_2x.png`} alt={"The characters' base armor"} />}
            {level > 3 && <CharacterImage src={`/sprites/${build.upgradedWeapon}_scaled_2x.png`} alt={"The characters' upgraded weapon"} />}
            {level > 4 && <CharacterImage src={`/sprites/${build.upgradedArmor}_scaled_2x.png`} alt={"The characters' upgraded armor"} />}
        </div>
    )
}

function CharacterStats({level, build}: CharacterStatsProps) {
    return (
        <section className={"space-y-2 w-1/2"}>
            <h3 className={"font-semibold"}>Stats</h3>
            <ProgressBar
                label={"Strength"}
                value={level}
                total={5}
            />
            <ProgressBar
                label={"Agility"}
                value={level}
                total={5}
            />
            <ProgressBar
                label={"Wisdom"}
                value={level}
                total={5}
            />
        </section>
    )
}

export function CharacterCard(props: CharacterProps) {
    const buildName = useStore(state => state.build);
    const maxLevel = 5;

    return (
        <Card className={"w-full lg:w-1/2"}>
            <CardHeader>
                <CardTitle>{props.name || "Your character"}</CardTitle>
                    <CardDescription>
                        {!buildName && `Level ${props.level}`}
                        {!!buildName && `A level ${props.level} ${buildName}`}
                    </CardDescription>
            </CardHeader>
            <CardContent className={"flex"}>
                <CharacterImageContainer {...props} />
                <CharacterStats {...props} />
            </CardContent>
            <CardFooter className={"flex items-center justify-between"}>
                <ProgressBar
                    key={"progress-level"}
                    label={"Level"}
                    value={props.level}
                    total={maxLevel}
                />
            </CardFooter>
        </Card>
    )
}
