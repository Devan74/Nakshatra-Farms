"use client";
import {
  Clienttestimonials,
  Contact,
  Footer,
	Gheeprocess,
	Navbar,
} from "../components";


export default function Home() {
  return (
   <main className="overflow-hidden">
    <Navbar/>
    <Gheeprocess/>
    <Clienttestimonials/>
    <Contact/>
    <Footer/>
   </main>
  );
}
