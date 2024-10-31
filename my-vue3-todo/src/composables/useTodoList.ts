import { ref } from 'vue'

export const useTodoList = () => {
  const todoList = ref<{ id: number; task: string }[]>([])
  const ls = localStorage.todoList
  const editId = ref(-1)

  todoList.value = ls ? JSON.parse(ls) : []

  const findById = (id: number) => todoList.value.find((todo) => todo.id === id)

  const findIndexById = (id: number) => todoList.value.findIndex((todo) => todo.id === id)

  const show = (id: number) => {
    const todo = findById(id)
    editId.value = id
    return todo?.task
  }

  const add = (task: string) => {
    const id = new Date().getTime()

    todoList.value.push({ id, task })

    localStorage.todoList = JSON.stringify(todoList.value)
  }

  const edit = (task: string) => {
    const todo = findById(editId.value)
    const idx = findIndexById(editId.value)

    if (todo) {
      todo.task = task
      todoList.value.splice(idx, 1, todo)
      localStorage.todoList = JSON.stringify(todoList.value)
      editId.value = -1
    }
  }

  const del = (id: number) => {
    const todo = findById(id)
    if (todo) {
      const delMsg = '「' + todo.task + '」を削除しますか？'
      if (!confirm(delMsg)) return

      const idx = findIndexById(id)
      todoList.value.splice(idx, 1)
      localStorage.todoList = JSON.stringify(todoList.value)
    }
  }

  return { todoList, add, show, edit, del }
}
