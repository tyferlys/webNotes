import React, {useState} from 'react';
import CreateNote from "./CreateNote";

const CreateNoteContainer = () => {

    const [isFocus, setIsFocus] = useState(false);

    const toggleFocus = (event: any) => {
        if (event.target.className.split("_")[1] === "inputText"){
            setIsFocus(true)
        }
        else
            setIsFocus(false)
    }

    return (
        <CreateNote toggleFocus={toggleFocus} isFocus = {isFocus}/>
    );
};

export default CreateNoteContainer;