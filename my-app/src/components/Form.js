import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/FirebaseContext';

export const Form = () => {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = e => {
        e.preventDefault()

        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('Отлично! Заметка создана', 'success')
            })
                .catch(() => {
                    alert.show('Упс... Ошибочка. Попробуйте повторить чуть позже.', 'danger')
                })

            setValue('')
        } else {
            alert.show('Внимание! Введите название заметки')
        }
    }

    return (
        <form onSubmit={submitHandler} className="notes__form d-flex" >
            <div className="form-group w-100">
                <input
                    type="text"
                    className="form-control "
                    placeholder="Введите заметку"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
            <div className="ml-2">
                <button type="submit" className="btn btn-success">Добавить</button>
            </div>
        </form >
    )
}