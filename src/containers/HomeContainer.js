import { connect } from "react-redux";

import * as courseAction from "../store/actions/courseAction";
import * as loginAction from "../store/actions/loginAction";
import CourseLayout from "../components/CourseLayout/CourseLayout";

const mapStateToProps = state => {
  return {
    courseData: state.courseReducer.course,
    session: state.loginReducer.authenticate,
    cartData: state.loginReducer.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCourse: () => dispatch(courseAction.fetchCourse()),
    setData: data => dispatch(courseAction.setData(data)),
    authenticate: session => dispatch(loginAction.login(session)),
    addCart: data => dispatch(loginAction.addCart(data)),
    removeCart: data => dispatch(loginAction.removeCart(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseLayout);
