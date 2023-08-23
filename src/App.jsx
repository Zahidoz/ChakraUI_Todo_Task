import { VStack, Heading, IconButton,useToast, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import { todoList } from "./Data/todos";


const App = () => {
  const toast = useToast();


  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState(todoList);

  const AddTodoHandle = () => {
    if(todo.length==0){
         return toast({
           title: "Todo is Empty!",
           description: "Please write todo in the input",
           status: "error",
           duration: 3000,
           isClosable: false,
           position: "top"
         });
        
    }
    const checkTodoIsExist = allTodos.find((item) => item.title.toLowerCase() === todo.toLowerCase());
    if(checkTodoIsExist) return toast({
      title: "Todo is already have!",
      description: "Please write another todo",
      status: "error",
      duration: 3000,
      isClosable: false,
      position: "top",
    }); 
    const newTodo = {
      title: todo,
    };
    setTodo("")
    setAllTodos([...allTodos, newTodo]);
  };

  const RemoveTodoHandle = (checkedIndex) => {
    const todosWithoutOne = allTodos.filter(
      (item, index) => index != checkedIndex
    );
    setAllTodos(todosWithoutOne);
    console.log(checkedIndex);
  };
const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <VStack>
        <IconButton
          onClick={toggleColorMode}
          size="lg"
          isRound="true"
          mt="20px"
          mr="30px"
          ml="auto"
          icon={<BsMoonStarsFill />}
        />
        <Heading
          fontWeight="extrabold"
          bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
          bgClip="text"
          fontSize={"48px"}
        >
          My Todo Task!{" "}
        </Heading>
        {allTodos.length === 0 ? (
          <Heading>You done all Tasks</Heading>
        ) : (
          <TodoList allTodos={allTodos} RemoveTodoHandle={RemoveTodoHandle} />
        )}

        <AddTodo AddTodoHandle={AddTodoHandle} todo={todo} setTodo={setTodo} />
      </VStack>
    </div>
  );
};

export default App;
