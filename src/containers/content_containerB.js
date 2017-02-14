import { connect } from 'react-redux'
import contentBoxB from '../views/contentBoxB.jsx'
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

const ContentContainerB = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure:false}
)(contentBoxB)

export default ContentContainerB
