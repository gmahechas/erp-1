import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import {
    WcInput,
    WcDropdown,
    WcDropdownOption,
} from '@gmahechas/common-webcomponents-react';

import FragmentHco from '@mf-1/utils/hoc/FragmentHco';

interface FormData {
    firstName: string;
    role: string;
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
                            required={invalid || isDirty}
                            onInputChange={onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='role'
                    defaultValue=''
                    rules={{ required: true }}
                    render={({
                        field: { name, value, onChange },
                        fieldState: { invalid, isDirty },
                    }) => (
                        <WcDropdown
                            name={name}
                            value={value}
                            label='Role'
                            required={invalid || isDirty}
                            onSelectChange={onChange}
                        >
                            <WcDropdownOption value=''>&nbsp;</WcDropdownOption>
                            <WcDropdownOption value='grains'>
                                Rice
                            </WcDropdownOption>
                            <WcDropdownOption value='vegetables'>
                                Vegetables
                            </WcDropdownOption>
                            <WcDropdownOption value='fruit'>
                                Fruit
                            </WcDropdownOption>
                        </WcDropdown>
                    )}
                />
                <input type='submit' />
            </form>
        </FragmentHco>
    );
};

export default User;
