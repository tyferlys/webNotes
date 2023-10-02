import {createSlice} from "@reduxjs/toolkit";

export type ItemText = {
    blockType: string
    id: string
    content: string,
    href: string | undefined
}

export type EditWindowHref = {
    isActive: boolean,
    text: string,
    href: string,
}

export interface DataNote{
    id: number,
    activeId: string | undefined
    title: string | undefined
    editWindowHref: EditWindowHref
    itemsText: ItemText[],
}

const initState: DataNote = {
    id: Math.floor(Math.random() * 100000),
    activeId: undefined,
    title: "",
    editWindowHref: {
        isActive: false,
        text: "",
        href: "",
    },
    itemsText: [

    ],
}

const dataNoteSlice = createSlice({
    name: "dataNote",
    initialState: initState,
    reducers: {
        setActiveId(state, action){
            state.activeId = action.payload.value;
        },
        changeTitle(state,action){
            state.title = action.payload.value;
        },
        addElement(state, action){
            state.itemsText = [...state.itemsText, action.payload.value]
            state.activeId = action.payload.value.id;
        },
        changeTextBlock(state, action){
            for (let i in state.itemsText){
                if (state.itemsText[i].id === state.activeId)
                    state.itemsText[i].content = action.payload.value;
            }
        },
        toggleEditHref(state){
            state.editWindowHref.isActive = !state.editWindowHref.isActive;
            state.editWindowHref.text = "";
            state.editWindowHref.href = "";
        },
        changeTextHref(state,action){
            state.editWindowHref.text = action.payload.value;
        },
        changeHrefHref(state,action){
            state.editWindowHref.href = action.payload.value;
        },
        createHref(state, action){
            const newElement: ItemText = {
                blockType: "a",
                id: action.payload.value.id,
                content: state.editWindowHref.text,
                href: state.editWindowHref.href,
            }
            state.itemsText = [...state.itemsText, newElement]
        },
        deleteElement(state, action){
            const id = action.payload.value;
            state.itemsText = [...state.itemsText.filter((item: ItemText) => item.id != id)]
        },
        clearNote(state){
            state.activeId = undefined;
            state.itemsText = [];
        }
    },
})

export const { clearNote, deleteElement, createHref, setActiveId, changeTitle, addElement, changeTextBlock, toggleEditHref, changeTextHref, changeHrefHref} = dataNoteSlice.actions
export default dataNoteSlice.reducer