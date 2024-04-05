import { useAppDispatch } from '../Store';
import { clearTodo } from '../Store/todosSlice';

export default function Clear() {
    const dispatch = useAppDispatch();
    function handleDispatchClear(): void {
        dispatch(clearTodo());
    }

    return (
        <section>
            <button
                onClick={handleDispatchClear}
                className="button w-full hover:bg-[red] text-[10px] hover:text-[white] opacity-50 hover:opacity-100"
            >
                Clear
            </button>
        </section>
    );
}
