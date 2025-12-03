import { useCallback, useMemo, useState } from 'react';

type Primitive = string | number | boolean | null | undefined;
type PrimitiveOrArray = Primitive | unknown[];

export type ErrorsTree<T> = { [K in keyof T]?: ErrorTreeOrError<T[K]> };
type ErrorTreeOrError<T> = T extends PrimitiveOrArray ? string : ErrorsTree<T>;

type TypedObjectErrors<T> = Partial<Record<keyof T, string | undefined>>;
type UntypedObjectErrors = Record<string, string | undefined>;

type FormErrors<T> = ErrorsTree<T> | TypedObjectErrors<T> | UntypedObjectErrors;

export const useForm = <
  FormData,
  ErrorsData extends FormErrors<FormData> = TypedObjectErrors<FormData>
>(
  initialFormData: FormData,
  initialErrorsData: ErrorsData = {} as ErrorsData
) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<ErrorsData>(initialErrorsData);

  const isValid = useMemo<boolean>(
    () => !Object.values(errors).some((v) => !!v),
    [errors]
  );

  const handleChangeFormData = useCallback(
    (changes: Partial<FormData>) => {
      setFormData((prev) => ({
        ...prev,
        ...changes,
      }));
    },
    [setFormData]
  );

  return {
    formData,
    errors,
    isValid,
    setErrors,
    setFormData,
    handleChangeFormData,
  };
};
