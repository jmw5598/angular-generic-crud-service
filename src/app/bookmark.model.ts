export class Bookmark {

  private id: number;
  private url: string;
  private description: string;

  constructor(id: number, url: string, description: string) {
    this.id = id;
    this.url = url;
    this.description = description;
  }

}
