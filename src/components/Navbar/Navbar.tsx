import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src="logo.svg" alt="logo" />
        <span>lamaadmin</span>
      </div>
      <div className='icons'>
        <img className='icon' src="/search.svg" alt="search" />
        <img className='icon' src="/app.svg" alt="app" />
        <img className='icon' src="expand.svg" alt="expand" />
        <div className='notification'>
          <img src="/notifications.svg" alt="notifications" />
          <span>1</span>
        </div>
        <div className='user'>
          <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/woman-portrait-long-shot.jpg" alt="notification" />
          <span>Jane</span>
        </div>
        <img className='icon' src="/settings.svg" alt="settings" />
      </div>
    </div>
  )
}

export default Navbar