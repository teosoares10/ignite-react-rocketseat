import { Avatar } from './Avatar'

import { PencilLine } from 'phosphor-react'

import style from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img 
        className={style.cover}
        src={`https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40`} 
        alt="" 
      />
      <div className={style.profile}>
        <Avatar src="https://github.com/teosoares10.png" />

        <strong>Teodoro Pedro</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}