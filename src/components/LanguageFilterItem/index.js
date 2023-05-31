// Write your code here
const languageFilterItem = props => {
  const {languageItem, onSelectLanguage} = props
  const {id, language} = languageItem

  const onClickTab = () => {
    onSelectLanguage(id)
    console.log('hhhhh')
  }
  return (
    <div>
      <button type="button" onClick={onClickTab}>
        <h1>{language}</h1>
      </button>
    </div>
  )
}

export default languageFilterItem
