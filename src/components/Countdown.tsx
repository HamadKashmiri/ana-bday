import React from "react";
import Countdown from "react-countdown";

interface LaunchCountdownProps {
  // Add any additional props you might need
}

const LaunchCountdown: React.FC<LaunchCountdownProps> = () => {
  // Set the launch date to 19th March 2024
  const launchDate = new Date("2024-03-19T00:00:00");

  return (
    <Countdown
      date={launchDate}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <span>Happy Birthday</span>;
        } else {
          return (
            <div>
              <span>{days} days</span>
              <span>{hours} hours</span>
              <span>{minutes} minutes</span>
              <span>{seconds} seconds</span>
            </div>
          );
        }
      }}
    />
  );
};

export default LaunchCountdown;
