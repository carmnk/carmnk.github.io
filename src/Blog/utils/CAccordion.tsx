import { mdiChevronDown } from '@mdi/js'
import Icon from '@mdi/react'
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material'

export type CAccordionProps = {
  content: React.ReactNode
  summary: React.ReactNode
}

export const CAccordion = (props: CAccordionProps) => {
  const { content, summary } = props

  const summaryText = typeof summary === 'string' ? <Typography>{summary}</Typography> : summary
  return (
    <Accordion elevation={3} defaultExpanded={false} disableGutters>
      <AccordionSummary
        expandIcon={<Icon path={mdiChevronDown} size={1} />}
        aria-controls="expandable-content"
        sx={{ bgcolor: 'background.paper', '& .MuiAccordionSummary-content': { mt: 0.5, mb: 0.5 } }}
      >
        {summaryText}
      </AccordionSummary>

      <AccordionDetails sx={{ p: 0 }}>{content}</AccordionDetails>
    </Accordion>
  )
}
