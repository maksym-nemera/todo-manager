import { FC, memo } from 'react';
import cn from 'classnames';
import { StatusValue } from '../../types/StatusValue';
import { TodoAppFooterProps } from './TodoAppFooterProps';
import { capitalize } from '../../utils/todoUtils';

export const TodoAppFooter: FC<TodoAppFooterProps> = memo(({
  todos,
  completedTodoIds,
  todoFilter,
  setTodoFilter,
  clearCompletedTodos,
}) => {
  const unfinishedTodoCount = todos.length - completedTodoIds.length;

  return (
    <footer className="todoapp__footer">
      <span className="todo-count">
        {`${unfinishedTodoCount} items left`}
      </span>

      <nav className="filter">
        {Object.values(StatusValue).map(value => (
          <a
            key={value}
            href={`#/${value === StatusValue.ALL ? '' : value}`}
            className={cn('filter__link', {
              selected: todoFilter === value,
            })}
            onClick={() => setTodoFilter(value)}
          >
            {capitalize(value)}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        disabled={!completedTodoIds.length}
        onClick={clearCompletedTodos}
      >
        Clear completed
      </button>
    </footer>
  );
});
