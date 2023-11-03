"use client";

import { PicsDisplayer } from "./PicsDisplayer";
import React, { useState } from "react";
import { ContentBtn } from "./ContentBtn";
import { RelatedProfiles } from "./RelatedProfiles";
// import { dataObj } from "@/data/data";

interface CardProps {
  name: string;
  surname: string;
  age?: number;
  description: string;
  profilePicturesUrl?: string[];
  bgColor?: string;
  alt?: string;
  relatedProfiles?: {
    name: string;
    surname: string;
    description: string;
    bgColor: string;
  }[];
  books?: {
    novels: string[];
    shortStories: string[];
  };
  mainProfile: {
    name: string;
    surname: string;
    description: string;
    bgColor?: string;
  };
  variant: "main" | "related";
  setVariant: React.Dispatch<React.SetStateAction<"main" | "related">>;
  setProfileToDisplay?: React.Dispatch<
    React.SetStateAction<{
      name: string;
      surname: string;
      description: string;
      bgColor?: string;
    }>
  >;
}

export const Card: React.FC<CardProps> = ({
  age,
  description,
  name,
  surname,
  profilePicturesUrl,
  relatedProfiles,
  alt,
  books,
  bgColor,
  mainProfile,
  variant,
  setVariant,
  setProfileToDisplay,
}) => {
  const [isShowMoreEnabled, setIsShowMoreEnabled] = useState(false);
  const [activeTab, setActiveTab] = useState<"life" | "works">("life");

  const onClick = ({
    name,
    surname,
    description,
    bgColor,
  }: {
    name: string;
    surname: string;
    description: string;
    bgColor?: string;
  }) => {
    setVariant("related");
    setProfileToDisplay?.({ name, surname, description, bgColor });
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "4px",
        border: "none",
        width: "30rem",
        height: "fit-content",
        padding: "2.5rem",
        boxShadow:
          "inset 0 -1em 1.5em lightgray, 0 0 0 2px white, 0.3em 0.3em 1em black",
      }}
    >
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // border: "2px solid red",
          height: "fit-content",
        }}
      >
        {variant === "related" && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <button
              onClick={() => {
                setVariant("main");
                setProfileToDisplay?.(mainProfile);
              }}
              style={{
                width: "50px",
                height: "50px",
                fontSize: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "all .2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = ".85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              title="Go back"
            >
              &#171;
            </button>
          </div>
        )}
        {profilePicturesUrl ? (
          <PicsDisplayer profilePictures={profilePicturesUrl} alt={alt} />
        ) : (
          <div
            style={{
              width: "225px",
              height: "225px",
              borderRadius: "50%",
              backgroundColor: bgColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontSize: "50px",
                color: "white",
              }}
            >
              {surname
                ? `${name[0]?.toUpperCase()}${surname[0]?.toUpperCase()}`
                : name?.toUpperCase()}
            </h1>
          </div>
        )}
        <h2
          style={{
            fontFamily: "Nosifer",
            fontSize: "35px",
            // border: "2px solid green",
            margin: 0,
          }}
        >
          {name} {surname}
        </h2>
      </header>
      {isShowMoreEnabled && variant === "main" && (
        <div>
          <nav
            style={{
              display: "flex",
              width: "100%",
              height: "fit-content",
              padding: "0",
            }}
          >
            <h3
              style={{
                width: "50%",
                textAlign: "center",
                padding: "5px",
                borderBottom: `2px solid ${
                  activeTab === "life" ? "#0ea5e9" : "black"
                }`,
                color: activeTab === "life" ? "#0ea5e9" : "black",
                transition: "all .2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e5e7eb")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
              onClick={() => setActiveTab("life")}
            >
              Life
            </h3>
            <h3
              style={{
                width: "50%",
                textAlign: "center",
                padding: "5px",
                borderBottom: `2px solid ${
                  activeTab === "works" ? "#0ea5e9" : "black"
                }`,
                color: activeTab === "works" ? "#0ea5e9" : "black",
                transition: "all .2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e5e7eb")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
              onClick={() => setActiveTab("works")}
            >
              Works
            </h3>
          </nav>
          {activeTab === "life" ? (
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              style={{
                fontFamily: "courier",
                textAlign: "center",
                justifyContent: "center",
                padding: "2px",
              }}
            ></p>
          ) : (
            <div
              style={{
                maxHeight: "19rem",
                overflowY: "auto",
                boxShadow: "inset 0 -10px 20px #f3f4f6",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              <h3>Novels</h3>
              <ul>
                {books?.novels.map((title, idx) => {
                  return (
                    <li
                      key={idx}
                      style={{
                        fontFamily: "courier",
                      }}
                    >
                      <i>{title}</i>
                    </li>
                  );
                })}
              </ul>
              <h3>Short stories</h3>
              <ul>
                {books?.shortStories.map((title, idx) => {
                  return (
                    <li
                      key={idx}
                      style={{
                        fontFamily: "courier",
                      }}
                    >
                      <i>{title}</i>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}
      {variant === "related" && (
        <p
          style={{
            fontFamily: "courier",
          }}
        >
          {description}
        </p>
      )}
      {isShowMoreEnabled && variant === "main" && relatedProfiles && (
        <>
          <h3>Related profiles:</h3>
          <RelatedProfiles
            relatedProfiles={relatedProfiles}
            onClick={onClick}
          />
          <br />
          <br />
          <br />
          <br />
        </>
      )}
      {variant === "main" && (
        <ContentBtn
          isShowMoreEnabled={isShowMoreEnabled}
          setIsShowMoreEnabled={setIsShowMoreEnabled}
        />
      )}
    </div>
  );
};
