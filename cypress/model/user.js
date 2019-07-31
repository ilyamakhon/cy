export default class User {
  constructor(username, password) {
    this._username = username;
    this._password = password;
  }

  set username(_username) {
    this._username = _username;
  }

  get username() {
    return "ilyamakhon";
  }

  set password(_username) {
    this._username = _username;
  }

  get password() {
    return "3231295";
  }
}
