import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../Store';
import { editTodo } from '../Store/todosSlice';

export default function Edit() {
    const { state } = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [value, setValue] = useState({
        title: state.title,
        description: state.description,
    });
    const refBody: any = useRef();

    function handleStyles(event: any): void {
        const currentColor = event.target.style.color;
        const currentBgColor = event.target.style.backgroundColor;

        if (event.target.innerText === 'Save') {
            event.target.style.color = 'green';
            event.target.style.backgroundColor = 'green';
            event.target.disabled = true;
        } else if (event.target.innerText === 'Clear') {
            event.target.style.color = 'white';
            event.target.style.backgroundColor = 'white';
            event.target.disabled = true;
        }

        setTimeout(() => {
            event.target.style.color = currentColor;
            event.target.style.backgroundColor = currentBgColor;
            event.target.disabled = false;
        }, 500);
    }
    function handleDispatchEdit(): void {
        dispatch(
            editTodo({
                id: state.id,
                title: value.title,
                description: value.description,
            })
        );
    }

    return (
        <>
            <button
                onClick={() => navigate('/')}
                className="goBack text-[10px]"
            >
                Go back
            </button>

            <section className="flex flex-col gap-[15px]">
                <div>{state.title}</div>

                <input
                    value={value.title}
                    onChange={(event) =>
                        setValue({ ...value, title: event.target.value })
                    }
                    type="text"
                    className="input"
                />
                <textarea
                    ref={refBody}
                    value={value.description}
                    onChange={(event) =>
                        setValue({ ...value, description: event.target.value })
                    }
                    className="textarea"
                    style={{
                        height:
                            Math.max(refBody.current?.scrollHeight, 50) + 'px',
                    }}
                />

                <div className="flex justify-around">
                    <button
                        onClick={(event) => {
                            setValue({
                                title: state.title,
                                description: '',
                            });
                            dispatch(
                                editTodo({
                                    id: state.id,
                                    title: state.title,
                                    description: '',
                                })
                            );
                            handleStyles(event);
                        }}
                        className="button"
                    >
                        Clear
                    </button>
                    <button
                        onClick={(event) => {
                            handleDispatchEdit();
                            handleStyles(event);
                        }}
                        className="button"
                    >
                        Save
                    </button>
                </div>
            </section>
        </>
    );
}
