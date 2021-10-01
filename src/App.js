
import React, {useState} from 'react';
import Header from './components/Header';
import Button from './components/Button';
import { FaTimes } from 'react-icons/fa';
function App() {
  const [newPost, setNewPost] = useState({
    id: ``,
    name: '',
    time: '',
    isRead: false
  })
  const [posts, setPosts] = useState([
    {
      id: '1',
      name: 'Weather',
      time: 'Sept 2021',
      isRead: false
    },
    {
      id: '2',
      name: 'Vehicle',
      time: 'Oct 2021',
      isRead: false
    },
    {
      id: '3',
      name: 'Hobby',
      time: 'Nov 2021',
      isRead: false
    }
  ])
  const onAdd = (e) => {
    e.peventDefault()
    console.log('Added new post',e.target.elements);
    const { name } = e.target.elements;
    setPosts([
      ...posts,
      {
        id: '12',
        name: name,
        time: 'March 2022',
        isRead:false
      }
    ])
  }
  return (
    <div className="App">
    <Header title="Header" />
    {posts.map((post) => (
      <h3
      onDoubleClick={() => {
        setPosts(
          posts.map((p) => p.id === post.id ? {...p, isRead:!p.isRead} : p )
        )
      }}
      style={post.isRead ? {backgroundColor:'#fff'}:{backgroundColor:'grey'}}
      key={post.id}>{post.name}
      <FaTimes
      color="red"
      onClick={() => {
        setPosts(posts.filter((p) => p.id !== post.id))
      }}/></h3>
    ))}
    <form onSubmit={onAdd}>
    <input placeholder="Type here" name="name" />
    <Button title="Add" color="blue"/>
    </form>
    </div>
  );
}

export default App;
