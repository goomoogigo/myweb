import React from 'react';
import {Image} from 'semantic-ui-react'

import Comments from './comments.js'

import ny from "./zo.jpeg"
import 사막 from "./사막.png"

function App() {
  return (
    <div>
<Image src = {ny} centered />
<Comments />
    </div>
  )
}

export default App;
