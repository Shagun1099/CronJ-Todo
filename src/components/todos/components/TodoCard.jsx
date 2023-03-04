import { Avatar, Dropdown, Menu } from "antd";
import React, { useState } from "react";
import { getRandomUserImage, TODO_HEADERS } from "../../../helpers/constants";
import {
  FlagFilled,
  DownOutlined,
  CheckCircleFilled,
} from "@ant-design/icons/lib/icons";

const getRandomFlagColor = () =>
  ["red", "#00dc00", "#ffd82d"][Math.floor(Math.random() * 2 + 1)];

const STATUS = [
  { title: "Not Started", id: 0 },
  { title: "In Progress", id: 1 },
  { title: "Completed", id: 2 },
];

const TodoCard = ({ data, header, onCreate, changeStatus }) => {
  const [newPayload, setNewPayload] = useState({ status: 0, title: "" });
  const [menuVisible, setMenuVisible] = useState(false);

  const handleChangeTitle = (e) => {
    newPayload.title = e.target.value;
    setNewPayload({ ...newPayload });
  };

  const handleSetStatus = (status) => {
    if (data.new) {
      newPayload.status = status;
      setNewPayload({ ...newPayload });
    } else {
      changeStatus(status, data.id);
    }
  };

  const handleCreateNew = () => {
    onCreate(newPayload);
    setNewPayload({ status: 0, title: "" });
  }

  const DropdownMenu = (
    <Menu>
      {STATUS.map(({ title, id }) => (
        <Menu.Item key={id} onClick={() => handleSetStatus(id)}>
          {title}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="task__card">
      <div className="flex-1">
        <Dropdown
          overlay={DropdownMenu}
          visible={menuVisible}
          onVisibleChange={setMenuVisible}
          trigger={["click", "hover"]}
        >
          <small
            style={{
              color: data.new
                ? TODO_HEADERS[newPayload.status].barColor
                : header.barColor,
            }}
            className="font-semibold cursor-pointer"
          >
            {data.new ? TODO_HEADERS[newPayload.status].title : header.title}{" "}
            <DownOutlined />
          </small>
        </Dropdown>
        <div className="mt-20 mb-10">
          {data.new ? (
            <input
              placeholder="Drink Coffee????"
              value={newPayload.title}
              onChange={handleChangeTitle}
            />
          ) : (
            <p className="font-medium mr-20">{data?.title}</p>
          )}
        </div>
        <FlagFilled style={{ color: getRandomFlagColor(), fontSize: 22 }} />
      </div>
      {data.new ? (
        <CheckCircleFilled
          style={{ fontSize: 28, color: "#00dc00" }}
          className="cursor-pointer"
          onClick={handleCreateNew}
        />
      ) : (
        <Avatar src={getRandomUserImage()} alt="user" />
      )}
    </div>
  );
};

export default TodoCard;
