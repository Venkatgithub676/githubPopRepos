// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {each, onClickBtns, isActive} = props
  const {id, language} = each

  const borderChange = isActive ? 'border-change' : ''

  const onClickLangBtns = () => {
    onClickBtns(id)
  }
  return (
    <li>
      <button
        type="button"
        onClick={onClickLangBtns}
        className={`list-btns ${borderChange}`}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
