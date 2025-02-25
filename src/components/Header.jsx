export function Header(props) {
    const { todos } = props;
    const todosLength = todos.length;
    const isTasksPlura = todos.length != 1;

    return (
        <header>
            <h1 className="text-gradient">
                Your task list: {todosLength} item(s) left {isTasksPlura}.
            </h1>
        </header>
    );
}
