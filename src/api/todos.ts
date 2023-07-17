import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const addTodoToServer = (path: string, todo: Omit<Todo, 'id'>) => {
  return client.post<Todo>(path, todo);
};

export const removeTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const changeTodo = (
  todoId: number, data: Partial<Todo>,
): Promise<Todo> => {
  return client.patch(`/todos/${todoId}`, data);
};
