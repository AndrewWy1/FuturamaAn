import React from "react";
import Header from "./Header";
import TopicList from "./TopicList.js";
import Bottom from "./Bottom";

class LeftColumn extends React.Component{
    render(){
        return (<div>
            <Header/>
            <TopicList/>
            <Bottom/>
            
        </div>)
    }
}

export default LeftColumn;