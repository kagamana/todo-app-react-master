import TodoList from "./components/TodoList";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useState } from "react";
import { v4 } from 'uuid';
import { useCallback } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback((e) => {
    setTodoList([{ id: v4(), name: textInput, isComplete: false}, ...todoList]);
    setTextInput("");
  }, [textInput, todoList]);
  return (
    <>
      <p>Danh sách công việc cần thực hiện trong ngày hôm nay</p>
      <TextField
        name='add-todo'
        placeholder='Thêm việc cần làm ...'
        elemAfterInput={
          <Button isDisabled={!textInput} appearance='primary' onClick={onAddBtnClick}>
            Thêm công việc
          </Button>
        }
        value={textInput}
        onChange={onTextInputChange}
      ></TextField>
      <TodoList todoList={todoList}/>
    </>
  );
}

export default App;