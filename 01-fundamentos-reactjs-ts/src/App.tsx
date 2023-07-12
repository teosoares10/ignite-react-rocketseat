import { Post, PostType } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/teosoares10.png',
      name: 'Teodoro Pedro',
      role: 'Web Developer'
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Fala galeraa 👋' },
      { id: 2, type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: 3, type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date("2023-04-2 16:32"),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat'
    },
    content: [
      { id: 1,type: 'paragraph', content: 'Fala galeraa 👋' },
      { id: 2,type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: 3,type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date("2023-03-31 15:42"),
  },
]

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id} 
                post={post}
              /> 
            )
          })}
        </main>
      </div>
    </div>
  )
}


