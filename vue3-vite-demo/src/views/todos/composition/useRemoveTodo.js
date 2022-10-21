export default function useRemoveTodo(todosRef) {

    const remove = (todo) => {
        // 传入单个删除，即点击右侧的X 删除当前
        todosRef.value.splice(todosRef.value.indexOf(todo), 1)
    }

    const removeCompleted = () => {
        // 将未完成的赋值给当前的，即过滤掉所有已完成的
        todosRef.value = todosRef.value.filter(it => !it.completed)
    }

    return {
        remove,
        removeCompleted
    }
}

