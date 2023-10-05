"use client"

import {useCallback, useEffect, useRef, useState} from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {ClipboardCheck, ClipboardCopy} from "lucide-react";

function Clipboard({apiPath}: { apiPath: string }) {
    const [clicked, setClicked] = useState<boolean>(false);
    let clickedTimeout = useRef<ReturnType<typeof setTimeout>>()

    const setClipBoard = useCallback(async () => {
        clearTimeout(clickedTimeout.current);
        await navigator.clipboard.writeText(`curl -i -H "Accept: application/json" ${apiPath}`);
        setClicked(true);

        clickedTimeout.current = setTimeout(() => setClicked(false), 1500);

    }, [apiPath]);

    return (
        <div className={"flex items-center space-x-2 transition-all"}>
            <button data-clicked={clicked} onClick={setClipBoard}
                    className={"data-[clicked='true']:text-blue-600"}>Click here to copy <span
                className={"font-mono font-bold text-gray-600"}>curl</span> command
            </button>
            {clicked && <ClipboardCheck className={"h-4 w-4 text-blue-600"}/>}
            {!clicked && <ClipboardCopy className={"h-4 w-4"}/>}
        </div>
    )
}


export function ApiExplainer() {
    const [apiPath, setApiPath] = useState<string>("");

    useEffect(() => {
        const protocol = window.location.protocol
        const host = window.location.host
        setApiPath(`${protocol}//${host}/api/builds`);
    }, []);


    return (
        <div className={"-m-2 rounded-xl bg-gray-900/5 p-2 lg:-m-4 lg:rounded-2xl lg:p-4"}>

            <Card className={"text-left "} data-testid={"api-explainer"}>
                <CardHeader className={"text-left"}>
                    <CardTitle className={"text-3xl font-bold text-blue-500"}>
                        API
                    </CardTitle>
                    <CardDescription>TestRPG API endpoints</CardDescription>
                </CardHeader>
                <CardContent>
                    <h4 className={"text-xl font-semibold text-blue-400"}>GET: {apiPath}</h4>
                    <p>Accepts an optional <span
                        className={"font-mono text-sm font-bold text-gray-600"}>build</span> parameter.</p>
                    <p>This parameter has the following valid values: <span
                        className={"font-mono text-sm font-bold text-gray-600"}>thief, knight, mage, brigadier</span>
                    </p>
                </CardContent>
                <CardFooter className={"text-sm"}>
                    <Clipboard apiPath={apiPath}/>
                </CardFooter>
            </Card>
        </div>
    )
}