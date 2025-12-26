export default function SignIn() {
  return (
    <div style={{
      position: 'fixed',    // Screen par fix karne ke liye
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'white', 
      zIndex: 9999,          
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black'         
    }}>
      <div className="signin-container">
        <div className="left-box"> {/* Yahan Image aayegi */} </div>
        <div className="right-box"> {/* Yahan Form aayegi */} </div>
      </div>







    </div>
  )
}
  
  
