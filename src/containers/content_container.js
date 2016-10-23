import { connect } from 'react-redux'
import contentBox from '../views/contentBox.jsx'
import ComponentStyle from '../styles/content.less'
import { readDb } from '../actions/readDb.js'

const mapStateToProps = (state, ownProps) => {
  return {
    pageIndex: state.tabChanger.pageIndex,
    dbData: state.dbFetcher
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDb: () => {
      dispatch(readDb());
    }
  }
}

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(contentBox)

export default ContentContainer
