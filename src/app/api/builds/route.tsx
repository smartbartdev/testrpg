import {NextResponse} from "next/server";
import {characterBuilds} from "@/app/api/builds/character-builds";

export type BuildMapping = {
    [key: string]: Build
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const buildParam = searchParams.get("build")

    if (!buildParam) return NextResponse.json(characterBuilds);

    const build = characterBuilds[buildParam];

    if (!build) return NextResponse.json({error: `Unknown build '${buildParam}', you may have to purchase the DLC.`});

    return NextResponse.json(build);
}