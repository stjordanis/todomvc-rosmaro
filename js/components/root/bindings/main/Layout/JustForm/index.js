import { callChildren, initialValueLens } from 'rosmaro-binding-utils';
import { h } from '~/js/utils/vdom';
import { makeHandler } from '~/js/utils/handlers';

const atLeastOne = () => ({ arrow: 'there is at least one todo' });

export default ({ name }) => ({
  handler: makeHandler({
    ALL_TODOS_COMPLETED: atLeastOne,
    SOME_TODOS_COMPLETED: atLeastOne,
    NO_TODOS_COMPLETED: atLeastOne,

    RENDER: () => ({ newTodoForm, list, controls }) =>
      h('section.todoapp', [
        h('header.header', [h('h1', 'todos'), newTodoForm]),
      ]),
  }),
});
