import { JSONProps } from "@/types/TypeHelpers";
import Model from "./Model";

export default class ImageAttr extends Model {
  public src: string = '';
  public alt: string = '';
  public width: number = 0;
  public height: number = 0;

  public parseJson(json: JSONProps<ImageAttr>): void {
    this.src = json.src;
    this.alt = json.alt;
    this.width = json.width;
    this.height = json.height;
  }
}
