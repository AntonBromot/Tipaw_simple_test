import React, { useCallback, useState, useMemo } from "react";
import {Link} from 'react-router-dom';

const dropElemets = (elems, handler) => elems.map( ({ value, link, additionClassName }, key, arr) => {
  const isFirst = !key,
        isLast = arr.length-1 === key,
        classNames = `dropItem ${additionClassName} ${isFirst && 'firstElem'} ${isLast && 'lastElem'}`;

  return  <Link to={link} onClick={handler} className={classNames} key={key}>{value}</Link>
});

const DropDown = ({ name, dropElems, additionClassName, order }) => {
  const [ isOpen, setOpen ] = useState(false),
        openDropDown = useCallback(() => setOpen(true), []),
        closeDropDown = useCallback(() => setOpen(false), []),
        memoDropDown = useMemo(() => dropElemets(dropElems, closeDropDown), []),
        containerClass = ` dropPlaceholder ${additionClassName}`,
        style = { zIndex: 1000 - order };

  return (
    <div className='dropContainer' style={style} onMouseOver={openDropDown} onMouseLeave={closeDropDown}>
      <div className={containerClass}>{ name }</div>
      { isOpen && <div className='dropListWrapp'><div className='dropList'>{ memoDropDown }</div></div> }
    </div>
  )
};

export default DropDown;
