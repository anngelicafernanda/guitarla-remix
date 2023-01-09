import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import ListadoGuitarras from "~/components/listado-guitarras"
import stylesGuitarras from "~/styles/guitarras.css"
import ListadoPosts from "~/components/listado-posts"
import stylesPosts from "~/styles/blog.css"

export function meta() {}

export function links() {
 return [
    {
      rel: "stylesheet",
      href: stylesGuitarras
    },
    {
      rel: "stylesheet",
      href: stylesPosts
    }
  ]
}

export async function loader() {
  const [guitarras, posts] = await Promise.all([getGuitarras(), getPosts()]);

  return {
    guitarras: guitarras.data,
    posts: posts.data
  };
}

function Index() {
  const { guitarras, posts } = useLoaderData();
 

  return (
    <>
    <main className="contenedor">
     <ListadoGuitarras
     guitarras={guitarras}
     />
    </main>
    <section className="contenedor">
      <ListadoPosts
      posts={posts}/>
    </section>
    </>
  );
}

export default Index;
