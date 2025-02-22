export function Header(props) {
    const { todos } = props;
    const todosLength = todos.length;
    const isTasksPlura = todos.length != 1;

    return (
        <header>
            <h1 className="text-gradient">
                You have {todosLength} open {isTasksPlura}.
            </h1>
        </header>
    );
}
