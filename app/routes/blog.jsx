import { useLoaderData } from "@remix-run/react"
import ListadoPosts from "~/components/listado-posts"
import { getPosts } from "~/models/posts.server"
import styles from "~/styles/blog.css"

export function meta(){
  return {
    title: "GuitarLA - nuestro blog",
    descripcion: "GuitarLA, Blog de música y venta de guitarras"  }
}

export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

export async function loader (){
const posts = await getPosts()
console.log(posts)
return posts.data
}


const Blog = () => {
  const posts = useLoaderData()
  return (
   <main className="contenedor">
    <ListadoPosts
    posts={posts}
    />
   </main>
  )
}

export default Blog
