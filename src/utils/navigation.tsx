export const navigateToLinkedIn = () => {
    window?.open?.('https://www.linkedin.com/in/cmenk/', '_blank', 'noopener')
  }
  export const navigateToGithub = () => {
    window?.open?.('https://github.com/carmnk', '_blank', 'noopener')
  }
  
  export const navigateToXing = () => {
    window?.open?.('https://www.xing.com/profile/Carsten_Menk4/cv', '_blank', 'noopener')
  }
  
  export const sendMail = () => {
    window.location.href = 'mailto:kontakt@cmenk.online'
  }
  
  
  
  export const navigateHashPortfolio = () => {
    document.getElementById('portfolio-start')?.scrollIntoView?.({ behavior: 'smooth' })
  }
  
  export const navigateHashProfile = () => {
    document.getElementById('profile-start')?.scrollIntoView?.({ behavior: 'smooth' })
  }
  
  export const navigateHashAbout = () => {
    document.getElementById('about-start')?.scrollIntoView?.({ behavior: 'smooth' })
  }
  
  export const navigateHashSkills = () => {
    document.getElementById('skills-start')?.scrollIntoView?.({ behavior: 'smooth' })
  }
  
  export const navigateHashTop = () => {
    document.getElementById('layoutRoot')?.scroll({ top: 0, behavior: 'smooth' })
  }
  