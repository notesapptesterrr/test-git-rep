export default class Message
{
   
    constructor(text, userId, files=[])
    {
        this.text = text;
        this.userId = userId;
        this.files = [];
    }
}