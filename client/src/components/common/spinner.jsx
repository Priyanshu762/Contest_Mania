import React from 'react'

const Spinner = () => {
  return (
   /* From Uiverse.io by Javierrocadev */ 
<div classname="flex flex-row gap-2">
  <div classname="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
  <div classname="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
  <div classname="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
</div>
  )
}

export default Spinner