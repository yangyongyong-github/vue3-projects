import { ref, computed } from 'vue'

export default function useEditTodo(todosRef) {

    const editingTodoRef = ref(null);
    let originTitle = null;

    // 进行编辑
    const editTodo = (todo) => {
        originTitle = todo.title;
        editingTodoRef.value = todo;
    };
    // 完成编辑
    const doneEdit = (todo) => {
        editingTodoRef.value = null;
        const title = todo.title.trim();
        if (title) {
            todo.title = title;
        } else {
            // 删除
            const index = todosRef.value.indexOf(todo);
            if (index >= 0) {
                todosRef.value.splice(index, 1)
            }
        }
        console.log(todosRef.value);
    }
    // 取消编辑
    const cancelEdit = (todo) => {
        editingTodoRef.value = null;
        todo.title = originTitle;
    }


    /**
     * 设置全部完成
     */
    const allDoneRef = computed({
        get() {
            var val = todosRef.value.filter(it => !it.completed).length === 0; //    ??????????
            return val;
        },
        set(checked) {
            todosRef.value.forEach(todo => {
                todo.completed = checked;
            })
        }
    })

    return {
        editingTodoRef,
        editTodo, doneEdit, allDoneRef, cancelEdit
    }
}