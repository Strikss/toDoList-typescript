import { Itask } from "./interfaces";

interface Props {
  task: Itask;
  deleteTask(taskDeleteName: string): void;
}

const Component = ({ task, deleteTask }: Props) => {
  return (
    <div className="TASKS">
      <div>{task.task} </div>
      <div>{task.deadLine} </div>
      <button onClick={() => deleteTask(task.task)}>x</button>
    </div>
  );
};

export default Component;
