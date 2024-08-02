// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {each} = props
  const {id, language} = each
  return (
    <li>
      <button type="button" className="list-btns">
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
