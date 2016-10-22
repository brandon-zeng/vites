import { connect } from 'react-redux'
import HeaderComponent from '../views/header.jsx'
import { changeTab } from '../actions/changeTab.js'

const mapStateToProps = (state, ownProps) => {
  return {
    pageIndex: state.tabChanger.pageIndex
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (id) => {
      dispatch(changeTab(id));
    }
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)

export default HeaderContainer
