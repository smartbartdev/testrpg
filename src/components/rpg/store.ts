import {create} from "zustand";

export const useStore = create<CharacterStore>((set) => ({
    name: "",
    level: 1,
    build: null,
    setName: (name: string) => set((state) => ({name: name, level: state.level, build: state.build})),
    setLevel: (level: number) => set((state) => ({name: state.name, level: level, build: state.build})),
    setBuild: (build: string) => set((state) => ({name: state.name, level: state.level, build: build})),
}))