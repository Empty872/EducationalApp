import TopicBlock from "./TopicBlock";

export default class TopicClass{
    constructor(number, content) {
        this.number = number
        this.block = new TopicBlock(number)
        this.content = content
    }
    addContent(content){
        this.content.push(content)
    }
}