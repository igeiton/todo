import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../Store';
import { InitialTodo, removeTodo, toggleTodo } from '../Store/todosSlice';

interface TodoProps {
    todo: InitialTodo;
}

export default function Todo({ todo }: TodoProps) {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    function handleDispatch(): void {
        dispatch(removeTodo(todo.id));
    }

    function handleDispatchCheckbox(): void {
        dispatch(toggleTodo(todo.id));
    }

    function haveDescription(): string {
        const styles =
            'button text-[10px] hover:text-[white] hover:bg-[orange]';

        if (todo.description) {
            return styles + ' after:content-["*"]';
        }

        return styles;
    }

    return (
        <div
            onClick={(event: any) => {
                event.target.tagName !== 'BUTTON' && handleDispatchCheckbox();
            }}
            className="flex gap-[15px] items-center justify-between hover:cursor-pointer"
            style={todo.completed ? { opacity: 0.5 } : {}}
        >
            <input
                onChange={handleDispatchCheckbox}
                checked={todo.completed}
                type="checkbox"
                className="hover:cursor-pointer"
            />
            <span
                className={
                    todo.completed
                        ? 'line-through flex-1 break-all'
                        : 'flex-1 break-all'
                }
            >
                {todo.title}
            </span>

            <div className="flex gap-[15px]">
                <button
                    onClick={() => navigate('/edit', { state: todo })}
                    className={haveDescription()}
                >
                    Edit
                </button>
                <button
                    onClick={handleDispatch}
                    className="button text-[10px] hover:text-[white] hover:bg-[red]"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
