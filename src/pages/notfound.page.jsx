import { Link } from "react-router";

const NotfoundPage = () => {
  return (
    <main id ="center" className='page'>
      <h1>404</h1>
      <h1>Not Found</h1>
      <Link to= {"/"} >Go to Home</Link>
    </main>
  )
}

export default NotfoundPage;
