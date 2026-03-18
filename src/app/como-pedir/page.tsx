import styles from './page.module.css';
import Link from 'next/link';

export default function ComoPedir() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¿Cómo hacer un pedido?</h1>
      
      <div className={styles.content}>
        <section className={styles.card}>
          <div className={styles.icon}>📱</div>
          <h2>Paso 1: Contactanos por Instagram</h2>
          <p>
            Por el momento nos manejamos de manera personalizada a través de nuestro Instagram oficial 
            <a href="https://instagram.com/ropitadrip" target="_blank" rel="noopener noreferrer" className={styles.link}> @ropitadrip</a>. 
            Envianos un MD (Mensaje Directo) con una captura o el link de la prenda que te gustó.
          </p>
        </section>

        <section className={styles.card}>
          <div className={styles.icon}>💳</div>
          <h2>Paso 2: Coordinamos el Pago</h2>
          <p>
            Te confirmamos el stock en el talle deseado y te pasamos los datos para realizar el pago. 
            Aceptamos transferencia bancaria, Mercado Pago o efectivo si sos de la zona.
          </p>
        </section>

        <section className={styles.card}>
          <div className={styles.icon}>📦</div>
          <h2>Paso 3: Envío por Andreani</h2>
          <p>
            Una vez acreditado el pago, preparamos tu paquete al instante. Realizamos todos 
            nuestros envíos a través de <strong>Andreani</strong> para que tu ropa llegue rápido 
            y seguro a cualquier parte del país. Te enviaremos el código de seguimiento enseguida.
          </p>
        </section>
      </div>

      <div className={styles.action}>
        <a href="https://instagram.com/ropitadrip" target="_blank" rel="noopener noreferrer" className={styles.button}>
          Ir al Instagram
        </a>
        <Link href="/" className={styles.secondaryButton}>
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
}
