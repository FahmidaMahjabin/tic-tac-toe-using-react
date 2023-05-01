import Image from 'next/image'
import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
const inter = Inter({ subsets: ['latin'] })
import App from './_app';
export default function Home() {
  return (
    App
  )
}
