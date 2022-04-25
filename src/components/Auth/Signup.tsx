import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment, Label } from 'semantic-ui-react';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { registerFn } from '../../services/user';
import classess from './Signup.module.css';

interface IFormInput {
  userName?: string,
  email: string,
  password: string,
  reEnterPassword: string
};

const Signup: React.FC = () => {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm<IFormInput>();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { email, password } = data;
    try {
      const user = await registerFn({ email, password });
      user && navigate('/login');
    } catch(error) {
      const message = error as string;
      setMessage(message);
    }
  };

  return (
    <Grid style={{ height: '100vh' }} verticalAlign='middle' centered={true}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <span className={classess.heading}>Register for ChatApp</span>
        </Header>

        <Form size='large'>
          <Segment stacked>
            <Form.Field>
              <Controller
                name="userName"
                control={control}
                defaultValue=""
                rules={{ validate: value => !value || (value && value.length >= 3) }}
                render={({ field }) => <Form.Input icon='user' iconPosition='left' placeholder='Username' {...field} />}
              />
              {errors.userName &&  <Label basic color='red'>Please enter at least 3 character</Label>}
            </Form.Field>
            <Form.Field>
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                defaultValue=""
                render={({ field }) => <Form.Input icon='envelope' type="email" iconPosition='left' placeholder='E-mail address' {...field} />}
              />
              {errors.email &&  <Label basic color='red'>Please enter a value</Label>}
            </Form.Field>
            <Form.Field>
              <Controller
                name="password"
                control={control}
                rules={{ required: true, minLength: 6 }}
                defaultValue=""
                render={({ field }) => <Form.Input icon='lock' type="password" iconPosition='left' placeholder='Password' {...field} />}
              />
              {errors.password?.type === 'required' && <Label basic color='red'>Please enter a value</Label>}
              {errors.password?.type === 'minLength' && <Label basic color='red'>Password should be at least 6 characters</Label>}
            </Form.Field>
            <Form.Field>
              <Controller
                name="reEnterPassword"
                rules={{ required: true, minLength: 6, validate: value => value === getValues('password') }}
                control={control}
                defaultValue=""
                render={({ field }) => <Form.Input icon='refresh' type="password" iconPosition='left' placeholder='Renter Password' {...field} />}
              />
              {errors.reEnterPassword && errors.reEnterPassword?.type === 'required' && <Label basic color='red'>Please enter a value</Label>}
              {errors.reEnterPassword && errors.reEnterPassword?.type === 'validate' && <Label basic color='red'>Password and confirm password does not match</Label>}
            </Form.Field>

            <Button color='orange' fluid size='large' onClick={handleSubmit(onSubmit)}>
              Register
            </Button>
          </Segment>
        </Form>
        {
          message &&
            <Message
              error
              header='Error'
              content={message}
            />
        }
        <Message>
          Aldready an user? <a href='/login'> Log in</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default Signup;