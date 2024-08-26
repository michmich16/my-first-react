import { useState } from 'react';
import style from './Modal.module.scss';

export const Modal = ({ children, isOpen, onClose, onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        onSubmit(inputValue);
        setInputValue('');
    };

    if (!isOpen) return null;

    return (
        <div className={style.modalStyle} onClick={onClose}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={style.closeButton} onClick={onClose}>X</button>
                <h2>This is a modal!!!</h2>
                <input type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder='Write your name here!!'
                />
                {children}


                <div className={style.modalButtons}>
                    <button className={style.modalButton} onClick={onClose}>Cancel</button>
                    <button className={style.modalButton} onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )

}