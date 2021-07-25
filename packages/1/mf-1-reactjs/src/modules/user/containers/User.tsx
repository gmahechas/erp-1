import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import { WcInput } from '@gmahechas/common-webcomponents-react';

import FragmentHco from '@mf-1/utils/hoc/FragmentHco';

interface FormData {
    firstName: string;
}

const User = () => {
    const { control, handleSubmit, formState } = useForm<FormData>();
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <FragmentHco>
            <div>User</div>
            <Link to='/auth'>Link to Auth</Link>
            <form onSubmit={onSubmit}>
                <Controller
                    control={control}
                    name='firstName'
                    defaultValue=''
                    rules={{ required: true }}
                    render={({
                        field: { name, value, onChange },
                        fieldState: { invalid, isDirty },
                    }) => (
                        <WcInput
                            name={name}
                            value={value}
                            label='First name'
                            onInputChange={onChange}
                            required={invalid || isDirty}
                        />
                    )}
                />
                <input type='submit' />
            </form>
        </FragmentHco>
    );
};

export default User;
