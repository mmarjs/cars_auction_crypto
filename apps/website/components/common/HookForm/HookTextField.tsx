import { Controller, Control, FieldErrors } from 'react-hook-form'
import { FC, ReactNode } from 'react'
import clsx from 'clsx'

interface HookTextInputProps {
  name: string
  control: Control<any>
  defaultValue?: any
  errors: FieldErrors
  placeholder?: string
  icon?: ReactNode
  type?: 'password' | 'text' | 'number' | 'date' | 'email'
  disabled?: boolean
  classes?: string
}

const HookTextField: FC<HookTextInputProps> = ({
  name,
  control,
  defaultValue,
  errors,
  icon,
  classes,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ?? ''}
      render={({ field }) => (
        <div className={clsx(classes, 'flex flex-col flex-1 mb-3.5')}>
          <div className='w-full h-[42px] relative flex items-center mb-1'>
              {!!icon && (
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[26px] flex flex-shrink-0">
                      {icon}
                  </div>
              )}
              <input
                  className="w-full h-full font-semibold text-xs leading-[15px] bg-transparent text-white placeholder:text-secondary pl-6.5 pr-2 outline-none tracking-theme border-b border-dark focus:border-warning"
                  {...field}
                  {...props}
              />
          </div>
          {errors[name] && <span className='font-semibold text-xs text-warning'>{`${errors[name].message}`}</span>}
        </div>
      )}
    />
  )
}

export default HookTextField

