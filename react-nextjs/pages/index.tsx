import Link from 'next/link'
import Layout from '../components/Layout'
import Punto1 from '../components/Punto1.1';
import Punto5 from '../components/punto5/Punto5';
import Punto8 from '../components/punto7/Formulario7';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
    <p>
      <Link href="/Punto1.1">Punto1.1</Link>
    </p>
    <p>
      <Link href="/punto5">Punto5</Link>
    </p>
    <p>
      <Link href="/punto8">Punto7</Link>
    </p>
  </Layout>
)

export default IndexPage
