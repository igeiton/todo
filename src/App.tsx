import { useAppSelector } from './Store';
import Input from './Components/Input';
import Todo from './Components/Todo';
import Clear from './Components/Clear';

function App() {
    const { todos } = useAppSelector((state) => state.todos);

    return (
        <main className="flex flex-col gap-[15px] m-auto min-w-[50vw] max-w-[300px]">
            <Input />

            <section className="flex flex-col gap-[15px]">
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </section>

            <Clear />
        </main>
    );
}

export default App;
