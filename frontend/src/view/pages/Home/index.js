import React  from "react";
import SubHeader from '../../components/SubHeader';

const ASSETS = {
  mainText: 'Home Page',
  additionText: 'Move to "Articles" for see all message or to "Contact" for create new one'
}

const Home = () => (
  <div className="pageWrapper">
    <SubHeader { ...{ mainText: ASSETS.mainText, additionText: ASSETS.additionText }} />
  </div>
)

export default Home;
