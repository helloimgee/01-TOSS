import React, { useRef } from "react";
import useVisible from "../../customhook/useVisible";
import ServiceList from "../../components/ServiceList";
import Title from "../../components/Title";
import "./Section09.scss";

export default function Section09() {
  const titRef = useRef(null);
  const contRef = useRef(null);

  const titVisible = useVisible(titRef);
  const contVisible = useVisible(contRef);
  return (
    <section className="section09">
      <div className="section09-wrap">
        <Title className={titVisible ? "on" : ""} ref={titRef}>
          <span>알면 좋은 금융</span>
          <p>
            이런 서비스도 <br />
            한번 써보세요
          </p>
        </Title>
        <ServiceList className={contVisible ? "on" : ""} ref={contRef} />
      </div>
    </section>
  );
}
