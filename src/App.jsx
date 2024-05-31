import { useState } from "react";

import MainHeader from "./components/MainHeader/MainHeader";
import PostsList from "./components/PostsList/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible((prev) => !prev);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={showModalHandler}
        />
      </main>
    </>
  );
}

export default App;
