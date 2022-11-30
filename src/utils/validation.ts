export const regex = {
  postalCode: /[1-9][0-9]{3}(?!sa|sd|ss)\s?[A-Za-z]{2}/,
  houseNumber: /^\d{1,5}$/,
  password: /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  phoneNumber: /^(?:^0[0-57-9][0-9]{2}[-\s]?[0-9]{6}$)|(?:^0[0-57-9][0-9][-\s]?[0-9]{7}$)|(?:^06[-\s]?[0-9]{8}$)$/,
  birthDate: /(\d{2})-(\d{2})-(\d{4})/,
}
