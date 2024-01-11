import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between  pb-5">
        <AddTodoModal />
        <Button className="bg-primary-gradient text-lg font-semibold">
          Filter
        </Button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[4px] ">
        {/* <div className="bg-white p-3 font-semibold flex text-xl rounded-md justify-center items-center">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white p-5 h-full w-full rounded-lg space-y-4">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
