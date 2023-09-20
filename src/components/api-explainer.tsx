"use client"

import Link from "next/link";
import {useEffect, useState} from "react";

export function ApiExplainer() {
    const [apiPath, setApiPath] = useState<string>("");

    useEffect(() => {
        const protocol = window.location.protocol
        const host = window.location.host
        setApiPath(`${protocol}//${host}/api/builds`);
    }, []);


    return (
        <p className={"text-muted-foreground text-lg"}>
            This app also exposes an API at <Link href={apiPath} className={"text-blue-500"}>{apiPath}</Link>, which accepts <strong>GET</strong> requests with an optional param &apos;build&apos;.
            <br/>
            Valid values for this parameter are <strong>thief</strong>, <strong>knight</strong>, <strong>brigadier</strong> and <strong>mage</strong>.
        </p>
    )
}