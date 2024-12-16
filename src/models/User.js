class User {
  constructor(options) {
    this.email = options.email;
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.password = options.password;
    this.graduationYear = options.graduationYear;
    this.degree = options.degree;
    this.major = options.major;
    this.phone = options.phone;
    this.currentOccupation = options.currentOccupation;
    this.image = options.image;
    this.linkedinProfile = options.linkedinProfile;
    this.mentorEmail = options.mentorEmail;
  }
}

export default User;
