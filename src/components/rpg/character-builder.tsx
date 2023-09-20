"use client"
import useSWR from "swr";
import {useEffect, useState} from "react";
import {BuildMapping} from "@/app/api/builds/route";
import {CharacterCard} from "@/components/rpg/character";

import {CharacterForm} from "@/components/rpg/forms/character-form";
import {useStore} from "@/components/rpg/store";
import {AdventureContainer} from "@/components/rpg/forms/adventure-form";

const fetcher = (url: string) => fetch(url).then(res => res.json());


function Container({builds}: { builds: BuildMapping }) {
    const [show, setShow] = useState<boolean>(false);
    const name = useStore(state => state.name);
    const level = useStore(state => state.level);
    const build = useStore(state => state.build);
    const setStats = useStore(state => state.setStats);
    const reset = useStore(state => state.reset);

    useEffect(() => {
        const {strength, agility, wisdom, magic } = builds[build];
        setStats(strength, agility, wisdom, magic);
    }, [build, builds, setStats]);

    return (
        <div className={"flex flex-col space-y-2"}>
            <div className={"flex flex-col lg:flex-row gap-2"}>
                <CharacterCard name={name} level={level} build={!!build ? builds[build] : builds["thief"]}/>
                {!show && <CharacterForm builds={builds} onSubmit={() => setShow(prevState => !prevState)}/>}
            </div>
            {show && <AdventureContainer reset={() => {
                reset();
                setShow(false);
            }}/>}
        </div>

    )
}

export function CharacterBuilder() {
    const {data, isLoading, error} = useSWR("/api/builds", fetcher);
    const reset = useStore(state => state.reset);

    useEffect(() => {
        return () => reset();
    }, [reset]);

    if (isLoading) return null;


    return (
        <div className={"w-full max-w-5xl space-y-2"}>
            <h1 className={"text-3xl md:text-5xl tracking-tight font-extrabold bg-gradient-to-tr from-blue-400 to-blue-800 bg-clip-text text-transparent"}>TestRPG</h1>
            <span
                className={"text-muted-foreground text-lg max-w-[540px]"}>Choose a build and level up your character!</span>
            {!!error && <span>Oops, something went wrong</span>}
            {!isLoading && !!data && (
                <Container builds={data}/>
            )}
        </div>
    )
}