// src/dto/ProductResponseDTO.ts

export class ProductResponseDTO {
  private _id = "";
  private _productName = "";
  private _image = "";
  private _status = true;
  private _description = "";
  private _quantity = 0;
  private _price=0;
  // Getter & Setter for id
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }

  // Getter & Setter for productName
  get productName(): string {
    return this._productName;
  }
  set productName(value: string) {
    this._productName = value;
  }

  get price() :number{
    return this._price;
  }
  set price(value : number){
    this._price = value;
  }
  // Getter & Setter for image
  get image(): string {
    return this._image;
  }
  set image(value: string) {
    this._image = value;
  }

  // Getter & Setter for status
  get status(): boolean {
    return this._status;
  }
  set status(value: boolean) {
    this._status = value;
  }

  // Getter & Setter for description
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }

  // Getter & Setter for quantity
  get quantity(): number {
    return this._quantity;
  }
  set quantity(value: number) {
    this._quantity = value;
  }

  // Chuyển đổi đối tượng thành dạng trả về từ API
  toPlain() {
    return {
      id: this._id,
      productName: this._productName,
      image: this._image,
      status: this._status,
      description: this._description,
      quantity: this._quantity,
      price : this._price,
    };
  }
}
