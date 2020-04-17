import React, { useCallback, useState }  from "react";
import FontAwesome from "react-fontawesome";

const ASSETS = {
  fromText: 'From:',
  objectText: 'Object:',
}

const ArticleItem = ({ firstName, lastName, message, object, _id, remove }) => {
  const [ opacity, setOpacity ] = useState(false),
        removeItem = useCallback( () => { setOpacity(true); remove({ _id }) }, []);

  return (
    <div className="articleItem" style={ { ...(opacity && { opacity: .5 }) }}>
      { !opacity && <FontAwesome className='removeIcon' name='times-circle' onClick={removeItem} /> }
      <h3><span>{ASSETS.fromText}</span> {firstName} {lastName}</h3>
      <h3><span>{ASSETS.objectText}</span> {object}</h3>
      <div className='mainText'>{message}</div>
    </div>
  )
}

export default ArticleItem;
