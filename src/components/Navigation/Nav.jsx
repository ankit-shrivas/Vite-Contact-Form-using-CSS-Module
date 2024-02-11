import styles from './Nav.module.css';

function Nav() {

  return <>
    <nav className='bg-light'>
      <div className="container-fluid">
        <div className={`${styles.navigation}`} >
          <div className="logo">
            <img src="public/images/logo.png" alt="logo" />
          </div>
          <div>
            <ul>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav >
  </>
}

export default Nav;