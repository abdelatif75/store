import Navbar from '../Navbar/Navbar'
import style from './Header.module.scss'

export default function Header() {
  return (
    <>
      <Navbar />
      <section className={style.container}></section>
    </>
  )
}
