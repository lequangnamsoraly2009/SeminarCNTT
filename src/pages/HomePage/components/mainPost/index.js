import React from 'react'
import './mainPost.css'
import { Tabs } from 'antd'
import ListPost from '../listPost'

const { TabPane } = Tabs

function MainPost() {
  return (
    <div className="main-list-post">
      <header>
        <Tabs defaultActiveKey="1" onChange>
          <TabPane tab="Feed" key="1">
            <ListPost />
          </TabPane>
          <TabPane tab="Latest" key="2">
            List Latest Here
            <ListPost />
          </TabPane>
          <TabPane tab="Top" key="3">
            List Top Here
            <ListPost />
          </TabPane>
        </Tabs>
      </header>
    </div>
  )
}

export default MainPost
