import React from 'react'
import { Typography, useMediaQuery } from '@mui/material'
import { CGrid } from '../Components/Basics/CGrid'
import { CContainer } from '../Components/Basics/CContainer'
import { CCard } from '../Components/CCard'
import { navigateHashPortfolio, navigateHashProfile } from '../utils/navigation'

const portfolioGridTemplateColumns = {
  xs: 'repeat(1, auto)',
  md: 'repeat(auto-fit, minmax(420px, 1fr))',
  lg: 'repeat(auto-fit, minmax(512px, 1fr))',
}

export const Portfolio = () => {
  const isDesktop = useMediaQuery('(min-width:600px)')
  const defaultColor = '#333'
  return (
    <CContainer paddingTop="64px" paddingBottom="64px" id="portfolio-start">
      <Typography
        variant={isDesktop ? 'h3' : 'h5'}
        component="div"
        color={'primary.main'}
        marginBottom="8px"
        onClick={navigateHashPortfolio}
        sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
      >
        Mein Portfolio
      </Typography>
      <CGrid gridTemplateColumns={portfolioGridTemplateColumns} gap={4} justifyItems="center" >
        <CCard
          title="Dashboards"
          imageUrl="/dashboard2.jpg"
          content={
            <ul>
              <Typography variant="body1" color="text.primary" component="li">
                Dashboards werden zur tabellarischen oder graphischen Zusammenfassung von größeren Datenmengen eingesetzt. {' '}
              </Typography>
              <Typography variant="body1" color="text.primary" component="li">
                Neben der Visualisierung kann auch das Datenmanagement von Datensätzen mit komplexen Interdependenzen im
                Vordergrund stehen.{' '}
              </Typography>
              <Typography variant="body1" color="text.primary" component="li">
                Die Ergänzung von effizienzsteigernden Maßnahmen (wie z.B.automatische Dokumentenerstellung) ist
                ebenfals ein guter Grund ein Dashboard im Betrieb einzuführen.
              </Typography>
            </ul>
          }
        />
        <CCard
          title="Websites und Apps"
          imageUrl="/webapp.jpg"
          content={
            <ul>
              <Typography variant="body1" color="text.primary" component="li">
                Reponsive Webseiten optimiert für Mobiltelefone bishin zum Desktop-Monitor
              </Typography>
              <Typography variant="body1" color="text.primary" component="li">
                Progressive Web Apps (browserbasierte Apps)
              </Typography>
              <Typography variant="body1" color="text.primary" component="li">
                Hybride Apps (derzeit nur Android) mit React Native oder Ionic
              </Typography>
              <Typography variant="body1" color="text.primary" component="li">
                Statische Website als kostengünstigste Option ohne Backendserver
              </Typography>
              <Typography variant="body1" color="text.primary" component="li">
                Full-Stack Website-Systeme mit Backend (derzeit Node.js, demnächst auch Python) via REST oder GraphQL
                API
              </Typography>
            </ul>
          }
        />
        <CCard
          title="Backend-Systeme"
          imageUrl="/server.jpg"
          content={
            <ul>
              <Typography variant="body1" color="text.primary" component="li">
                Serversysteme sind erforderlich wenn Sie mit Ihrer Website oder App neben statischem Inhalt auch 'dynamische
                Services' mit Datenaustausch anbieten möchten.
              </Typography>
              <Typography variant="body1" color="text.primary" component="li">
                Ein Reservierungssystem ist ein Beispiel, das eine serverbasierte Speicherung der Termine und
                Kundendaten erfordert.
              </Typography>

              <Typography variant="body1" color="text.primary" component="li">
                Neben der klassischen monolithische Server-Architektur biete ich auch Microservices, container- oder
                'serverlose' (z.B. AWS Lambda) Backendsysteme an.
              </Typography>
            </ul>
          }
        />
        <CCard
          title="Datenbank-Systeme"
          imageUrl="/database.jpg"
          content={
            <ul>
              <Typography variant="body1" color="text.primary" component="li">
                Datenbanksysteme ermöglichen eine effiziente und geteilte Nutzung, Speicherung und Verarbeitung Ihrer
                Daten.
              </Typography>
              <Typography variant="body1" color="text.primary" component="li">
                Datenbanken benötigen ein Backendsystem welches die Daten über einen Client abruft, verteilt und
                verarbeitet. Daher biete ich Sie gewöhnlich als Paket an.
              </Typography>
              <Typography variant="body1" color="text.primary" component="li">
                Mein Portfolio umfasst sowohl relationalen Datenbanken (v.a. Postgres) als auch oder NOSQL Datenbanken
                (z.B. MongoDB)
              </Typography>
            </ul>
          }
        />
      </CGrid>
    </CContainer>
  )
}
