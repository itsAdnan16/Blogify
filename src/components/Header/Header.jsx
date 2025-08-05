import React ,{useState}from 'react'
import { Container, Logo, LogoutBtn } from '../'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='py-3 shadow bg-[#42273B]'>
      <Container>
        <nav className='flex items-center justify-between flex-wrap'>
          {/* Logo */}
          <div className='flex items-center mr-4'>
            <Link to='/'>
              <Logo width='40px' />
            </Link>
          </div>

          {/* Hamburger icon (only on small screens) */}
          <div className='block sm:hidden'>
            <button
              className='flex items-center px-3 py-2 border rounded text-white border-white'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className='fill-current h-4 w-4' viewBox='0 0 20 20'>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>

          {/* Menu items */}
          <ul className={`w-full sm:w-auto sm:flex items-center ml-auto ${menuOpen ? 'block' : 'hidden'}`}>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug)
                      setMenuOpen(false) // close menu on navigation
                    }}
                    className='text-right block px-6 py-2 text-white hover:bg-[#ABC8C0] hover:text-black rounded-full duration-200'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>

  )
}

export default Header