import React, { useState } from "react";
import "./header.css";
import { Layout, Button, Input, Drawer, Avatar, Menu } from "antd";
import {
  MenuOutlined,
  MessageOutlined,
  NotificationOutlined,
  SearchOutlined,
} from "@ant-design/icons";
// import { useSelector } from 'react-redux'
// import SideLeftBar from '../sideLeft'

const { Header } = Layout;
const { Search } = Input;

function HeaderNav() {
  const [visibleMenu, setVisibleMenu] = useState(false);

  // const { isLoggedIn } = useSelector((state) => state.user)

  const handleOnClickMenu = () => {
    setVisibleMenu(true);
  };

  const handleOnClickCloseMenu = () => {
    setVisibleMenu(false);
  };

  // Search
  const onSearch = () => {};

  // Sign Out
  const onClickSignOut = () => {};

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
            >
            </Drawer>
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
          </div>
        </div>
      </div>
    </Header>
  );
}

export default HeaderNav;
