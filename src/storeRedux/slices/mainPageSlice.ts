import {createSlice} from "@reduxjs/toolkit";

export type News = {
    id: number,
    title: string,
    text: string,
    date: string
}

export interface MainPageSlice {
    news: News[],
}

const initState = {
    news: [
        {
            id: 0,
            title: "Первое обновление",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a sapien hendrerit, varius\n" +
                "                sem et, ultrices enim. Duis vehicula dui vel posuere malesuada. Fusce eu cursus diam. Interdum\n" +
                "                et malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus.",
            date: "28.09.2023",
        },
        {
            id: 1,
            title: "Второе обновление",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a sapien hendrerit, varius\n" +
                "                sem et, ultrices enim. Duis vehicula dui vel posuere malesuada. Fusce eu cursus diam. Interdum\n" +
                "                et malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus.",
            date: "29.09.2023",
        },
        {
            id: 2,
            title: "Третье обновление",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a sapien hendrerit, varius\n" +
                "                sem et, ultrices enim. Duis vehicula dui vel posuere malesuada. Fusce eu cursus diam. Interdum\n" +
                "                et malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus.",
            date: "30.09.2023",
        },
        {
            id: 3,
            title: "Четвертое обновление",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a sapien hendrerit, varius\n" +
                "                sem et, ultrices enim. Duis vehicula dui vel posuere malesuada. Fusce eu cursus diam. Interdum\n" +
                "                et malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus.",
            date: "01.10.2023",
        },
        {
            id: 4,
            title: "Пятое обновление",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a sapien hendrerit, varius\n" +
                "                sem et, ultrices enim. Duis vehicula dui vel posuere malesuada. Fusce eu cursus diam. Interdum\n" +
                "                et malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus. Sed ultricies massa tellus, id egestas\n" +
                "                velit accumsan et. Maecenas ante leo, faucibus sed nibh nec, tempor tristique est. Interdum et\n" +
                "                malesuada fames ac ante ipsum primis in faucibus.",
            date: "02.10.2023",
        },
    ]
}

export const mainPageSlice = createSlice({
    name: "mainPage",
    initialState: initState,
    reducers: {}
})

export default mainPageSlice.reducer;