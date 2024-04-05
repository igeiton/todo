import { useState } from 'react';
import { useAppDispatch } from '../Store';
import { addTodo } from '../Store/todosSlice';
import { useRef } from 'react';

export default function Input() {
    const [value, setValue] = useState('');
    const refInput: any = useRef();

    const dispatch = useAppDispatch();
    function handleDispatch(): void {
        dispatch(
            addTodo({
                todo: {
                    id: Date.now(),
                    title: value,
                    description: '',
                    completed: false,
                },
            })
        );
        setValue('');
        refInput.current.focus();
    }

    return (
        <section className="flex gap-[15px] justify-between w-full">
            <input
                ref={refInput}
                onKeyDown={(e) => e.key === 'Enter' && handleDispatch()}
                placeholder="Enter name of todo..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="text-[#000] px-[15px] py-[5px] border-[1px] rounded-[5px] text-center w-full"
            />

            <button
                onClick={() => value.trim() && handleDispatch}
                className="button"
            >
                Add
            </button>
        </section>
    );
}
