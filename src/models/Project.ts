import { JSONProps } from "@/types/TypeHelpers";
import ImageAttr from "./ImageAttr";
import Model from "./Model";

export default class Project extends Model {
  public name: string = '';
  public description: string = '';
  public url: string = '';
  public urlText: string = '';
  public urlClasses: string = '';
  public image: ImageAttr = new ImageAttr();

  public parseJson(json: JSONProps<Project>): void {
    this.name = json.name;
    this.description = json.description;
    this.url = json.url;
    this.urlText = json.urlText;
    this.urlClasses = json.urlClasses;

    if (json.image) {
      this.image.parseJson(json.image);
    }
  }
}
