import React from "react";

function CardDetails() {
  return (
    <div
      className="profile-right profile-right-close animation slideIn "
      id="profile-payment-cards"
    >
      <p className="profile-info">Saved Cards</p>
      <div className="profile-payments">
        <h5>Currently we don't save any card Information...</h5>
      </div>
    </div>
  );
}

function UpiDetails() {
  return (
    <div
      className="profile-right profile-right-close animation slideIn "
      id="profile-payment-upi"
    >
      <p className="profile-info">Saved UPI</p>
      <div className="profile-payments">
        <h5>Currently we don't save any UPI Information...</h5>
      </div>
    </div>
  );
}
export { CardDetails, UpiDetails };
