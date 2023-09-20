declare type Build = {
    weapon: string;
    upgradedWeapon: string;
    armor: string;
    upgradedArmor: string;
    strength: number;
    agility: number;
    wisdom: number;
    magic: number;
    berserk: boolean;
}

declare interface CharacterStore {
    name: string;
    level: number;
    build: string;
    strength: number;
    agility: number;
    wisdom: number;
    magic: number;
    berserk: boolean;
    setName: (name: string) => void;
    setLevel: (level: number) => void;
    setBuild: (build: string) => void;
    setStats: (strength: number, agility: number, wisdom: number, magic: number) => void;
    increaseLevel: () => void;
    activateBerserk: () => void;
    reset: () => void;
}