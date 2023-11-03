"use client";

import styles from "./page.module.css";
import { dataObj } from "@/data/data";
import { booksObj } from "@/data/data";
import { Card } from "@/components/Card";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Home() {
  const [variant, setVariant] = useState<"main" | "related">("main");
  const [profileToDisplay, setProfileToDisplay] = useState<{
    name: string;
    surname: string;
    description: string;
    bgColor?: string;
  }>({
    name: dataObj.name,
    surname: dataObj.surname,
    description: dataObj.description,
    bgColor: "",
  });
  const mainProfile = {
    name: dataObj.name,
    surname: dataObj.surname,
    description: dataObj.description,
    bgColor: "",
  };
  const cardProps = {
    ...dataObj,
    mainProfile,
    books: booksObj,
    variant,
    setVariant,
    setProfileToDisplay,
  };
  const relatedCardProps = {
    ...profileToDisplay,
    mainProfile,
    variant,
    setVariant,
    setProfileToDisplay,
  };
  return (
    <main className={styles.main}>
      {variant === "main" ? (
        <Card {...cardProps} />
      ) : (
        <Card {...relatedCardProps} />
      )}
    </main>
  );
}
