export default class Note {
    constructor(title, content, color, pinned, createdAt) {
      this.title = title;
      this.content = content;
      this.color = color;
      this.pinned = pinned;
      this.createdAt = createdAt || new Date();
    }

    showInfoConsole() {
        console.log("Node obj working.")
    }
  }