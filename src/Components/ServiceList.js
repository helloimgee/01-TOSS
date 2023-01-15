/* eslint-disable import/no-unresolved */
import React from "react";
import serviceData from "@assets/serviceData";
import PropTypes from "prop-types";
import "./ServiceList.scss";

const ServiceList = React.forwardRef(({ className }, ref) => {
  const serviceList = serviceData.map((list) => {
    return (
      <li className={`serviceList ${className}`} key={list.id}>
        <div
          className={`serviceList ${className} icon`}
          style={{ backgroundColor: `${list.color}` }}
        >
          <img src={list.img} alt={list.id} />
        </div>
        <div className={`serviceList ${className} txt-wrap`}>
          <span>{list.title}</span>
          <span>{list.des}</span>
        </div>
      </li>
    );
  });
  return (
    <div ref={ref} className={`serviceList ${className}`}>
      <ul>{serviceList}</ul>
    </div>
  );
});

export default ServiceList;

// export default function ServiceList({ className }) {
//   const serviceList = serviceData.map((list) => {
//     return (
//       <li className="serviceList" key={list.id}>
//         <div
//           className="serviceList icon"
//           style={{ backgroundColor: `${list.color}` }}
//         >
//           <img src={list.img} alt={list.id} />
//         </div>
//         <div className="serviceList txt-wrap">
//           <span>{list.title}</span>
//           <span>{list.des}</span>
//         </div>
//       </li>
//     );
//   });
//   return (
//     <div className={`serviceList ${className}`}>
//       <ul>{serviceList}</ul>
//     </div>
//   );
// }

ServiceList.propTypes = {
  className: PropTypes.string.isRequired,
};
