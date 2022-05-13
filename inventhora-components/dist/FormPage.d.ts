import { FormikHelpers } from 'formik';
import { FC, ReactNode } from 'react';
declare const FormPage: FC<Props>;
export default FormPage;
interface Props {
    title: string;
    description?: string;
    initialValues: object;
    validationSchema: any;
    onSubmit: (values: any, helpers: FormikHelpers<any>) => void;
    validate?: (values: any) => void;
    edit?: boolean;
    children: any;
    multiCreationLink?: string;
    singleCreationLink?: string;
    isLeftAligned?: boolean;
    style?: any;
    enableReinitialize?: boolean;
    hideSubmit?: boolean;
    submitText?: ReactNode;
    withRequiredNotice?: boolean;
}
