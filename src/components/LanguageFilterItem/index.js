import './index.css'

const LanguageFilterItem = props => {
  const {setActiveLanguageFilterId, isActive, languageFilterDetails} = props
  const isActiveClassName = isActive ? 'language-btn active' : 'language-btn'
  const {id, language} = languageFilterDetails

  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        type="button"
        onClick={onClickLanguageFilter}
        className={isActiveClassName}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
