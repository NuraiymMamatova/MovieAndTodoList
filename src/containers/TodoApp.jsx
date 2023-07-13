import { useState } from "react";
import Label from "../components/Label";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import "./TodoApp.css";

function TodoApp() {
  const [usersData, setUsersData] = useState([
    {
      title: "Learn JavaScript",
      completed: false,
      id: Math.random().toString(),
    },
    {
      title: "Learn React",
      completed: true,
      id: Math.random().toString(),
    },
    {
      title: "Learn TypeScript",
      completed: false,
      id: Math.random().toString(),
    },
  ]);

  const [data, setData] = useState("");

  const saveOnChange = (event) => {
    event.preventDefault();
    setData(event.target.value);
  };

  const saveData = () => {
    if (!data) {
      return alert("Поле должно быть заполнено!");
    }
    const newData = {
      id: Math.random().toString(),
      title: data,
    };
    setUsersData([...usersData, newData]);
    setData("");
  };

  const deleteData = (id) => {
    const filteredUsersData = usersData.filter((data) => data.id !== id);
    setUsersData(filteredUsersData);
  };

  const changeHandler = (dataId) => {
    setUsersData((prevData) => {
      return prevData.map((data) => {
        if (data.id === dataId) {
          return {
            ...data,
            completed: !data.completed,
          };
        }
        return data;
      });
    });
  };

  return (
    <div className="App todo">
      <div className="main-container">
        <div className="form">
          <Label>
            <h1 className="main-heading">TODO - LIST</h1>
          </Label>
          <Input
            className="text-of-task"
            onChange={saveOnChange}
            placeholder="Enter new todo..."
            value={data}
            labelClassName="main-heading"
          />
          <Button
            title="add"
            color="#e2316c"
            onClick={(event) => saveData(event)}
          />
        </div>
        <ul className="task-list">
          {usersData.length ? (
            usersData.map((data) => (
              <li key={data.id} className="task-list-item">
                <p
                  style={{
                    textDecoration: data.completed
                      ? "line-through #e53b43"
                      : "none",
                  }}
                >
                  {data.title}
                </p>
                <div>
                  <Input
                    inputType="checkbox"
                    onChange={() => changeHandler(data.id)}
                    checked={data.completed}
                  />
                  <Button
                    title="delete"
                    color="#ff5758"
                    onClick={() => deleteData(data.id)}
                  />
                </div>
              </li>
            ))
          ) : (
            <h1 className="not-found">You don't have any tasks!</h1>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
