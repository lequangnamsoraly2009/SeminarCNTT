import React, { useState } from 'react'
import { Avatar, Button } from 'antd'
import { CommentOutlined, HeartOutlined } from '@ant-design/icons'
import './post.css'

function Post({ post, isFirstPost }) {
  const [save, setSave] = useState(post.savePost)

  const handleOnClickSavePost = (e) => {
    e.preventDefault()
    setSave(!save)
  }

  return (
    <div className="post">
      <div className="post-body">
        {isFirstPost ? (
          <a href="/post">
            <div className="post-body--image">
              <img
                className="post-body--image-cover"
                src={post.coverImage}
                alt="Cover First"
              />
            </div>
          </a>
        ) : (
          ''
        )}
        <div className="post-body--header">
          <div className="post-body--auth-avatar">
            <a href={`/profile/${post.userName}`}>
              <Avatar
                size={40}
                className="post-body--auth-avatar-detail"
                src={post.avatar}
              />
            </a>
          </div>
          <div>
            <div className="post-body--auth-name">
              {post.displayName}
              <div className="post-body--auth-hover">
                <div className="auth-hover-header">
                  <Avatar
                    size={40}
                    className="auth-hover-header-avatar"
                    src={post.avatar}
                  />
                  <span className="auth-hover-header-username">
                    {post.displayName}
                  </span>
                </div>
                <div className="auth-hover-follow">
                  <Button className="button auth-hover-button">Follow</Button>
                </div>
                <div className="auth-hover-description">
                  <span>Đây là phần giới thiệu của user</span>
                </div>
                <div className="auth-hover-information">
                  <ul className="auth-hover-list">
                    <li className="auth-hover-item">
                      <div className="auth-hover-item-key">EMAIL</div>
                      <div className="auth-hover-item-value">
                        soraly@gmail.com
                      </div>
                    </li>
                    <li className="auth-hover-item">
                      <div className="auth-hover-item-key">LOCATION</div>
                      <div className="auth-hover-item-value">VietNam</div>
                    </li>
                    <li className="auth-hover-item">
                      <div className="auth-hover-item-key">JOINED</div>
                      <div className="auth-hover-item-value">
                        September 10, 2019
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="/post" className="post-body--auth-time">
              {post.createdAt}
            </a>
          </div>
        </div>
        <div className="post-body--indention">
          <div className="post-body--title">
            <a href="/post" className="post-body--title-link">
              {post.postName}
            </a>
          </div>
          <div className="post-body--tags">
            {post.tags.map((tag) => (
              <a
                key={tag}
                className="post-body--tags-link"
                href={`/tags/${tag}`}
              >
                <span className="post-body--tags-prefix">#</span>
                {tag}
              </a>
            ))}
          </div>
          <div className="post-body--action">
            <div className="post-body--action-details">
              <a href="/post" className="post-body--action-details--heart">
                <HeartOutlined />
                <span>
                  {post.hearts} <span> Reactions</span>
                </span>
              </a>
              <a href="/post" className="post-body--action-details--comment">
                <CommentOutlined />
                <span>
                  {post.comments} <span> Comments</span>
                </span>
              </a>
            </div>
            <div className="post-body--action-save">
              <small>{post.timeRead} read</small>
              <Button
                className="button post-body--action-save-button"
                onClick={(e) => handleOnClickSavePost(e)}
              >
                {save ? 'Saved' : 'Save'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
