import type { Dispatch, SetStateAction } from 'react'
import type { Control } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import { Linking } from 'react-native'

import InputField from '../../../components/InputField'
import { type Inputs } from './_types'

type Props = {
  control: Control<Inputs>
  loginFailed: boolean
  setLoginFailed: Dispatch<SetStateAction<boolean>>
}

const moveToPasswordRecovery = () => {
  Linking.openURL('https://www.muvac.com/forgot-password').catch(error => console.log(error))
}

function Password(props: Props) {
  const { control, loginFailed, setLoginFailed } = props

  return (
    <Controller
      control={control}
      rules={{
        minLength: 6,
        required: true
      }}
      render={({ field: { onChange, onBlur, value }, formState: { errors } }): React.JSX.Element => {
        const errorMessage = !value
          ? 'This field is required'
          : 'Minimum 6 characters'
        const loginMessage = loginFailed ? 'No account was found using the specified email and password' : undefined

        return (
          <InputField
            linkTitle={'forgot password?'}
            onLinkPress={moveToPasswordRecovery}
            errorMessage={loginMessage ?? (errors.password ? errorMessage : undefined)}
            label={'Password'}
            placeholder=""
            password
            backgroundColor="white"
            onBlur={onBlur}
            onChangeText={(newValue: string) => {
              setLoginFailed(false)
              onChange(newValue)
            }}
            textColor="gray400"
            mb0
          />
        )
      }}
      name="password"
    />
  )
}

export default Password
