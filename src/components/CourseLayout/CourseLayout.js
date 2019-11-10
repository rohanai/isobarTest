import React, { useEffect, useState } from "react";

import CourseCard from "../CourseCard/CourseCard";
import CartCard from "../CartCard/CartCard";
import Header from "../Header/Header";
import LoginModal from "../LoginModal/LoginModal";

const CourseList = props => {
  const [courseData, setCourseData] = useState([]);
  const [openModal, setModal] = useState({ modal: false, index: -1 });
  useEffect(() => {
    props.fetchCourse();
  }, []);

  useEffect(() => {
    console.log(props.courseData);
    if (props.courseData.length > 0) {
      setCourseData(props.courseData);
    }
  }, [props.courseData]);

  const searchHandler = key => {
    if (key) {
      const computeData = props.courseData.filter(item => {
        return item.name.toLowerCase().includes(key);
      });
      console.log(computeData);
      setCourseData(computeData);
    } else {
      setCourseData(props.courseData);
    }
  };

  const insertCart = index => {
    props.courseData[index].cart = !props.courseData[index].cart;
    props.setData([...props.courseData]);
    if (props.courseData[index].cart) {
      debugger;
      const newCart = props.cartData;
      newCart[index] = props.courseData[index];
      props.addCart({ ...newCart });
    } else {
      const newCart = props.cartData;
      delete newCart[index];
      props.removeCart({ ...newCart });
    }
  };

  const cartHandler = index => {
    if (props.session) {
      insertCart(index);
    } else {
      setModal({ modal: true, index: index });
    }
  };

  const closeModal = () => {
    if (openModal.index >= 0) {
      insertCart(openModal.index);
    }
    setModal({ modal: false, index: -1 });
    props.authenticate(true);
  };

  return (
    <React.Fragment>
      <div style={{ marginTop: "40px" }}>
        <Header searchHandler={searchHandler} />
      </div>
      <div style={{ marginTop: "40px", display: "flex" }}>
        <div style={{ flex: "4" }}>
          <center>COURSE</center>
          <ul>
            {courseData.length > 0
              ? courseData.map((item, key) => (
                  <li key={key}>
                    <CourseCard
                      cartHandler={cartHandler}
                      cart={item.cart ? "Remove" : "Add"}
                      item={item}
                      index={key}
                    />
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div style={{ flex: "1" }}>
          <center>CART</center>
          <ul>
            {Object.values(props.cartData).length > 0
              ? Object.values(props.cartData).map((item, key) => (
                  <li>
                    <CartCard item={item} index={key} />
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
      <div>
        {openModal.modal ? <LoginModal closeModal={closeModal} /> : null}
      </div>
    </React.Fragment>
  );
};

export default CourseList;
