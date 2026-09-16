import React, { useState } from "react";

export function useForm<T extends Record<string, any>>(options?: { defaultValues?: T }) {
  const [values, setValues] = useState<T>(options?.defaultValues || ({} as T));

  const register = (name: keyof T) => ({
    name: name as string,
    value: values[name] ?? "",
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [name]: e.target.value }));
    },
  });

  const handleSubmit = (onValid: (data: T) => void) => (e: React.FormEvent) => {
    e.preventDefault();
    onValid(values);
  };

  const reset = () => {
    setValues(options?.defaultValues || ({} as T));
  };

  const getValues = () => values;

  return { register, handleSubmit, reset, getValues };
}
