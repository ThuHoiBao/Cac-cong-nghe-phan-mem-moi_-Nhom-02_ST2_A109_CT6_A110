export class UserResponseDTO {

  private _id: string ="";
  private _firstName: string="";
  private _lastName: string="";
  private _email: string="";


  // Getter và Setter cho các thuộc tính
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  // Phương thức chuyển dữ liệu từ đối tượng sang plain object (JSON)
  toPlain(): object {
    return {
      id: this._id,
      firstName: this._firstName,
      lastName: this._lastName,
      email: this._email
    };
  }

  // Phương thức kiểm tra dữ liệu có đầy đủ không (optional)
  static validate(dto: UserResponseDTO): boolean {
    return !!dto.id && !!dto.firstName && !!dto.lastName && !!dto.email;
  }
}
