import {create} from "zustand";

export const useStore = create<CharacterStore>((set) => ({
    name: "",
    level: 1,
    build: "thief",
    strength: 1,
    agility: 1,
    wisdom: 1,
    magic: 1,
    setName: (name: string) => set((state) => ({...state, name})),
    setLevel: (level: number) => set((state) => ({...state, level})),
    setBuild: (build: string) => set((state) => ({...state, build})),
    setStats: (strength: number, agility: number, wisdom: number, magic: number) => set((state) => {
        return {...state, strength, agility, wisdom, magic}
    }),
    increaseLevel: () => set((state) => ({...state, level: Math.min(5, state.level + 1)})),
    increaseStats: () => set((state) => {
            return {
                ...state,
                strength: Math.min(10, state.strength + 1),
                agility: Math.min(10, state.strength + 1),
                wisdom: Math.min(10, state.strength + 1),
                magic: Math.min(10, state.strength + 1)
            }
        }
    ),
}))