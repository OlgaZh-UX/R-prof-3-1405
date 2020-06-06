export let SET_NAME = '@@name/SET';
export let SET_BIO = '@@bio/SET';
export let SET_DATE = '@@date/SET';
export let SET_CITY = '@@city/SET'

export let setName = (name) => {
  return {
    type: SET_NAME,
    name
  }
};

export let setBio = (text) => {
  return {
    type: SET_BIO,
    text
  }
};

export let setDate = (text) => {
    return {
        type: SET_DATE,
        text
    }
};

export let setCity = (text) => {
    return {
      type: SET_CITY,
      text
    }
}