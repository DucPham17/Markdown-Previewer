import React from "react";
import Preview from "./Preview";


class Editor extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text : `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
              
 Heres some code, \`<div></div>\`, between 2 backticks.
            
\`\`\`
// this is multi-line code:
            
function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
return multiLineCode;
}
}
\`\`\`
              
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
            
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
            
And if you want to get really crazy, even tables:
            
            
- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.
            
            
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
            
![React Logo w/ Text](https://goo.gl/Umyytc)
`
        }

    }

    handleChange(event){
        this.setState({
            text : event.target.value
        })
    }

    render(){
        return (
            <div className="out-side">
            <toolbar id="edit">
                Editor
            </toolbar>
            <textarea value={this.state.text} id="editor" onChange={this.handleChange.bind(this)}></textarea>
            <div>
            <toolbar id="preview-bar">
                Preview
            </toolbar>
            </div>
            <Preview  text={this.state.text} />
            </div>
        )
    }
}

export default Editor