import React from 'react'
import { muiDarkSiteTheme, muiLightSiteTheme } from './Layout/MuiTheme'
import { ThemeProvider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Blog } from './Pages/Blog'
import { DevBlog } from './Pages/DevBlog'
import { Layout } from './Layout/Layout'
// import { CONTENT_DE } from "./Content";

function App() {
  const [Theme, setTheme] = React.useState(muiDarkSiteTheme)

  const toggleTheme = () => {
    setTheme((current) => (current === muiDarkSiteTheme ? muiLightSiteTheme : muiDarkSiteTheme))
  }

  return (
    <ThemeProvider theme={Theme}>
      <Layout onToggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="devblog" element={<DevBlog />} />
          <Route path="devblog/html" element={<Blog path="/html.md" />} />
          <Route path="devblog/css" element={<Blog path="/css.md" />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
