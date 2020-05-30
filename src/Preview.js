import React from "react"
import marked from "marked"
class Preview extends React.Component {
    constructor(props){
        super(props)
        marked.setOptions({
            breaks: true })
    }
      

    render(){
        const text = this.props.text;
        return (
            <div title="Preview" id="preview" dangerouslySetInnerHTML={{__html: marked(text)}}>                
            </div>
        )
    }
}

export default Preview;