import { FormikProps } from 'formik';
import { FC, ReactNode } from 'react';
declare const FormModal: FC<Props>;
export default FormModal;
interface Props {
    isOpen?: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    initialValues: object;
    validationSchema: any;
    onSubmit: (values: any, FormikProps: FormikProps<any>) => void;
    disabled?: boolean;
    enableReinitialize?: boolean;
    validate?: (values: any) => void;
    edit?: boolean;
    submitText?: ReactNode;
}
