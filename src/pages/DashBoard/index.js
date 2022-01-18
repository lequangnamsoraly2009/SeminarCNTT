import React from "react";
import { Button, List, Avatar } from "antd";
import "./dashboard.css";
import { useSelector } from "react-redux";

function DashBoard() {
  const { user } = useSelector((state) => state.user);

  console.log(user)

  return (
    <div className="container-fluid">
      <div className="dashboard">
        <div className="dashboard-header">
          <div className="dashboard-header-bg">
            <img
              src={user[0].backgroundUser}
              alt="This is background and it's broken"
            />
          </div>
          <div className="dashboard-header-avatar">
            <img src={user[0].avatar} alt="This is Avatar" />
          </div>
        </div>
        <div className="dashboard-description">
          <h2>{user[0]?.displayName}</h2>
        </div>
        <div className="dashboard-content">
          <div className="dashboard-content-sideleft">
            <div className="dashboard-content-sideleft-item">
              <Button
                className="dashboard-content-sideleft-item-btn"
                type="primary"
              >
                Your Tree ({user[0]?.myTree.length})
              </Button>
            </div>
            <div className="dashboard-content-sideleft-item">
              <Button
                className="dashboard-content-sideleft-item-btn"
                type="primary"
              >
                Change personal information
              </Button>
            </div>
            <div className="dashboard-content-sideleft-item">
              <Button
                className="dashboard-content-sideleft-item-btn"
                type="primary"
              >
                Settings
              </Button>
            </div>
          </div>
          <div className="dashboard-content-main">
            <List
              className="dashboard-content-list"
              itemLayout="vertical"
              dataSource={user[0].myTree}
              renderItem={(item) => (
                <a href={`/watch/${item.id}`}>
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          className="dashboard-content-avatar"
                          src={item.avatar}
                        />
                      }
                      title={<a href={`/watch/${item.id}`}>{item.nameTreeFamily}</a>}
                      description={`Địa chỉ: ${item.address} - Số lượng thành viên: ${item.numberhumans}`}
                    />
                  </List.Item>
                </a>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
