import {NextResponse} from "next/server";

interface BuildMapping {
    [key: string]: Build
}

const characterBuilds: BuildMapping = {
    thief: {
        weapon: "knife",
        upgradedWeapon: "katana",
        armor: "leather_armor",
        upgradedArmor: "silver_armor",
    },
    knight: {
        weapon: "knife",
        upgradedWeapon: "longsword",
        armor: "partial_plate",
        upgradedArmor: "full_plate",
    },
    mage: {
        weapon: "staff",
        upgradedWeapon: "staff",
        armor: "cloak",
        upgradedArmor: "silver_armor",
    },
    brigadier: {
        weapon: "bronze_mace",
        upgradedWeapon: "hammer",
        armor: "brigadier_armor",
        upgradedArmor: "silver_armor",
    }

}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const buildParam = searchParams.get("build")

    if (!buildParam) return NextResponse.json(characterBuilds);

    const build = characterBuilds[buildParam];

    if (!build) return NextResponse.json({error: `Unknown build '${buildParam}', you have not purchased the DLC`});

    return NextResponse.json(build);
}