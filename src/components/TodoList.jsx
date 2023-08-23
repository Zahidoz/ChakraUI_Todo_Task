import { HStack, VStack, Text, IconButton, StackDivider, Spacer } from "@chakra-ui/react"

import { IoMdDoneAll } from "react-icons/io";

const TodoList = ({ allTodos, RemoveTodoHandle }) => {
  const vStack = {
    m: "30px",
    p: "14px",
    maxW: "550px",
    w: "100%",
    border: "1px",
    borderColor: "gray.300",
    alignItems: "stretch",
    borderRadius: "10px",
  };

  return (
    <VStack divider={<StackDivider />} sx={vStack}>
      {allTodos.map((item, index) => (
        <HStack justify={"space-between"} key={index}>
          <Text color={"gray.500"} fontSize={"18px"} fontWeight={600}>
            {item.title}
          </Text>
          <Spacer />
          <IconButton
            onClick={()=>RemoveTodoHandle(index)}
            _hover={{ bg: "green.300" }}
            size={"md"}
            icon={<IoMdDoneAll />}
          ></IconButton>
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList