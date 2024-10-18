import css from './example.module.css'

const CssModules = () => {
  return (
    <div className="wrapper">
      <div className={css.wrapper} />
    </div>
  )
}

export default CssModules
