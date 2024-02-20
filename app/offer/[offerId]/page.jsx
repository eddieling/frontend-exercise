"use client";
import { useState, useEffect } from "react";
import styles from "../../../styles/Offer.module.css";

export default function ProductDetail({ params }) {
  const [currentOffer, setCurrentOffer] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const offers = JSON.parse(localStorage.getItem("offers"));
      if (offers.length > 0) {
        setCurrentOffer(offers.find((offer) => offer.id == params.offerId));
      }
    }
  }, []);

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.title}>Offer details</div>
        {currentOffer && (
          <div className={styles.container}>
            <div>Name: {currentOffer.name}</div>
            <div>Role: {currentOffer.role}</div>
            <div>Salary: ${currentOffer.salary}</div>
            <div>Bonus: ${currentOffer.bonus}</div>
            <div>Equity: {currentOffer.equity}%</div>
            <div>Culture: {currentOffer.culture}</div>
            <div>
              Learning Opportunities: {currentOffer.learningOpportunities}
            </div>
            <div>
              Organization: Early-stage technology startup with a mission to
              foster sustainability within the B2B food supply chain across
              Southeast Asia.
            </div>
          </div>
        )}
        {!currentOffer && <div>Offer not found</div>}
      </div>
    </div>
  );
}
