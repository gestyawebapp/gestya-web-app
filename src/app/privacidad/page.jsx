import styles from "./styles.module.css";

const PrivacidadPage = () => {
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.title}>Política de privacidad</h1>
        <div className={styles.container}>
          <p className={styles.text}>
            La presente Política de Privacidad establece los términos en que se
            utiliza y protege la información que es proporcionada por sus
            usuarios al momento de utilizar nuestra Aplicación. Esta compañía se
            encuentra comprometida con la seguridad de los datos de sus
            usuarios. Cuando le solicitamos rellenar los campos de información,
            lo hacemos asegurando que sólo se emplearán los mismos de acuerdo
            con los términos de este documento. Sin embargo esta Política de
            Privacidad puede cambiar con el tiempo o ser actualizada por lo que
            le recomendamos y enfatizamos revisar continuamente esta página para
            asegurarse que está de acuerdo con dichos cambios.
          </p>
        </div>
        <div className={styles.container}>
          <h2 className={styles.subtitle}>Información que es recogida</h2>
          <p className={styles.text}>
            Nuestra Aplicación podrá recoger información personal por ejemplo:
            nombre y apellido, información de contacto, como su dirección de
            correo electrónico, o ubicación. Así mismo cuando sea necesario
            podrá ser requerida información específica para procesar algún
            pedido o realizar una entrega.
          </p>
        </div>
        <div className={styles.container}>
          <h2 className={styles.subtitle}>Uso de la información recogida</h2>
          <p className={styles.text}>
            Nuestro Aplicación emplea la información con el fin de nutrir y
            dejar registro de las tareas que usted realizó en nuestro servidor
            para ser utilizados por empresas a la cual usted pertenece. Es
            posible que sean enviados correos electrónicos periódicamente a
            través de nuestro sitio con resúmenes de las tareas realizadas.
          </p>
        </div>
        <div className={styles.container}>
          <p className={styles.text}>
            Estamos altamente comprometidos para cumplir con el compromiso de
            mantener su información segura. Usamos los sistemas más avanzados y
            los actualizamos constantemente para asegurarnos que no exista
            ningún acceso no autorizado.
          </p>
        </div>
        <div className={styles.container}>
          <h2 className={styles.subtitle}>
            Control de su información personal
          </h2>
          <p className={styles.text}>
            En cualquier momento usted puede restringir la recopilación o el uso
            de la información que es recolectada por nuestra Aplicación. El
            titular de los datos, previa acreditación de su identidad, tiene
            derecho a solicitar y obtener información de sus datos personales y
            podrá en cualquier momento solicitar el retiro o bloqueo de su
            nombre de los bancos de datos Esta compañía no venderá, cederá ni
            distribuirá la información personal que es recopilada sin su
            consentimiento, salvo que sea requerido por un juez con un orden
            judicial.
          </p>
        </div>
        <div className={styles.container}>
          <p className={styles.text}>
            Se reserva el derecho de cambiar los términos de la presente
            Política de Privacidad en cualquier momento.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacidadPage;
