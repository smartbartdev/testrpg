"use client"

import {useStore} from "@/components/rpg/store";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ChangeEvent, FormEventHandler, ReactNode, useState} from "react";
import {Input} from "@/components/ui/input";
import {Slider} from "@/components/ui/slider";


function Task({title, description, children}: { title: string, description: string, children: ReactNode }) {
    return (
        <section className={"space-y-2 min-h-[100px]"}>
            <div>
                <h3 className={"text-lg font-semibold"}>{title}</h3>
                <p className={"text-sm text-muted-foreground"}>{description}</p>
            </div>
            <div className={"flex items-center justify-between"}>
                {children}
            </div>
        </section>
    )
}


function Clicker() {
    const [clicks, setClicks] = useState<number>(0);
    const increaseLevel = useStore(state => state.increaseLevel);
    const maxClicks = 5;
    const disabled = clicks === maxClicks;

    return (
        <Task title={"Click it!"} description={"Click the button to level up"}>
            <Button
                disabled={disabled}
                onClick={() => {
                    setClicks(prevState => prevState + 1);
                    if (clicks === 4) increaseLevel();
                }}
            >
                Click me {maxClicks - clicks} times
            </Button>
            {clicks === 5 && <span className={"text-lg font-bold text-blue-500"}>Great job! You levelled up</span>}
        </Task>
    )
}

function Uploader() {
    const [value, setValue] = useState<string>("");
    const increaseLevel = useStore(state => state.increaseLevel);
    const uploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        increaseLevel();
    }

    return (
        <Task title={"Upload it!"} description={"Upload any file to level up"}>
            <Input disabled={!!value} type={"file"} className={"w-1/2"} value={value} onChange={uploadHandler}/>
            {!!value && <span className={"text-lg font-bold text-blue-500"}>File selected, level up!</span>}
        </Task>
    )
}

function Typer() {
    const [value, setValue] = useState<string>("");
    const increaseLevel = useStore(state => state.increaseLevel);
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);

        if (event.target.value === "Lorem Ipsum") {
            increaseLevel();
        }
    }

    return (
        <Task title={"Type it!"} description={"Type Lorem Ipsum to level up"}>
            <Input disabled={value === "Lorem Ipsum"} className={"w-1/2"} value={value} onChange={changeHandler}/>
            {value === "Lorem Ipsum" && <span className={"text-lg font-bold text-blue-500"}>Dolar sit amet!</span>}
        </Task>
    )
}

function SliderTask() {
    const [value, setValue] = useState<number[]>([0]);
    const [disabled, setDisabled] = useState<boolean>(false);
    const increaseLevel = useStore(state => state.increaseLevel);

    const onValueChange = (value: number[]) => {
        setValue(value);
        if (value[0] === 100) {
            setDisabled(true);
            increaseLevel();
        }
    }

    return (
        <Task title={"Slide it!"} description={"Slide the slider all the way to the right"}>
            <Slider className={"w-1/2"} disabled={disabled} onValueChange={onValueChange} defaultValue={[0]} max={100} step={1} />
            {value[0] === 100 && <span className={"text-lg font-bold text-blue-500"}>Slid to the next level!</span>}
        </Task>
    )
}


export function AdventureFormContainer() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Adventure time</CardTitle>
                <CardDescription>Complete the tasks below and level up your character</CardDescription>
            </CardHeader>
            <CardContent className={"space-y-4"}>
                <Clicker/>
                <Uploader/>
                <Typer/>
                <SliderTask />
            </CardContent>
        </Card>
    )

}