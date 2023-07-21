import React, { useState } from "react";
import CoverSide from "./CoverSide";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import ForthPage from "./ForthPage";
import FifthPage from "./FifthPage";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5;

  const navigatePages = {
    currentPage,
    nextPages: () => {
      const bookElement = document.querySelector('.death-note');
      if (currentPage + 1 < totalPages - 1) {
        setCurrentPage(currentPage + 1);
        bookElement.style.boxShadow = '1px 1px 16px white';
      }
      
    },
    previousPages: () => {
      const bookElement = document.querySelector('.death-note');
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
        bookElement.style.boxShadow = '1px 1px 16px white';
      if (currentPage - 1  === 0) {
          bookElement.style.boxShadow = null;
        } 
      }
        
    },
  };
  console.log(currentPage);

  return (
    <div className="App">
      <header>
        <div className="navbar">
          <h1>YONDEMON'S PORTFOLIO</h1>
        </div>
      </header>
      <main>
        <div className="death-note">
          {currentPage === 0 && (
            <div className="death-note-cover" onClick={navigatePages.nextPages}>
              <h2>DEATH NOTE</h2>{" "}
            </div>
          )}
          {currentPage === 1 && (<><CoverSide navigatePages={navigatePages}/>
           <FirstPage navigatePages={navigatePages}/></>)}
          {currentPage === 2 && (<><SecondPage navigatePages={navigatePages}/><ThirdPage navigatePages={navigatePages}/></>)}
          {currentPage === 3 && (<><ForthPage navigatePages={navigatePages}/><FifthPage navigatePages={navigatePages}/></>)}

        </div>
      </main>
    </div>
  );
}

export default App;


