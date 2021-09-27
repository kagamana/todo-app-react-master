import TodoList from "./components/TodoList";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";

function App(){
  return (
    <>
      <p>Danh sách công việc cần thực hiện trong ngày hôm nay</p>
      <TextField
        name='add-todo'
        placeholder='Thêm việc cần làm ...'
        elemAfterInput={
          <Button isDisabled={false} appearance='primary'>
            Thêm
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
      ></TextField>
      <TodoList/>
    </>
  );
}

export default App;