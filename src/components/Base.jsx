import React from "react";

function Base(props) {
  return (
    // responsive Design
    <div>
      {/* Destop View */}
      {props.matches && (
        <div className="desktopdesign">
          <div>
            <p>
              {props.number} {props.itemLeft}
            </p>
          </div>
          <div onClick={props.all}>
            <p>All</p>
          </div>
          <div onClick={props.deleteSelected}>
            <p>Active</p>
          </div>
          <div onClick={props.completed}>
            <p> Completed</p>
          </div>
          <div
            onClick={() => {
              props.delAll(props.id);
            }}
          >
            <p> Clear Completed</p>
          </div>
        </div>
      )}

      {/* Mobile View */}
      {!props.matches && (
        <div className="mobileDesign">
          <div className="mobile1">
            <div>
              <p>
                {props.number} {props.itemLeft}
              </p>
            </div>
            <div
              onClick={() => {
                props.delAll(props.id);
              }}
            >
              <p> Clear Completed</p>
            </div>
          </div>

          <div className="mobile2">
            <div onClick={props.all}>
              <p>All</p>
            </div>
            <div onClick={props.deleteSelected}>
              <p>Active</p>
            </div>
            <div onClick={props.completed}>
              <p> Completed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Base;
