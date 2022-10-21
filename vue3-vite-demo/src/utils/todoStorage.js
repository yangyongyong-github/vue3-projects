const LOCAL_KEY = 'todomvc';

/**
 * 生成一个任务的唯一编号: 时间戳+4位随机数
 */
export function generateId() {
    return Date.now() + Math.random().toString(16).substring(2, 4)
}

/**
 * 获得目前的所有任务
 */
export function fetch() {
    const result = localStorage.getItem(LOCAL_KEY);
    if (result) {
        return JSON.parse(result);// 解析为一个对象
    }
    return []; // 没有值时，返回空数组
}

/**
 * 保存所有任务
 * @param {*} todos 任务列表
 */
export function save(todos) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos))
}

/**
 * filter task
 */
export function filter(todos, visibility = "all") {
    if (visibility === 'all') {
        return todos;
    }else if (visibility === 'active') {
        return todos.filter(it => it.active);
    } else if (visibility === 'completed') {
        return todos.filter(it => it.completed)
    }
    throw new Error("invalid visibility value")
}