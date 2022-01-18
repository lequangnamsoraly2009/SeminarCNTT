import React, { useState } from "react";
import "./header.css";
import { Layout, Button, Input, Drawer, Avatar, Menu } from "antd";
import {
  MenuOutlined,
  MessageOutlined,
  NotificationOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fakeLogout } from "../../app/userSlice";

const { Header } = Layout;
const { Search } = Input;

function HeaderNav() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleOnClickMenu = () => {
    setVisibleMenu(true);
  };

  const handleOnClickCloseMenu = () => {
    setVisibleMenu(false);
  };

  // Search
  const onSearch = () => {};

  // Sign Out
  const onClickSignOut = () => {
    dispatch(fakeLogout());
  };

  return (
    <Header>
      <div className="container-fluid">
        <div className="header">
          <div className="header-left">
            <Button className="header-menu" onClick={handleOnClickMenu}>
              <MenuOutlined />
            </Button>

            <Drawer
              title="DEV Blog Community"
              placement="left"
              width="300"
              onClose={handleOnClickCloseMenu}
              visible={visibleMenu}
            ></Drawer>
            <div className="header-logo">
              <a href="/">
                <Button type="primary" className="header-logo-button">
                  Family tree
                </Button>
              </a>
            </div>
            <Search
              className="mobile header-search"
              placeholder="Search..."
              onSearch={onSearch}
              enterButton
            />
          </div>
          <div className="header-right">
            <div className="header-search-mobile">
              <a href="/search">
                <SearchOutlined />
              </a>
            </div>
            {isLoggedIn ? (
              <div className="header-user-login">
                <div className="header-create-post">
                  <a href="/create">
                    <Button
                      type="primary"
                      className="button header-create-post-button"
                    >
                      Create Family Tree
                    </Button>
                  </a>
                </div>
                <div className="header-message">
                  <a href="/message">
                    <MessageOutlined />
                  </a>
                </div>
                <div className="header-notification">
                  <a href="/notification">
                    <NotificationOutlined />
                  </a>
                </div>
                <div className="header-user">
                  <Avatar
                    size={45}
                    className="header-user-avatar"
                    src="https://phunugioi.com/wp-content/uploads/2020/04/anh-gai-xinh-hot-girl-nhat-ban.jpg"
                  />
                  <div className="header-user--dropdown">
                    <a href="/user">
                      <div className="user--dropdown-name">
                        <span>User Name</span>
                        <small>@usernamehere</small>
                      </div>
                    </a>
                    <div className="user--dropdown-menu">
                      <Menu>
                        <Menu.Item key="1">
                          <a href="/dashboard">Dashboard</a>
                        </Menu.Item>
                        <Menu.Item key="2">
                          <a href="/">Create Tree</a>
                        </Menu.Item>
                        <Menu.Item key="3">
                          <a href="/">Your Tree</a>
                        </Menu.Item>
                        <Menu.Item key="4">
                          <a href="/">Settings</a>
                        </Menu.Item>
                      </Menu>
                    </div>
                    <div className="user--dropdown-signout">
                      <a href="/" onClick={onClickSignOut}>
                        Sign Out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="header-login">
                  <a href="/login">
                    <Button type="link" className="button button-login">
                      Log in
                    </Button>
                  </a>
                </div>
                <div className="header-create-account">
                  <a href="/signup">
                    <Button type="primary" className="button button-create">
                      Create Account
                    </Button>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Header>
  );
}

export default HeaderNav;
