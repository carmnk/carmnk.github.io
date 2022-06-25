export type ContentType = {
  home: {
    title: string
    subtitle: string
    subtitle2: string
  }
  profile: {
    header: string
    titleName: string
    titleProfession: string
    subtitle: string
  }
  experience: { timespan: string; text: string }[]
  education: { timespan: string; text: string | { text: string; subtext?: string }[] }[]
}

export const CONTENT_DE: ContentType = {
  home: {
    title: 'Hi, Ich bin Carsten Menk,\nFullstack Developer',
    subtitle: 'Web-Entwicklung mit System',
    subtitle2: 'Entwickler und Ingenieur mit Blick für das große Ganze',
  },
  profile: {
    header: 'Profil',
    titleName: 'Carsten Menk',
    titleProfession: 'Diplom-Wirtschaftsingenieur',
    subtitle: '',
  },
  experience: [
    { timespan: 'Seit 01/2022', text: 'Freiberuflicher Web-Entwickler' },
    { timespan: '09/2021 - 12/2021', text: 'React-TechChart Open Source Projekt' },
    { timespan: '07/2019 - 08/2021', text: 'Sabbatical / Weiterbildung' },
    {
      timespan: '03/2016 - 06/2019',
      text: 'Projektleiter in der Automobilindustrie\nProdukt- und Prozessplanung im Karosseriebau\nTeams bis zu 10 Mitarbeitern',
    },
    {
      timespan: '01/2013 - 02/2016',
      text: 'Projektingenieur in der Automobilindustrie\nProdukt- und Prozessplanung im Karosseriebau',
    },
  ],
  education: [
    {
      timespan: '10/2006 - 10/2012',
      text: [
        { text: 'Diplom im Wirtschaftsinenieurwesen' },
        { text: 'Universität Siegen', subtext: 'Vertiefung: Fertigungstechnik und Controlling' },
      ],
    },
    {
      timespan: '09/1997 - 09/2006',
      text: [{ text: 'Weidiggymnasium Butzbach', subtext: 'allgemeine Hochschulreife' }],
    },
  ],
}

export const CONTENT_ENG: ContentType = {
  home: {
    title: "Hi, I'm Carsten Menk,\nFullstack Developer",
    subtitle: 'Web-Development with systematic approach',
    subtitle2: 'Developer and engineer with an eye for the big picture',
  },
  profile: {
    header: 'Profile',
    titleName: 'Carsten Menk',
    titleProfession: 'Diplom-Wirtschaftsingenieur',
    subtitle: '(german diploma in industrial engineering)',
  },
  experience: [
    { timespan: 'Since 01/2022', text: 'Freelancing Web-Developer' },
    { timespan: '09/2021 - 12/2021', text: 'react-techchart open source project' },
    { timespan: '07/2019 - 08/2021', text: 'Sabbatical / Coding Education' },
    {
      timespan: '03/2016 - 06/2019',
      text: 'Project Manager in automotive service industry\nProcess engineering in body shop\nTeams up to 10 employees ',
    },
    {
      timespan: '01/2013 - 02/2016',
      text: 'Project Engineer in automotive industry\nProcess engineering in body shop',
    },
  ],
  education: [
    {
      timespan: '10/2006 - 10/2012',
      text: [
        { text: 'Diploma in Industrial Engineering', subtext: '(german national degree, comparable to master degree)' },
        { text: 'University of Siegen, Germany', subtext: 'Focus: Production Engineering and Controlling' },
      ],
    },
    {
      timespan: '09/1997 - 09/2006',
      text: "High School (German 'Abitur')",
    },
  ],
}
