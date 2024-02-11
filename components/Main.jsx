import React from "react";
import Left from "./Left"
import Filter from "./Filter";
import Content from './Content'


function Main() {
  return (
    <div className="flex w-full flex-col lg:flex-row">
       <Left/>

       {/* right side */}
      <div className="flex flex-1 flex-col bg-gray-900 pb-4">
        <Filter/>
        <div className="h-[80vh] overflow-y-auto overflow-x-hidden">
        <Content/>
        </div>
      </div>
    </div>
  );
}

export default Main;
