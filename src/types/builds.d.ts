declare type Build = {
    weapon: string;
    upgradedWeapon: string;
    armor: string;
    upgradedArmor: string;
}

declare interface CharacterStore {
    name: string;
    level: number;
    build: string | null;
    setName: (name: string) => void;
    setLevel: (level: number) => void;
    setBuild: (build: string) => void;
    increaseLevel: () => void;
}