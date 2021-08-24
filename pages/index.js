import Head from 'next/head'
import Link from 'next/link'

export default function Home({posts}) {
  console.log(posts);
  return (
    <div>
      <h1>어서오세요!</h1>
      <ul>
        {posts.map(post=> (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

// 1. getStaticProps : SSG

export const getStaticProps = async()=> {
  const res = await fetch('http://localhost:8080/api/posts');
  const posts = await res.json();
  
  return {
    props: {
      posts
    },
    revalidate: 20
  }
}

// 2. getServerSideProps : SSR
// 서버에 매번 요청
// export const getServerSideProps = async()=> {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10'); http://localhost:8080/api/posts
//   const posts = await res.json();
  
//   return {
//     props: {
//       posts
//     }
//   }
// }