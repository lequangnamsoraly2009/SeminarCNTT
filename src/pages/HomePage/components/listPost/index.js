import React from 'react'
import './listPost.css'
import Post from '../post'

function ListPost() {
  const listPostTest = [
    {
      id: 'xxx',
      coverImage:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--kJh8Z5pd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/euv8g14astd4or1677va.jpg',
      avatar:
        'https://phunugioi.com/wp-content/uploads/2020/04/anh-gai-xinh-hot-girl-nhat-ban.jpg',
      userName: 'soraly',
      displayName: 'Soraly',
      createdAt: 'Oct 20 (20 hour ago)',
      postName: 'A righteous PR',
      tags: ['reactjs', 'javascript', 'opensource'],
      hearts: '69',
      comments: '96',
      timeRead: '9 min',
      savePost: false,
    },
    {
      id: 'xxxx',
      coverImage:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--kJh8Z5pd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/euv8g14astd4or1677va.jpg',
      avatar:
        'https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-43-edited.jpg',
      userName: 'gomandev',
      displayName: 'Gomandev',
      createdAt: 'Oct 21 (1 hour ago)',
      postName: 'Easiest way to deploy your app!',
      tags: ['node', 'javascript', 'beginners', 'qovery'],
      hearts: '4',
      comments: '1',
      timeRead: '3 min',
      savePost: false,
    },
    {
      id: 'xxxxx',
      coverImage:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--kJh8Z5pd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/euv8g14astd4or1677va.jpg',
      avatar:
        'https://image-us.eva.vn/upload/2-2021/images/2021-04-29/co-gai-xinh-dep-va-tuoi-tho-day-am-anh-chi-vi-vet-bong-do-noi-cam-lon-dang-soi-123-1619681022-832-width660height660.jpg',
      userName: 'bitsbill1999',
      displayName: 'JS Bits with Bill',
      createdAt: 'Oct 21 (10 hour ago)',
      postName: '3 Uncommon but useful HTML elements',
      tags: ['webdev', 'javascript', 'html', 'codenewbie'],
      hearts: '100',
      comments: '29',
      timeRead: '1 hour',
      savePost: false,
    },
  ]

  return (
    <div className="list-post">
      {listPostTest.map((post, index) => (
        <Post key={post.id} post={post} isFirstPost={index === 0} />
      ))}
    </div>
  )
}

export default ListPost
