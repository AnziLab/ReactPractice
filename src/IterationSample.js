import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: 'snowman' },
        { id: 2, text: 'ice' },
        { id: 3, text: 'snow' },
        { id: 4, text: 'wind' }
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    }
    const onRemove = e => {
        const nextNames = names.filter(name => name.id < e);
        setNames(nextNames);
    }
    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}, {name.id}</li>);
    return (
        <>
            <input value={inputText} onKeyPress={onKeyPress} onChange={onChange} />
            <button onclick={onClick}> add </button>
            <ul> {nameList} </ul>
        </>
    );
};

export default IterationSample;