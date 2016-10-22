import { connect } from 'react-redux'
import contentBox from '../views/contentBox.jsx'
import ComponentStyle from '../styles/content.less'

const mapStateToProps = (state, ownProps) => {
  return {
    pageIndex: state.tabChanger.pageIndex
  }
}

const ContentContainer = connect(
  mapStateToProps
)(contentBox)

export default ContentContainer
