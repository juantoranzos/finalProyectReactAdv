import { create } from "zustand";

const usePost = create((set)=>({
    posts: [],
    titles:[],
    coments:[],
    añadirComentarios: (coment) => set((state) => ({ coments: [...state.coments, coment] })),
    añadirPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
    anadirTitulo: (title) => set((state) => ({ titles: [...state.titles, title] })),
}))
export default usePost
