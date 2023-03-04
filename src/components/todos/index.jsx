import React, { useEffect, useState } from "react";
import { TODO_HEADERS, TODO_STATUS } from "../../helpers/constants";
import "./todos.css";
import TodoCard from "./components/TodoCard";
import TypeHeaderCard from "./components/TypeHeaderCard";
import { Button, Input, notification, Spin } from "antd";
import { GetTodos } from "../../apis/getTodos";
import "antd/dist/reset.css";
import { CreateTodo } from "../../apis/createTodo";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons/lib/icons";
import { ChangeStatus } from "../../apis/changeStatus";

const splitTodoByStatus = (todos) => {
  let notStarted = [];
  let inProgress = [];
  let completed = [];
  for (const todo of todos) {
    switch (todo.status) {
      case TODO_STATUS.NOT_STARTED:
        notStarted.push(todo);
        break;
      case TODO_STATUS.IN_PROGRESS:
        inProgress.push(todo);
        break;
      case TODO_STATUS.COMPLETED:
        completed.push(todo);
        break;
      default:
        console.log("unkown status");
    }
  }
  return [notStarted, inProgress, completed];
};

const ProjectRelease = () => {
  const [api, contextHolder] = notification.useNotification();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const list = await GetTodos();
    if (list.length) setTodos([...list]);
    setLoading(false);
  };

  const openNotification = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
    });
  };

  const onClickNewTodo = () => {
    if (todos[0].new) return;
    todos.unshift({ status: 0, new: true });
    setTodos([...todos]);
  };

  const handleCreateNewTodo = async (data) => {
    if (!data) return;
    setLoading(true);
    const id = await CreateTodo(data, openNotification);
    const { title, status } = data;
    todos.splice(0, 1);
    todos.push({ title, status, id });
    setTodos([...todos]);
    setLoading(false);
  };

  const handleChangeStatus = async (status, id) => {
    setLoading(true);
    await ChangeStatus(status, id, openNotification);
    setLoading(false);
    const index = todos.findIndex((d) => d.id === id);
    todos[index].status = status;
    setTodos([...todos]);
  };

  return (
    <Spin spinning={loading} wrapperClassName="todos" className="todos">
      <div className="container">
        <div className="flex justify-end flex-wrap">
          <Input
            value={searchTerm}
            className="searchInput"
            prefix={<SearchOutlined style={{ fontSize: 20 }} />}
            placeholder="Search for a todo!"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button className="addButton" onClick={onClickNewTodo}>
            <PlusOutlined /> Create New Todo
          </Button>
        </div>
        <div className="todos__container">
          {splitTodoByStatus(
            todos.filter(
              (d) =>
                !searchTerm ||
                d.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
            )
          ).map((todos, i) => (
            <div className="todos__typeContainer">
              <TypeHeaderCard {...TODO_HEADERS[i]} count={todos.length} />
              {todos.map((todo, index) => (
                <TodoCard
                  data={todo}
                  key={index}
                  header={TODO_HEADERS[i]}
                  onCreate={handleCreateNewTodo}
                  changeStatus={handleChangeStatus}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {contextHolder}
    </Spin>
  );
};

export default ProjectRelease;
