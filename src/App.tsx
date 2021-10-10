import { ChangeEvent, FC, useState } from "react";
import "./App.css";
import Component from "./component";
import { Itask } from "./interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(1);
  const [todoList, setTodoList] = useState<Itask[]>([]);
  const addTask = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
      console.log(task);
    } else {
      setDeadLine(Number(event.target.value));
    }
  };
  const set = (): void => {
    const newTask = { task, deadLine };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadLine(0);
  };
  const deleteTask = (taskDeleteName: string): void => {
    setTodoList(
      todoList.filter((e) => {
        return e.task != taskDeleteName;
      })
    );
  };
  return (
    <div className={"App"}>
      <div className={"input"}>
        <div className={"todoWrapper"}>
          <input
            type="text"
            placeholder="Task..."
            onChange={addTask}
            name={"task"}
            value={task}
          />
          <input
            type="number"
            placeholder="Deadline"
            onChange={addTask}
            name={"deadLine"}
            value={deadLine}
          />
        </div>
        <button onClick={set} disabled={!task}>
          set
        </button>
      </div>
      <div className={"todoList"}>
        {todoList.map((e: Itask, key: number) => {
          return <Component key={key} task={e} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
