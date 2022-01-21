import React from 'react'
import StylesSheet from './spinner-styles.scss'

type SpinnerProps = React.HTMLAttributes<HTMLElement>

const Spinner: React.FC<SpinnerProps> = (props: SpinnerProps) => {
  return (
    <div {...props} className={[StylesSheet.spinner, props.className].join(' ')}><div></div><div></div><div></div><div></div></div>

  )
}

export default Spinner
