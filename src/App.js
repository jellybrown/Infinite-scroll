import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Comments from "./components/Comments";
import axios from "axios";

function App() {
  const [page, setPage] = useState(1);
  const [list, setList] = useState(null);
  const [element, setElement] = useState(null);

  const fetchData = async (page) => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`
    );
    setList((prev) => {
      if (!prev) return result.data;
      else return [...prev, ...result.data];
    });
  };

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        console.log(first);
        if (first.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <div>
      <div>
        {list &&
          list.map((comment, index) => {
            return (
              <div ref={setElement} key={index}>
                <Comments
                  postId={comment.postId}
                  email={comment.email}
                  name={comment.name}
                  body={comment.body}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
