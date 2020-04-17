import React  from "react";
import SubHeader from '../../components/SubHeader';

const ASSETS = {
  mainText: 'Work in progress!',
  additionText: 'This page is not ready yet'
}

const PageNotFound = () => (
  <div className="pageWrapper">
    <SubHeader { ...{ mainText: ASSETS.mainText, additionText: ASSETS.additionText }} />
  </div>
)

export default PageNotFound;
