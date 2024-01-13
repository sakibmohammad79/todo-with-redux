//import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/Api";

const TodoContainer = () => {
  //for local state
  //const { todos } = useAppSelector((state) => state.todos);
  const { data: todos } = useGetTodosQuery(undefined);

  console.log("todeos", todos);
  return (
    <div>
      <div className="flex justify-between  pb-5">
        <AddTodoModal />

        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[4px] ">
        <div className="bg-white p-5 h-full w-full rounded-lg space-y-4">
          {todos?.data.map((item) => (
            <TodoCard {...item}></TodoCard>
          ))}
        </div>
        {/* <div className="bg-white p-3 font-semibold flex text-xl rounded-md justify-center items-center">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
