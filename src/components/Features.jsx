import React from "react";
import FeactureComponent from "../reuseableComp/FeactureComponent";

const Features = () => {
  return (
    <>
      <div className="container featureSecStyle">
        <div className="row">
          <div className="col-md-3">
            <FeactureComponent
              title={"Внимание к деталям"}
              text={
                "Идейные соображения, а также начало повседневной работы по формированию позиции."
              }
            />
          </div>
          <div className="col-md-3">
            <FeactureComponent
              title={"Пунктуальность"}
              text={
                "Идейные соображения, а также начало повседневной работы по формированию позиции."
              }
            />
          </div>
          <div className="col-md-3">
            <FeactureComponent
              title={"Планирование"}
              text={
                "Идейные соображения, а также начало повседневной работы по формированию позиции."
              }
            />
          </div>
          <div className="col-md-3">
            <FeactureComponent
              title={"Современные технологии"}
              text={
                "Идейные соображения, а также начало повседневной работы по формированию позиции."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
