import styles from "./style.module.css"

console.log("B", styles);

function B() {
  return (
    <div className={styles.title}>B</div>
  )
}

export default B
