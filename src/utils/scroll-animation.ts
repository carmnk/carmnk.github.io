import React from 'react'

export const useScrollAnimations = () => {
  // Parallax-Scroll-Effect
  React.useEffect(() => {
    const layoutRoot = document?.getElementById('layoutRoot')
    function updateBackgroundImage() {
      // Get the landing page element
      const element = document.querySelector('.title-curtain') as HTMLElement
      // Must be between between 1 and -1 exclusive - 0 yields no effect,
      // negative values shift image up as the user scrolls down
      // positive values shift image down as the user scrolls down
      const parallaxEffect = -0.25
      // Must be the same as css background-position-y value
      const offset = 0 //-60;
      // Update the background-position-y style property using the vertical scroll position only if on desktop
      if (element?.style) {
        console.log(`${parallaxEffect * (layoutRoot?.scrollTop ?? 0) + offset}px`)
        element.style.top = `${parallaxEffect * (layoutRoot?.scrollTop ?? 0) + offset}px`
      }

      const reactSkillBarElement = document.getElementById('react-skill-bar')
      if (reactSkillBarElement) {
        const isInView =
          (reactSkillBarElement?.getBoundingClientRect?.()?.top || 0) <
          (window.innerHeight || document.documentElement.clientHeight)
        if (isInView) reactSkillBarElement.style.width = '90%'
        else reactSkillBarElement.style.width = '0%'
      }
      const tskillBarElement = document.getElementById('ts-skill-bar')
      if (tskillBarElement) {
        const isInView =
          (tskillBarElement?.getBoundingClientRect?.()?.top || 0) <
          (window.innerHeight || document.documentElement.clientHeight)
        if (isInView) tskillBarElement.style.width = '80%'
        else tskillBarElement.style.width = '0%'
      }
      const jskillBarElement = document.getElementById('js-skill-bar')
      if (jskillBarElement) {
        const isInView =
          (jskillBarElement?.getBoundingClientRect?.()?.top || 0) <
          (window.innerHeight || document.documentElement.clientHeight)
        if (isInView) jskillBarElement.style.width = '80%'
        else jskillBarElement.style.width = '0%'
      }
      const jestSkillBarElement = document.getElementById('jest-skill-bar')
      if (jestSkillBarElement) {
        const isInView =
          (jestSkillBarElement?.getBoundingClientRect?.()?.top || 0) <
          (window.innerHeight || document.documentElement.clientHeight)
        if (isInView) jestSkillBarElement.style.width = '70%'
        else jestSkillBarElement.style.width = '0%'
      }
      const nodeSkillBarElement = document.getElementById('node-skill-bar')
      if (nodeSkillBarElement) {
        const isInView =
          (nodeSkillBarElement?.getBoundingClientRect?.()?.top || 0) <
          (window.innerHeight || document.documentElement.clientHeight)
        if (isInView) nodeSkillBarElement.style.width = '80%'
        else nodeSkillBarElement.style.width = '0%'
      }
      const sqlSkillBarElement = document.getElementById('sql-skill-bar')
      if (sqlSkillBarElement) {
        const isInView =
          (sqlSkillBarElement?.getBoundingClientRect?.()?.top || 0) <
          (window.innerHeight || document.documentElement.clientHeight)
        if (isInView) sqlSkillBarElement.style.width = '80%'
        else sqlSkillBarElement.style.width = '0%'
      }
      const germanSkillBarElement = document.getElementById('german-skill-bar')
      if (germanSkillBarElement) {
        const isInView =
          (germanSkillBarElement?.getBoundingClientRect?.()?.top || 0) <
          (window.innerHeight || document.documentElement.clientHeight)
        if (isInView) germanSkillBarElement.style.width = '100%'
        else germanSkillBarElement.style.width = '0%'
      }
      const englishSkillBarElement = document.getElementById('english-skill-bar')
      if (englishSkillBarElement) {
        const isInView =
          (englishSkillBarElement?.getBoundingClientRect?.()?.top || 0) <
          (window.innerHeight || document.documentElement.clientHeight)
        if (isInView) englishSkillBarElement.style.width = '90%'
        else englishSkillBarElement.style.width = '0%'
      }
      const fadeInIcons = document.querySelectorAll<HTMLElement>('.fadein')
      if (fadeInIcons) {
        fadeInIcons.forEach((ficon) => {
          const isInView =
            (ficon?.getBoundingClientRect?.()?.top || 0) < (window.innerHeight || document.documentElement.clientHeight)
          if (isInView) ficon.style.opacity = '1'
          else ficon.style.opacity = '0'
        })
      }
      const slideInIcons = document.querySelectorAll<HTMLElement>('.slidein-left')
      if (slideInIcons) {
        slideInIcons.forEach((icon) => {
          const isInView =
            (icon?.getBoundingClientRect?.()?.top || 0) < (window.innerHeight || document.documentElement.clientHeight)
          if (isInView) icon.style.left = '0%'
          else icon.style.left = '-100%'
        })
      }
      const slideInBottomElements = document.querySelectorAll<HTMLElement>('.card')
      if (slideInBottomElements) {
        slideInBottomElements.forEach((el) => {
          const isInView =
            (el?.getBoundingClientRect?.()?.top || 0) < (window.innerHeight || document.documentElement.clientHeight)
          if (isInView) el.classList.add('fade-in-bottom')
          else el.classList.remove('fade-in-bottom')
        })
      }
      const about = document.querySelectorAll<HTMLElement>('#about-start')?.[0]
      const scrollTopIconButton = document.querySelectorAll<HTMLElement>('#scroll-top-iconbutton')?.[0]
      if (about && scrollTopIconButton) {
        const isOutScrolled = (about?.getBoundingClientRect?.()?.top || 0) <= 16
        if (isOutScrolled) {
          scrollTopIconButton.style.opacity = '1'
        } else scrollTopIconButton.style.opacity = '0'
      }

      //   const menu = document.querySelectorAll<HTMLElement>('#hidden-menu-bar')?.[0]
      //   const menuContainer = document.querySelectorAll<HTMLElement>('#home-start')?.[0]

      //   if (menu && menuContainer) {
      //     console.log(menuContainer.clientWidth)
      //     menu.style.width = `${menuContainer.clientWidth}px`
      //   }
      //   // console.log(about)
      //   if (about && menu) {
      //     const isOutScrolled = (about?.getBoundingClientRect?.()?.top || 0) < 0

      // if (isOutScrolled) {
      //   menu.style.position = 'fixed'
      //   menu.style.width = '100'
      // } else menu.style.position = 'static'
      // console.log(
      //   about?.getBoundingClientRect?.()?.top || 0,
      //   window.innerHeight,
      //   document.documentElement.clientHeight
      // )
      //   }
    }

    layoutRoot?.addEventListener?.('scroll', updateBackgroundImage)
    return () => {
      layoutRoot?.removeEventListener?.('scroll', updateBackgroundImage)
    }
  }, [])
}
