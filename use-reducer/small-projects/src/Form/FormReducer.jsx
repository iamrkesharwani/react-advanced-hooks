export const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  country: '',
  errors: {
    name: null,
    email: null,
    phone: null,
    country: null,
  },
  isValid: false,
};

export const ACTIONS = {
  UPDATE_NAME: 'UPDATE_NAME',
  UPDATE_EMAIL: 'UPDATE_EMAIL',
  UPDATE_PHONE: 'UPDATE_PHONE',
  UPDATE_COUNTRY: 'UPDATE_COUNTRY',
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_NAME: {
      const name = action.payload;
      const nameError = name.trim().length < 3 ? 'Enter valid name' : null;
      return {
        ...state,
        name: name,
        errors: {
          ...state.errors,
          name: nameError,
        },
        isValid: nameError === null,
      };
    }
    case ACTIONS.UPDATE_EMAIL: {
      const email = action.payload;
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const emailError = !regex.test(email) ? 'Enter valid email' : null;
      return {
        ...state,
        email: email,
        errors: {
          ...state.errors,
          email: emailError,
        },
        isValid: emailError === null,
      };
    }
    case ACTIONS.UPDATE_PHONE: {
      const phone = action.payload;
      const phoneError =
        String(phone).length !== 10 ? 'Enter valid phone' : null;
      return {
        ...state,
        phone: phone,
        errors: {
          ...state.errors,
          phone: phoneError,
        },
        isValid: phoneError === null,
      };
    }
    case ACTIONS.UPDATE_COUNTRY: {
      const country = action.payload;
      const countryError = country === '' ? 'Select a country' : null;

      const isValid =
        state.errors.name === null &&
        state.errors.email === null &&
        state.errors.phone === null &&
        countryError === null;

      return {
        ...state,
        country: country,
        errors: {
          ...state.errors,
          country: countryError,
        },
        isValid,
      };
    }
    default:
      return state;
  }
}
