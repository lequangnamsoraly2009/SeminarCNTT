import React from "react";
import "./homepage.css";
import Slider from "react-slick";
import { List, Avatar, Collapse, Button } from "antd";
import { useSelector } from "react-redux";

const { Panel } = Collapse;

function HomePage() {

  const treeFamily  = useSelector((state) => state.treeFamily);


  const settingSlide = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
  };

  const dataListTreeFamily = [
    {
      avatar:
        "https://scr.vn/wp-content/uploads/2020/08/Anh-chan-dung-gia-dinh-4-nguoi.jpg",
      title: "Gia Phả Họ Phan",
      numberhumans: "10",
      address: "Cửa 8 chi 2 Xóm Thành, Xã Nghi Long, H. Nghi Lộc, T. Nghệ an",
      id: "TF-1",
    },
    {
      avatar:
        "https://scr.vn/wp-content/uploads/2020/08/Anh-chan-dung-gia-dinh-4-nguoi.jpg",
      title: "Gia Phả Họ Phùng",
      numberhumans: "10",
      address: "Cửa 8 chi 2 Xóm Thành, Xã Nghi Long, H. Nghi Lộc, T. Nghệ an",
      id: "TF-2",
    },
    {
      avatar:
        "https://scr.vn/wp-content/uploads/2020/08/Anh-chan-dung-gia-dinh-4-nguoi.jpg",
      title: "Gia Phả Họ Trần",
      numberhumans: "10",
      address: "Cửa 8 chi 2 Xóm Thành, Xã Nghi Long, H. Nghi Lộc, T. Nghệ an",
      id: "TF-3",
    },
    {
      avatar:
        "https://scr.vn/wp-content/uploads/2020/08/Anh-chan-dung-gia-dinh-4-nguoi.jpg",
      title: "Gia Phả Họ Nguyễn",
      numberhumans: "10",
      address: "Cửa 8 chi 2 Xóm Thành, Xã Nghi Long, H. Nghi Lộc, T. Nghệ an",
      id: "TF-4",
    },
  ];

  return (
    <div>
      <div className="homepage-slide">
        <Slider {...settingSlide}>
          <div className="homepage-slide-img">
            <img
              className="homepage-slide-img-1"
              src="http://4.bp.blogspot.com/-J_sg6Pyug94/ULxnyFlF_zI/AAAAAAAAP2o/-aqOcdJt58w/s1600/nengiaphavang.jpg"
              alt="1"
            />
          </div>
          <div className="homepage-slide-img">
            <img
              className="homepage-slide-img-1"
              src="https://cara.edu.vn/wp-content/uploads/2021/06/dong-hanh-voi-cac-gia-dinh-gap-kho-khan-va-cac-cong-doan-giao-hoi.jpg"
              alt="2"
            />
          </div>
          <div className="homepage-slide-img">
            <img
              className="homepage-slide-img-1"
              src="https://giupban.com.vn/wp-content/uploads/2019/09/hinh-anh-gia-dinh.jpg14.jpg"
              alt="3"
            />
          </div>
        </Slider>
      </div>
      <div className="homepage">
        <div className="homepage-list">
          <div className="homepage-list-header">
            <p>Some popular genealogies</p>
          </div>
          <List
            className="homepage-list-list"
            itemLayout="vertical"
            dataSource={dataListTreeFamily}
            renderItem={(item) => (
              <a href={`/watch/${item.id}`}>
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar className="list-avatar" src={item.avatar} />
                    }
                    title={<a href={`/watch/${item.id}`}>{item.title}</a>}
                    description={`Địa chỉ: ${item.address} - Số lượng thành viên: ${item.numberhumans}`}
                  />
                </List.Item>
              </a>
            )}
          />
        </div>
        <div className="homepage-share">
          <div className="homepage-share-header">
            <p>Some Information For Project</p>
          </div>
          <Collapse>
            <Panel header="About Family Tree" key="1">
              <p>1. Create Your Tree Easily</p>
              <p>2. Cooperation with Others</p>
              <p>3. Connecting With Other Family Members</p>
            </Panel>
            <Panel header="How to Start a Family Tree" key="2">
              <p>1. Create Your Account Free</p>
              <p>2. Add what you know about your family</p>
              <p>3. Create Your Tree</p>
            </Panel>
            <Panel header="Search for your family. Discover yourself" key="3">
              <p>
                Liven up your family history by discovering the lives of those
                who came before you
              </p>
            </Panel>
          </Collapse>
        </div>
        <div className="homepage-create">
          <div className="homepage-create-flex">
            <div className="homepage-create-header">
              <p>Sign up, and discover your location</p>
            </div>
            <a href="/register" className="homepage-create-button">
              <Button type="primary" className="button homepage-create-button">
                Create A Free Account
              </Button>
            </a>
            <div className="homepage-create-login">
              <p>
                Do you have any account ? <a href="/login">Login</a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
