import React from "react";

const Link = ({ to, className, children, id }) => {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    window.history.pushState({}, "", to);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} id={id} className={className} href={to}>
      {children}
    </a>
  );
};

export default Link;
