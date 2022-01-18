import React from "react";
import { Button, List, Avatar } from "antd";
import "./dashboard.css";

function DashBoard() {
  const dataTest = [
    {
      avatar:
        "https://scr.vn/wp-content/uploads/2020/08/Anh-chan-dung-gia-dinh-4-nguoi.jpg",
      title: "Gia Phả Họ Phan",
      numberhumans: "9",
      address: "Cửa 8 chi 2 Xóm Thành, Xã Nghi Long, H. Nghi Lộc, T. Nghệ an",
      id: "TF-1",
    },
  ];

  const dataUser = {
    displayName: "Quang Nam",
    avatar:
      "https://bloganh.net/wp-content/uploads/2021/03/chup-anh-dep-anh-sang-min.jpg",
    backgroundUser:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcDTvir8dDW4RON-Jr4Oc928TiRFX0TnJ6A&usqp=CAU",
  };

  return (
    <div className="container-fluid">
      <div className="dashboard">
        <div className="dashboard-header">
          <div className="dashboard-header-bg">
            <img
              src={dataUser?.backgroundUser}
              alt="This is background and it's broken"
            />
          </div>
          <div className="dashboard-header-avatar">
            <img src={dataUser?.avatar} alt="This is Avatar" />
          </div>
        </div>
        <div className="dashboard-description">
          <h2>{dataUser?.displayName}</h2>
        </div>
        <div className="dashboard-content">
          <div className="dashboard-content-sideleft">
            <div className="dashboard-content-sideleft-item">
              <Button className="dashboard-content-sideleft-item-btn" type="primary">Your Tree</Button>
            </div>
            <div className="dashboard-content-sideleft-item">
              <Button className="dashboard-content-sideleft-item-btn" type="primary">Change personal information</Button>
            </div>
            <div className="dashboard-content-sideleft-item">
              <Button className="dashboard-content-sideleft-item-btn" type="primary">Settings</Button>
            </div>
          </div>
          <div className="dashboard-content-main">
            <List
              className="dashboard-content-list"
              itemLayout="vertical"
              dataSource={dataTest}
              renderItem={(item) => (
                <a href={`/watch/${item.id}`}>
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar className="dashboard-content-avatar" src={item.avatar} />
                      }
                      title={<a href={`/watch/${item.id}`}>{item.title}</a>}
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
