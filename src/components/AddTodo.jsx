import { Button, HStack, Input, VStack } from "@chakra-ui/react";

const AddTodo = ({ todo, setTodo, AddTodoHandle }) => {
  const vStack = {
    maxW: "550px",
    w: "100%",
    alignItems: "stretch",
  };
  return (
    <VStack sx={vStack} w="100%">
      <HStack>
        <Input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Write Todo"
        ></Input>
        <Button onClick={AddTodoHandle} colorScheme="gray">
          Add Todo
        </Button>
      </HStack>
    </VStack>
  );
};

export default AddTodo;
