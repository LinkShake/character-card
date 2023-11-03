"use client";

interface ContentBtnProps {
  isShowMoreEnabled: boolean;
  setIsShowMoreEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContentBtn: React.FC<ContentBtnProps> = ({
  isShowMoreEnabled,
  setIsShowMoreEnabled,
}) => {
  return (
    <center>
      <button
        style={{
          width: "80%",
          height: "3rem",
          border: "none",
          color: "white",
          backgroundColor: "black",
          margin: "10px",
          cursor: "pointer",
          transition: "ease .5s",
          fontSize: "17px",
          textTransform: "uppercase",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = ".8")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        onClick={() => setIsShowMoreEnabled(!isShowMoreEnabled)}
      >
        <b>{isShowMoreEnabled ? "Show less" : "Show more"}</b>
      </button>
    </center>
  );
};
