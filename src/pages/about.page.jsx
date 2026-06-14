import Navbar from "../components/navbar";

const AboutPage = () => {
  return (
    <main className="h-screen border border-red-400 flex justify-center items-center gap-10">
      <Navbar/>
      <p className="text-[13px] text-red-200 border border-purple-50 rounded-sm px-4 py-2 hover:bg-blue-400 hover:text-white">About Page</p>
      <p className=""></p>
    </main>
  )
}

export default AboutPage;
