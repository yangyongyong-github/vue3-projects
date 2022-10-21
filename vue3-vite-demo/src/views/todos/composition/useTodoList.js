import { ref, watchEffect } from 'vue';
import * as todoStorage from '../../../utils/todoStorage';

export default function useTodoList() {
    const todosRef = ref(todoStorage.fetch());
    window.todosRef = todosRef;// test

    watchEffect(() => {
        todoStorage.save(todosRef.value)
    });

    return {
        todosRef,
    }
}