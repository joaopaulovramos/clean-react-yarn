import React from 'react'
import StylesSheet from './spinner-styles.scss'

type SpinnerProps = React.HTMLAttributes<HTMLElement>

const Spinner: React.FC<SpinnerProps> = (props: SpinnerProps) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div {...props} className={[StylesSheet.spinner, props.className].join(' ')}><div></div><div></div><div></div><div></div></div>

  )
}

export default Spinner
