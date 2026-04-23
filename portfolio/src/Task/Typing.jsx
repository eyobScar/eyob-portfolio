import { useEffect, useState } from "react";
import React from "react";

const Typing = ({ words }) => {
  const [text, setText] = useState("");
  const [letterInd, setLetterInd] = useState(0);
  const [wordInd, setWordInd] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordInd];
    const timeOut = setTimeout(
      () => {
        if (!isDeleting) {
          if (letterInd - 1 === currentWord.length) {
            setIsDeleting(true);
          } else {
            setText(currentWord.substring(0, letterInd));
            setLetterInd(letterInd + 1);
          }
        } else {
          if (letterInd === 0) {
            setIsDeleting(false);
            setWordInd((wordInd + 1) % words.length);
          } else {
            setText(currentWord.substring(0, letterInd - 1));
            setLetterInd(letterInd - 1);
          }
        }
        words;
      },
      isDeleting ? 150 : 250,
    );
    return () => {
      clearTimeout(timeOut);
    };
  }, [isDeleting, letterInd, wordInd]);
  return (
    <div className="bg-gradient-to-r from-primary via-purple to-secondary bg-clip-text text-transparent bg-[length:200%_auto] text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold my-5 animate-[slide_3s_linear_infinite] border border-r-white">
      I develop {text}
    </div>
  );
};

export default Typing;
