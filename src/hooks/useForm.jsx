import { useState } from "react";

const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const regexUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

export const useForm = (initValue = {}) => {
  const [form, setForm] = useState(initValue);
  const [error, setError] = useState({});
  const rules = {};
  function handleInputChange(e) {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    setForm({
      ...form,
      [name]: value,
    });
  }
  function validator() {
    let errorObject = {};
    for (let i in rules) {
      let r = rules[i];
      if (r.required && !form[i]) {
        errorObject[i] = "Gia tri khong duoc bo trong";
      }
      if (r.pattern) {
        let pattern = r.pattern;
        if (r.pattern === "phone") pattern = regexPhone;
        if (r.pattern === "email") pattern = regexEmail;
        if (r.pattern === "url") pattern = regexUrl;

        if (typeof pattern['test'] !== 'undefined' && !pattern?.test(form[i])) {
          errorObject[i] = "Field nay khong dung dinh dang";
        }
      }

      if (r.min && (typeof form[i] === "undefined" || form[i].length < r.min)) {
        errorObject[i] = `Field nay khong duoc nho hon ${r.min} ky tu`;
      }

      if (r.max && form[i]?.length > r.max) {
        errorObject[i] = `Field nay khong duoc lon hon ${r.max} ky tu`;
      }
    }
    return errorObject;
  }

  function register(name, rule) {
    if (rule) {
      rules[name] = rule;
    }

    return {
      name,
      onChange: handleInputChange,
      value: form[name],
    };
  }

  function handleSubmit(callback) {
    return (e) => {
      e.preventDefault();
      let error = validator();
      if (Object.keys(error).length === 0) {
        callback(form);
      }

      setError(error);
    };
  }

  return {
    form,
    register,
    handleSubmit,
    error,
  };
};
