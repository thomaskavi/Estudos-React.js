import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span>Lelu Store</span>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Nova Coleção</a>
        <a href="#">Produtos</a>
        <a href="#">Vestidos</a>
        <a href="#">Blusas</a>
      </nav>
    </header>
  )
}

export default Header;