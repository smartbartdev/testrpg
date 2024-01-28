import {NextResponse} from "next/server";
import {characterBuilds} from "@/app/api/builds/character-builds";
import {z} from "zod";
import {Response} from "next/dist/compiled/@edge-runtime/primitives";
import {formatIssue} from "@/app/api/error-utils";

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

export async function POST(request: Request) {
    const schema = z.object({
        build: z.object({
            name: z.string().refine(name => {
                switch (name.toLowerCase()) {
                    case "mage":
                        return false;
                    case "brigadier":
                        return false;
                    case "thief":
                        return false;
                    case "knight":
                        return false;
                    default:
                        return true;
                }
            }, "a build with this name already exists"),
            strength: z.number().min(1, "Strength should be at least 1").max(10, "Strength can't be higher than 10"),
            agility: z.number().min(1, "Agility should be at least 1").max(10, "Agility can't be higher than 10"),
            wisdom: z.number().min(1, "Wisdom should be at least 1").max(10, "Wisdom can't be higher than 10"),
            magic: z.number().min(1, "Magic should be at least 1").max(10, "Magic can't be higher than 10"),
        }).refine(build => {
            return (build.agility + build.magic + build.wisdom + build.strength) <= 10;
        }, "Total value of stats cannot be more than 10")
    })
    const data = await request.json();
    const result = schema.safeParse(data);

    if (!result.success) {
        const {errors: issues} = result.error;

        return NextResponse.json({
            success: false,
            error: issues.map(issue => formatIssue(issue))
        }, {
            status: 400,
        })
    }

    return NextResponse.json({success: true, result: data}, {status: 201})
}