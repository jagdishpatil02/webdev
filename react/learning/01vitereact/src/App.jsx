
import Hello from './Hello.jsx';
// import React from 'react'
const username = 'jagdish';


// const createElement = React.createElement('a', {href: 'https://www.jagdish.vercel.app', target:"_blank" }, 'go to website')
function App(){

   return(
      <>
      <Hello/> {username}
      </>
   )
}


export default App


