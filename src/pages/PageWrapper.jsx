import React from 'react'

const PageWrapper = ({ children }) => {
  return (
    <div className='min-h-full w-full mt-17 bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-500'>{children}</div>
  )
}

export default PageWrapper