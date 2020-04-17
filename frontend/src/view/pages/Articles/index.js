import React, { useEffect }  from "react";
import {connect} from "react-redux";

import SubHeader from '../../components/SubHeader';
import ArticleItem from '../../components/ArticleItem'
import { getAllMessages, deleteMessage } from "../../../store/actions/messageActions";

const ASSETS = {
  mainText: 'Articles',
  additionText: 'All your messages are here'
}

const Articles = ({ fetching, error, messages, getAllMessages, deleteMessage }) => {
  useEffect(() => { console.log(messages); getAllMessages() }, []);

  return (
    <div className="pageWrapper">
      <SubHeader { ...{ mainText: ASSETS.mainText, additionText: ASSETS.additionText }} />
      <div className='acticlesContainer'>
        { messages.map((item, key) => <ArticleItem { ...{ ...item, key, remove: deleteMessage } }/>) }
      </div>
    </div>
  )
}

const mapStateToProps = ({ message: { fetching, error, messages } }) => ({ fetching, error, messages });

export default connect(mapStateToProps, { getAllMessages, deleteMessage })(Articles);
