"use client";

import React, { useEffect, useState } from "react";

const WaitlistNumber = () => {
  const [waitlistCount, setWaitlistCount] = useState("100+");

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const response = await fetch(
          "https://orbitview.pythonanywhere.com/users/waitlist/count/"
        );
        const data = await response.json();
        setWaitlistCount(data.waitlist_count);
      } catch (error) {
        console.error("Error fetching waitlist count:", error);
      }
    };

    fetchWaitlistCount();
  }, []);

  return (
    <div>
      <span>
        Are you ready to join our amazing community of{" "}
        <span style={{ color: "gold", fontWeight: "bold" }}>
          {waitlistCount.toLocaleString()}
        </span>{" "}
        waitlist members?
      </span>
    </div>
  );
};

export default WaitlistNumber;
