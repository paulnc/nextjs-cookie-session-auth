import Link from "next/link"

  const Navbar = () => {

    return (
        <nav>
            <Link rel="stylesheet" href="/">Homepage</Link> 
            <Link rel="stylesheet" href="/premium">Premium</Link> 
            <Link rel="stylesheet" href="/profile">Profile</Link> 
            <Link rel="stylesheet" href="/login">Login</Link> 
        </nav>
    )
  }
  export default Navbar