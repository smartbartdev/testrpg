import {NextResponse} from "next/server";

export type BuildMapping = {
    [key: string]: Build
}

export const characterBuilds: BuildMapping = {
    thief: {
        weapon: "knife",
        upgradedWeapon: "katana",
        armor: "leather_armor",
        upgradedArmor: "silver_armor",
        strength: 1,
        agility: 5,
        wisdom: 5,
        magic: 1,
    },
    knight: {
        weapon: "knife",
        upgradedWeapon: "longsword",
        armor: "partial_plate",
        upgradedArmor: "full_plate",
        strength: 5,
        agility: 2,
        wisdom: 1,
        magic: 1,
    },
    mage: {
        weapon: "staff",
        upgradedWeapon: "staff",
        armor: "cloak",
        upgradedArmor: "silver_armor",
        strength: 1,
        agility: 2,
        wisdom: 4,
        magic: 5,
    },
    brigadier: {
        weapon: "bronze_mace",
        upgradedWeapon: "hammer",
        armor: "brigadier_armor",
        upgradedArmor: "silver_armor",
        strength: 4,
        agility: 4,
        wisdom: 3,
        magic: 1,
    }

}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const buildParam = searchParams.get("build")

    if (!buildParam) return NextResponse.json(characterBuilds);

    const build = characterBuilds[buildParam];

    if (!build) return NextResponse.json({error: `Unknown build '${buildParam}', you may have to purchase the DLC.`});

    return NextResponse.json(build);
}