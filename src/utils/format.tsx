import React from 'react'

export const parseStringNewLines = (text: string) =>
  text?.split('\n')?.map((textFrag, tIdx) => (
    <React.Fragment key={tIdx}>
      {textFrag}
      <br />
    </React.Fragment>
  ))
