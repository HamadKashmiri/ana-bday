// StyledComponent.tsx
import React from "react";
import { styled } from "@mui/system";
import Countdown from "react-countdown";
import Typography from "@mui/material/Typography";

const StyledContainer = styled("div")({
  background: "linear-gradient(180deg, #f2e7fe, #c3a6ff, #a098f7)",
  color: "#5d537f",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  boxSizing: "border-box",
  minWidth: "100vw",
  border: "10px solid #a098f7",
  borderRadius: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  position: "relative",
  overflow: "hidden",
  fontFamily: "Roboto, sans-serif",
});

const CountdownContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  animation: `$fadeIn 2s ease-in-out`,
});

const Timer = styled(Typography)({
  fontSize: "4em",
  animation: `$bounce 1s infinite alternate`,
});

const FunElementsContainer = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  zIndex: 1,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  animation: `$fadeIn 2s ease-in-out`,
});

const FunElement = styled("div")({
  fontSize: "40px",
  animation: `$float 3s infinite alternate`,
  position: "absolute",
  willChange: "transform",
});

const InteractiveButton = styled("button")({
  padding: "10px 20px",
  fontSize: "1.5em",
  backgroundColor: "#7e6dff", // Purple shade to complement the background
  color: "#fff", // White text color
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s",
  opacity: 0.6,

  marginTop: "20px",

  "&:hover": {
    backgroundColor: "#6b5acf", // Darker shade on hover
  },
});

const Title = styled(Typography)({
  fontSize: "2.5em",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#7e6dff", // Purple color to match the button#
  display: "flex",
  alignContent: "center",
  margin: "0 auto",
  paddingBottom: "20px",
});

const StyledComponent: React.FC = () => {
  const funElements = ["🎉", "⭐", "🎊", "🎈"];

  const handleButtonClick = () => {
    alert(
      "This is the surprise mate ;( wait till ur birthday now for other stuff lil one. Also refresh for more icons"
    );
  };

  return (
    <StyledContainer>
      <Title variant="h1">Dosa Seckis</Title>
      <Title variant="h1">Evuning</Title>
      <Title variant="h1">So todaaaay</Title>

      <CountdownContainer>
        <Typography
          variant="h3"
          style={{ fontSize: "2em", marginBottom: "10px" }}
        >
          Salam alaikum
        </Typography>
        <Timer variant="h1">
          <Countdown date={new Date("2024-03-19T00:00:00")} />
        </Timer>
      </CountdownContainer>
      <Typography
        variant="h3"
        style={{ fontSize: "2em", marginBottom: "10px" }}
      >
        until your old
      </Typography>
      <FunElementsContainer>
        {funElements.map((emoji, index) => (
          <FunElement
            key={index}
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
          >
            {emoji}
          </FunElement>
        ))}
      </FunElementsContainer>
      <InteractiveButton onClick={handleButtonClick}>
        Click me for a surprise!
      </InteractiveButton>
    </StyledContainer>
  );
};

export default StyledComponent;
