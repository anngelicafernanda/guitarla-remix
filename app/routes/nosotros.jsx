import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css"

export function meta(){
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de Guitarras, Blog de Música"
  }
}

export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "preload",
      href: imagen,
      as: "image"
    }
  ]
}

const Nosotros = () => {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>
            Proin vitae vulputate elit, eget iaculis neque. Nullam congue massa
            eu auctor bibendum. Quisque et purus ut risus auctor ultrices a ut
            ante. In commodo magna cursus nunc accumsan varius. Proin viverra
            mauris quam, non egestas odio mollis eget. Integer cursus a ligula
            sit amet tincidunt. Duis nec malesuada risus, vitae commodo diam.
            Vivamus venenatis vitae magna ut ornare. Nullam in sagittis dolor.
            Duis porttitor sem in lacus pretium rutrum.
          </p>
          <p>
            Proin vitae vulputate elit, eget iaculis neque. Nullam congue massa
            eu auctor bibendum. Quisque et purus ut risus auctor ultrices a ut
            ante. In commodo magna cursus nunc accumsan varius. Proin viverra
            mauris quam, non egestas odio mollis eget. Integer cursus a ligula
            sit amet tincidunt. Duis nec malesuada risus, vitae commodo diam.
            Vivamus venenatis vitae magna ut ornare. Nullam in sagittis dolor.
            Duis porttitor sem in lacus pretium rutrum.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
